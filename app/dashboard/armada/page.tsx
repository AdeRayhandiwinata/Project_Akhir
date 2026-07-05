const armadaData = [
  {
    id: 1,
    nama: "Toyota Avanza",
    tipe: "MPV",
    tahun: 2023,
    plat: "KT 1234 AB",
    warna: "Putih",
    harga: 350000,
    status: "Tersedia",
  },
  {
    id: 2,
    nama: "Honda Brio",
    tipe: "Hatchback",
    tahun: 2024,
    plat: "KT 5678 CD",
    warna: "Merah",
    harga: 300000,
    status: "Disewa",
  },
  {
    id: 3,
    nama: "Toyota Innova Reborn",
    tipe: "MPV",
    tahun: 2024,
    plat: "KT 9012 EF",
    warna: "Hitam",
    harga: 550000,
    status: "Tersedia",
  },
  {
    id: 4,
    nama: "Toyota Fortuner",
    tipe: "SUV",
    tahun: 2023,
    plat: "KT 3456 GH",
    warna: "Silver",
    harga: 800000,
    status: "Disewa",
  },
  {
    id: 5,
    nama: "Honda CR-V",
    tipe: "SUV",
    tahun: 2024,
    plat: "KT 7890 IJ",
    warna: "Putih",
    harga: 750000,
    status: "Tersedia",
  },
  {
    id: 6,
    nama: "Daihatsu Xenia",
    tipe: "MPV",
    tahun: 2022,
    plat: "KT 1122 KL",
    warna: "Biru",
    harga: 300000,
    status: "Tersedia",
  },
];

export default function ArmadaPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-black">Daftar Armada</h1>
        <button className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          + Tambah Armada
        </button>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Cari mobil..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
            <option value="">Semua Status</option>
            <option value="tersedia">Tersedia</option>
            <option value="disewa">Disewa</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
            <option value="">Semua Tipe</option>
            <option value="mpv">MPV</option>
            <option value="suv">SUV</option>
            <option value="hatchback">Hatchback</option>
          </select>
        </div>
      </div>

      {/* Tabel Armada */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-black">
                No
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Mobil
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Tipe
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Tahun
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Plat
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Warna
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Harga/Hari
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Status
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {armadaData.map((mobil) => (
              <tr
                key={mobil.id}
                className="border-b border-gray-100 hover:bg-gray-50 text-black"
              >
                <td className="py-3 px-4">{mobil.id}</td>
                <td className="py-3 px-4 font-medium">{mobil.nama}</td>
                <td className="py-3 px-4">{mobil.tipe}</td>
                <td className="py-3 px-4">{mobil.tahun}</td>
                <td className="py-3 px-4 font-mono text-xs">{mobil.plat}</td>
                <td className="py-3 px-4">{mobil.warna}</td>
                <td className="py-3 px-4">
                  Rp {mobil.harga.toLocaleString("id-ID")}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      mobil.status === "Tersedia"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {mobil.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 text-xs">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800 text-xs">
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
