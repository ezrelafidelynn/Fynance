"use client";

import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  Eye,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Mock data untuk demonstrasi
const salesData = [
  { name: "Sen", penjualan: 4000, pembelian: 2400 },
  { name: "Sel", penjualan: 3000, pembelian: 1398 },
  { name: "Rab", penjualan: 2000, pembelian: 9800 },
  { name: "Kam", penjualan: 2780, pembelian: 3908 },
  { name: "Jum", penjualan: 1890, pembelian: 4800 },
  { name: "Sab", penjualan: 2390, pembelian: 3800 },
  { name: "Min", penjualan: 3490, pembelian: 4300 },
];

const productData = [
  { name: "Elektronik", value: 400, color: "#4CAF50" },
  { name: "Fashion", value: 300, color: "#2E7D32" },
  { name: "Makanan", value: 200, color: "#81C784" },
  { name: "Lainnya", value: 100, color: "#A5D6A7" },
];

const recentTransactions = [
  {
    id: "TRX001",
    type: "Penjualan",
    customer: "Ahmad Rizki",
    amount: 150000,
    time: "10:30",
  },
  {
    id: "TRX002",
    type: "Pembelian",
    customer: "Supplier ABC",
    amount: -75000,
    time: "11:15",
  },
  {
    id: "TRX003",
    type: "Penjualan",
    customer: "Sari Dewi",
    amount: 230000,
    time: "13:45",
  },
  {
    id: "TRX004",
    type: "Penjualan",
    customer: "Budi Santoso",
    amount: 95000,
    time: "15:20",
  },
];

export default function DashboardPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Selamat datang kembali! Berikut ringkasan bisnis Anda hari ini.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {/* Total Pendapatan */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Pendapatan
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    Rp 12,850,000
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600 font-medium">+12.5%</span>
              <span className="text-gray-500 ml-2">dari bulan lalu</span>
            </div>
          </div>
        </div>

        {/* Total Pengeluaran */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Pengeluaran
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    Rp 8,450,000
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
              <span className="text-red-600 font-medium">+8.2%</span>
              <span className="text-gray-500 ml-2">dari bulan lalu</span>
            </div>
          </div>
        </div>

        {/* Total Transaksi */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Transaksi
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">1,247</dd>
                </dl>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600 font-medium">+24.3%</span>
              <span className="text-gray-500 ml-2">dari bulan lalu</span>
            </div>
          </div>
        </div>

        {/* Total Produk */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Produk
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">342</dd>
                </dl>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600 font-medium">+5.1%</span>
              <span className="text-gray-500 ml-2">produk baru</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sales Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">
              Grafik Penjualan Mingguan
            </h3>
            <button className="text-green-600 hover:text-green-500 text-sm font-medium flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              Lihat Detail
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                formatter={(value, name) => [
                  `Rp ${value.toLocaleString()}`,
                  name === "penjualan" ? "Penjualan" : "Pembelian",
                ]}
              />
              <Line
                type="monotone"
                dataKey="penjualan"
                stroke="#4CAF50"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="pembelian"
                stroke="#f44336"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Product Distribution */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">
              Distribusi Produk
            </h3>
            <button className="text-green-600 hover:text-green-500 text-sm font-medium flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              Lihat Detail
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent transactions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Transaksi Terbaru
            </h3>
            <button className="text-green-600 hover:text-green-500 text-sm font-medium">
              Lihat Semua
            </button>
          </div>
          <div className="flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <li key={transaction.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          transaction.type === "Penjualan"
                            ? "bg-green-100"
                            : "bg-red-100"
                        }`}
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${
                            transaction.type === "Penjualan"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        ></div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {transaction.customer}
                      </p>
                      <p className="text-sm text-gray-500">
                        {transaction.id} • {transaction.time}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span
                        className={`text-sm font-medium ${
                          transaction.amount > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.amount > 0 ? "+" : ""}Rp{" "}
                        {Math.abs(transaction.amount).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
