const pelangganData = [
  {
    id: 1,
    nama: "Budi Santoso",
    email: "budi.santoso@email.com",
    telepon: "0812-3456-7890",
    alamat: "Jl. Sudirman No. 123, Balikpapan",
    totalSewa: 5,
    status: "Aktif",
  },
  {
    id: 2,
    nama: "Siti Rahayu",
    email: "siti.rahayu@email.com",
    telepon: "0813-4567-8901",
    alamat: "Jl. Ahmad Yani No. 45, Balikpapan",
    totalSewa: 3,
    status: "Aktif",
  },
  {
    id: 3,
    nama: "Ahmad Fauzi",
    email: "ahmad.fauzi@email.com",
    telepon: "0815-6789-0123",
    alamat: "Jl. Gajah Mada No. 67, Balikpapan",
    totalSewa: 8,
    status: "Aktif",
  },
  {
    id: 4,
    nama: "Dewi Lestari",
    email: "dewi.lestari@email.com",
    telepon: "0816-7890-1234",
    alamat: "Jl. Pahlawan No. 89, Balikpapan",
    totalSewa: 2,
    status: "Aktif",
  },
  {
    id: 5,
    nama: "Rizky Pratama",
    email: "rizky.pratama@email.com",
    telepon: "0817-8901-2345",
    alamat: "Jl. Diponegoro No. 101, Balikpapan",
    totalSewa: 1,
    status: "Aktif",
  },
  {
    id: 6,
    nama: "Maya Putri",
    email: "maya.putri@email.com",
    telepon: "0818-9012-3456",
    alamat: "Jl. Merdeka No. 111, Balikpapan",
    totalSewa: 4,
    status: "Aktif",
  },
];

export default function PelangganPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-black">Pelanggan</h1>
        <button className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          + Tambah Pelanggan
        </button>
      </div>

      {/* Ringkasan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <p className="text-sm text-black">Total Pelanggan</p>
          <p className="text-xl font-bold text-black mt-1">156</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <p className="text-sm text-black">Pelanggan Aktif</p>
          <p className="text-xl font-bold text-green-600 mt-1">142</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <p className="text-sm text-black">Pelanggan Baru (Bulan Ini)</p>
          <p className="text-xl font-bold text-blue-600 mt-1">12</p>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Cari pelanggan..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
            <option value="">Semua Status</option>
            <option value="aktif">Aktif</option>
            <option value="tidak-aktif">Tidak Aktif</option>
          </select>
        </div>
      </div>

      {/* Tabel Pelanggan */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-black">
                No
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Nama
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Email
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Telepon
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Alamat
              </th>
              <th className="text-left py-3 px-4 font-medium text-black">
                Total Sewa
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
            {pelangganData.map((plg) => (
              <tr
                key={plg.id}
                className="border-b border-gray-100 hover:bg-gray-50 text-black"
              >
                <td className="py-3 px-4">{plg.id}</td>
                <td className="py-3 px-4 font-medium">{plg.nama}</td>
                <td className="py-3 px-4 text-blue-600">{plg.email}</td>
                <td className="py-3 px-4 font-mono text-xs">{plg.telepon}</td>
                <td className="py-3 px-4 max-w-[200px] truncate">
                  {plg.alamat}
                </td>
                <td className="py-3 px-4">{plg.totalSewa}x</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                    {plg.status}
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
