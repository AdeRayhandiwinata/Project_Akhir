import { buttonVariants } from "@/components/ui/button";
import { Shield, Clock, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Rental Mobil Terpercaya
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Perjalanan Nyaman,
            <br />
            <span className="text-emerald-400">Harga Terjangkau</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
            Sewa mobil mudah dan cepat. Pilih armada favorit Anda, atur jadwal, dan
            siap berangkat. Tersedia berbagai pilihan kendaraan untuk segala kebutuhan.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#mobil"
              className={buttonVariants({
                size: "lg",
                className: "rounded-full bg-emerald-500 px-8 text-white hover:bg-emerald-600",
              })}
            >
              Lihat Armada
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "rounded-full border-slate-600 px-8 text-white hover:bg-slate-700",
              })}
            >
              Chat WhatsApp
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { icon: Shield, text: "Asuransi Lengkap" },
              { icon: Clock, text: "Layanan 24 Jam" },
              { icon: Star, text: "4.9 Rating Pelanggan" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-slate-400">
                <item.icon className="h-4 w-4 text-emerald-400" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
