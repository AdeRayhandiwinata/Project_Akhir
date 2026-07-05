import { Car, CalendarCheck, MapPin } from "lucide-react";

const steps = [
  {
    icon: Car,
    number: "01",
    title: "Pilih Mobil",
    description: "Telusuri armada kami dan pilih kendaraan yang paling sesuai dengan kebutuhan perjalanan Anda.",
  },
  {
    icon: CalendarCheck,
    number: "02",
    title: "Atur Jadwal",
    description: "Tentukan tanggal dan durasi sewa. Hubungi kami via WhatsApp untuk konfirmasi ketersediaan.",
  },
  {
    icon: MapPin,
    number: "03",
    title: "Ambil & Nikmati",
    description: "Ambil kendaraan di lokasi yang telah disepakati atau kami antar ke lokasi Anda.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">
            Cara Sewa
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Mudah dalam 3 Langkah
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
                <step.icon className="h-7 w-7 text-emerald-600" />
              </div>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-emerald-400">
                {step.number}
              </span>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
