import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Wisatawan",
    text: "Pelayanan sangat memuaskan. Mobil bersih, driver ramah, dan tepat waktu. Sangat recommended untuk wisata di Bali!",
    rating: 5,
  },
  {
    name: "Sari Dewi",
    role: "Eksekutif",
    text: "Sering sewa mobil untuk keperluan bisnis. Prosesnya cepat dan mudah, mobil selalu dalam kondisi prima.",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Keluarga",
    text: "Liburan keluarga jadi lebih menyenangkan dengan Innova Reborn yang nyaman. Anak-anak betah di perjalanan.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">
            Testimoni
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Apa Kata Pelanggan Kami
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/40">
              <CardContent className="p-6">
                <Quote className="mb-3 h-8 w-8 text-emerald-400/40" />
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
