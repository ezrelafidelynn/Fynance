import Link from "next/link";
import Image from "next/image";
import {
  BarChart3,
  ShoppingCart,
  Package,
  Users,
  Shield,
  Bot,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src="/logo.jpeg"
                  alt="Fynance Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Fynance
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Masuk
              </Link>
              <Link
                href="/auth/register"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Kelola Bisnis UMKM Anda dengan{" "}
              <span className="text-green-500">Fynance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Platform lengkap untuk mengelola keuangan, inventori, sistem
              kasir, dan networking bisnis UMKM Anda dalam satu aplikasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center"
              >
                Mulai Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#features"
                className="border border-green-500 text-green-500 hover:bg-green-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Lihat Fitur
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fitur Lengkap untuk Bisnis Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Semua yang dibutuhkan UMKM untuk berkembang dalam satu platform
              terintegrasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Dashboard Keuangan
              </h3>
              <p className="text-gray-600">
                Pantau pendapatan, pengeluaran, dan statistik penjualan dengan
                grafik real-time yang mudah dipahami.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <ShoppingCart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sistem Kasir
              </h3>
              <p className="text-gray-600">
                Proses transaksi penjualan dan pembelian dengan ID barang unik,
                otomatis update stok produk.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Manajemen Inventori
              </h3>
              <p className="text-gray-600">
                Kelola stok barang, status restock, dan laporan inventori dengan
                tracking real-time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Forum Networking
              </h3>
              <p className="text-gray-600">
                Jaringan dengan sesama pelaku UMKM, berbagi ide, dan bangun
                kerjasama bisnis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Keamanan Data
              </h3>
              <p className="text-gray-600">
                Sistem autentikasi dengan role management untuk Business Owner
                dan Staff yang aman.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI Assistant
              </h3>
              <p className="text-gray-600">
                Asisten AI untuk mencatat transaksi otomatis dan memberikan
                saran keuangan bisnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pilih Paket yang Tepat
            </h2>
            <p className="text-xl text-gray-600">
              Mulai gratis, upgrade sesuai kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Free Trial
                </h3>
                <p className="text-gray-600 mb-4">Untuk memulai bisnis Anda</p>
                <div className="text-4xl font-bold text-gray-900">Gratis</div>
                <p className="text-sm text-gray-500">30 hari</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Dashboard dasar</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Sistem kasir sederhana</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Inventori terbatas (100 item)
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Forum umum</span>
                </li>
              </ul>

              <Link
                href="/auth/register"
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 py-3 px-6 rounded-lg font-semibold text-center block transition-colors"
              >
                Mulai Gratis
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Populer
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Premium
                </h3>
                <p className="text-gray-600 mb-4">
                  Fitur lengkap untuk bisnis profesional
                </p>
                <div className="text-4xl font-bold text-gray-900">
                  Rp 99.000
                </div>
                <p className="text-sm text-gray-500">per bulan</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Dashboard lengkap + analitik
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Sistem kasir advanced</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Inventori unlimited</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Forum premium + networking
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">AI Assistant</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Laporan keuangan detail</span>
                </li>
              </ul>

              <Link
                href="/auth/register?plan=premium"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors"
              >
                Upgrade ke Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="ml-2 text-xl font-bold">Fynance</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Platform terpercaya untuk membantu UMKM mengelola keuangan,
                inventori, dan mengembangkan jaringan bisnis.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Produk</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Sistem Kasir
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Inventori
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Forum
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Karir
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fynance. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
