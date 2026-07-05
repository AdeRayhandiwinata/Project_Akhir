import { Car, Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="kontak" className="border-t border-border/40 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2 font-bold text-lg text-white">
              <Car className="h-5 w-5 text-emerald-400" />
              DriveRent
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Solusi rental mobil terpercaya dengan armada lengkap dan pelayanan
              terbaik di kota Anda.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="mb-3 font-semibold text-white">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                +62 812-3456-7890
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                info@driverent.id
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-emerald-400" />
                www.driverent.id
              </li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div>
            <h4 className="mb-3 font-semibold text-white">Jam Operasional</h4>
            <ul className="space-y-1 text-sm text-slate-400">
              <li>Senin - Sabtu: 07.00 - 22.00</li>
              <li>Minggu: 08.00 - 20.00</li>
              <li>Layanan darurat: 24 Jam</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700/50 pt-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} DriveRent. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
