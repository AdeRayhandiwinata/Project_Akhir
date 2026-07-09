const transaksiData = [
  {
    id: "TRX-001",
    pelanggan: "Budi Santoso",
    mobil: "Toyota Avanza",
    tanggalSewa: "01 Jul 2026",
    tanggalKembali: "05 Jul 2026",
    durasi: 4,
    total: 1400000,
    status: "Selesai",
  },
  {
    id: "TRX-002",
    pelanggan: "Siti Rahayu",
    mobil: "Honda Brio",
    tanggalSewa: "03 Jul 2026",
    tanggalKembali: "06 Jul 2026",
    durasi: 3,
    total: 900000,
    status: "Berlangsung",
  },
  {
    id: "TRX-003",
    pelanggan: "Ahmad Fauzi",
    mobil: "Toyota Innova Reborn",
    tanggalSewa: "02 Jul 2026",
    tanggalKembali: "04 Jul 2026",
    durasi: 2,
    total: 1100000,
    status: "Selesai",
  },
  {
    id: "TRX-004",
    pelanggan: "Dewi Lestari",
    mobil: "Toyota Fortuner",
    tanggalSewa: "05 Aug 2026",
    tanggalKembali: "08 Aug 2026",
    durasi: 3,
    total: 2400000,
    status: "Menunggu",
  },
  {
    id: "TRX-005",
    pelanggan: "Rizky Pratama",
    mobil: "Honda CR-V",
    tanggalSewa: "04 Aug 2026",
    tanggalKembali: "07 Aug 2026",
    durasi: 3,
    total: 2250000,
    status: "Berlangsung",
  },
  {
    id: "TRX-006",
    pelanggan: "Maya Putri",
    mobil: "Daihatsu Xenia",
    tanggalSewa: "01 Aug 2026",
    tanggalKembali: "03 Aug 2026",
    durasi: 2,
    total: 600000,
    status: "Selesai",
  },
];

export default function TransaksiPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-black">Transaksi</h1>
        <button className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          + Transaksi Baru
        </button>
      </div>

      {/* Ringkasan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <p className="text-sm text-black">Total Transaksi</p>
          <p className="text-xl font-bold text-black mt-1">6</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <p className="text-sm text-black">Berlangsung</p>
          <p className="text-xl font-bold text-blue-600 mt-1">2</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <p className="text-sm text-black">Total Pendapatan</p>
          <p className="text-xl font-bold text-green-600 mt-1">
            Rp 8.650.000
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Cari transaksi..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
            <option value="">Semua Status</option>
            <option value="selesai">Selesai</option>
            <option value="berlangsung">Berlangsung</option>
            <option value="menunggu">Menunggu</option>
          </select>
          <input
            type="date"
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tabel Transaksi */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-black">
                ID
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Pelanggan
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Mobil
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Tanggal Sewa
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Tanggal Kembali
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Durasi
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Total
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
            {transaksiData.map((trx) => (
              <tr
                key={trx.id}
                className="border-b border-gray-100 hover:bg-gray-50 text-black"
              >
                <td className="py-3 px-4 font-mono text-xs">{trx.id}</td>
                <td className="py-3 px-4">{trx.pelanggan}</td>
                <td className="py-3 px-4">{trx.mobil}</td>
                <td className="py-3 px-4">{trx.tanggalSewa}</td>
                <td className="py-3 px-4">{trx.tanggalKembali}</td>
                <td className="py-3 px-4">{trx.durasi} hari</td>
                <td className="py-3 px-4">
                  Rp {trx.total.toLocaleString("id-ID")}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      trx.status === "Selesai"
                        ? "bg-green-100 text-green-700"
                        : trx.status === "Berlangsung"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {trx.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 text-xs">
                      Detail
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
