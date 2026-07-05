export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Card Total Armada */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-black">Total Armada</p>
              <p className="text-2xl font-bold text-black mt-1">24</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-xl">🚗</span>
            </div>
          </div>
          <p className="text-xs text-green-600 mt-3">+2 bulan ini</p>
        </div>

        {/* Card Transaksi Hari Ini */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-black">Transaksi Hari Ini</p>
              <p className="text-2xl font-bold text-black mt-1">8</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xl">📋</span>
            </div>
          </div>
          <p className="text-xs text-green-600 mt-3">+3 dari kemarin</p>
        </div>

        {/* Card Pelanggan Aktif */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-black">Pelanggan Aktif</p>
              <p className="text-2xl font-bold text-black mt-1">156</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 text-xl">👥</span>
            </div>
          </div>
          <p className="text-xs text-green-600 mt-3">+12 bulan ini</p>
        </div>

        {/* Card Pendapatan */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-black">Pendapatan Bulan Ini</p>
              <p className="text-2xl font-bold text-black mt-1">Rp 45JT</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-yellow-600 text-xl">💰</span>
            </div>
          </div>
          <p className="text-xs text-green-600 mt-3">+18% dari bulan lalu</p>
        </div>
      </div>

      {/* Transaksi Terakhir */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-black mb-4">
          Transaksi Terakhir
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-black">
                  No
                </th>
                <th className="text-left py-3 px-4 font-medium text-black">
                  Pelanggan
                </th>
                <th className="text-left py-3 px-4 font-medium text-black">
                  Mobil
                </th>
                <th className="text-left py-3 px-4 font-medium text-black">
                  Tanggal
                </th>
                <th className="text-left py-3 px-4 font-medium text-black">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50 text-black">
                <td className="py-3 px-4">001</td>
                <td className="py-3 px-4">Budi Santoso</td>
                <td className="py-3 px-4">Toyota Avanza</td>
                <td className="py-3 px-4">05 Jul 2026</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    Selesai
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 text-black">
                <td className="py-3 px-4">002</td>
                <td className="py-3 px-4">Siti Rahayu</td>
                <td className="py-3 px-4">Honda Brio</td>
                <td className="py-3 px-4">05 Jul 2026</td>
                <td className="py-3 px-4">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                    Berlangsung
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 text-black">
                <td className="py-3 px-4">003</td>
                <td className="py-3 px-4">Ahmad Fauzi</td>
                <td className="py-3 px-4">Innova Reborn</td>
                <td className="py-3 px-4">04 Jul 2026</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    Selesai
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 text-black">
                <td className="py-3 px-4">004</td>
                <td className="py-3 px-4">Dewi Lestari</td>
                <td className="py-3 px-4">Toyota Fortuner</td>
                <td className="py-3 px-4">04 Jul 2026</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">
                    Menunggu
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
