import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Users, Fuel, Settings, Star } from "lucide-react";

interface Car {
  name: string;
  category: string;
  price: number;
  seats: number;
  fuel: string;
  transmission: string;
  rating: number;
  image: string;
  popular?: boolean;
}

const cars: Car[] = [
  {
    name: "Toyota Avanza",
    category: "MPV",
    price: 250000,
    seats: 7,
    fuel: "Bensin",
    transmission: "Manual",
    rating: 4.8,
    image: "/car-avanza.jpg",
    popular: true,
  },
  {
    name: "Honda Brio",
    category: "Hatchback",
    price: 200000,
    seats: 5,
    fuel: "Bensin",
    transmission: "Automatic",
    rating: 4.7,
    image: "/car-brio.jpg",
  },
  {
    name: "Toyota Innova Reborn",
    category: "MPV Premium",
    price: 400000,
    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.9,
    image: "/car-innova.jpg",
    popular: true,
  },
  {
    name: "Honda Civic",
    category: "Sedan",
    price: 350000,
    seats: 5,
    fuel: "Bensin",
    transmission: "Automatic",
    rating: 4.6,
    image: "/car-civic.jpg",
  },
  {
    name: "Toyota Fortuner",
    category: "SUV",
    price: 500000,
    seats: 7,
    fuel: "Diesel",
    transmission: "Automatic",
    rating: 4.9,
    image: "/car-fortuner.jpg",
    popular: true,
  },
  {
    name: "Daihatsu Xenia",
    category: "MPV",
    price: 230000,
    seats: 7,
    fuel: "Bensin",
    transmission: "Manual",
    rating: 4.5,
    image: "/car-xenia.jpg",
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}

function CarCard({ car }: { car: Car }) {
  return (
    <Card className="group overflow-hidden border-border/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1">
      {/* Placeholder image area */}
      <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold text-slate-300">
            {car.name.split(" ").map((w) => w[0]).join("")}
          </span>
        </div>
        {car.popular && (
          <Badge className="absolute left-3 top-3 bg-emerald-500 text-white hover:bg-emerald-600">
            Populer
          </Badge>
        )}
      </div>

      <CardContent className="p-5">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {car.category}
            </p>
            <h3 className="text-lg font-bold">{car.name}</h3>
          </div>
          <div className="flex items-center gap-1 text-sm text-amber-500">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="font-medium">{car.rating}</span>
          </div>
        </div>

        <div className="mb-4 flex gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {car.seats} kursi
          </span>
          <span className="flex items-center gap-1">
            <Fuel className="h-3.5 w-3.5" />
            {car.fuel}
          </span>
          <span className="flex items-center gap-1">
            <Settings className="h-3.5 w-3.5" />
            {car.transmission}
          </span>
        </div>

        <div className="flex items-end justify-between border-t border-border/40 pt-4">
          <div>
            <p className="text-xs text-muted-foreground">mulai dari</p>
            <p className="text-xl font-bold text-emerald-600">
              {formatPrice(car.price)}
              <span className="text-xs font-normal text-muted-foreground">/hari</span>
            </p>
          </div>
          <a
            href={`https://wa.me/6281234567890?text=Halo, saya tertarik sewa ${car.name}. Mohon info lengkap.`}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ className: "rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-600" })}
          >
            Sewa Sekarang
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default function CarList() {
  return (
    <section id="mobil" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-lg">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">
            Armada Kami
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Pilih Mobil Sesuai Kebutuhan
          </h2>
          <p className="mt-3 text-muted-foreground">
            Semua kendaraan dirawat secara berkala dan dilengkapi asuransi untuk
            perjalanan yang aman dan nyaman.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.name} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
