"use client";

import { useState } from "react";
import {
  Check,
  Crown,
  Zap,
  Users,
  BarChart3,
  Bot,
  Shield,
  Star,
} from "lucide-react";

const plans = [
  {
    id: "free",
    name: "Free Trial",
    price: 0,
    period: "30 hari",
    description: "Sempurna untuk memulai bisnis UMKM Anda",
    features: [
      "Dashboard dasar",
      "Sistem kasir sederhana",
      "Inventori terbatas (100 item)",
      "Forum umum",
      "Laporan bulanan",
      "Support email",
    ],
    limitations: [
      "Maksimal 100 produk",
      "Maksimal 500 transaksi/bulan",
      "Tidak ada AI Assistant",
      "Tidak ada laporan advanced",
    ],
    buttonText: "Aktif Sekarang",
    buttonStyle: "bg-gray-200 hover:bg-gray-300 text-gray-900",
    popular: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: 99000,
    period: "per bulan",
    description: "Fitur lengkap untuk bisnis yang sedang berkembang",
    features: [
      "Dashboard lengkap + analitik advanced",
      "Sistem kasir dengan fitur lengkap",
      "Inventori unlimited",
      "Forum premium + networking",
      "AI Assistant untuk semua fitur",
      "Laporan keuangan detail",
      "Multi-user access (hingga 5 staff)",
      "API access",
      "Priority support",
      "Backup otomatis",
    ],
    limitations: [],
    buttonText: "Upgrade Sekarang",
    buttonStyle: "bg-green-500 hover:bg-green-600 text-white",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 299000,
    period: "per bulan",
    description: "Solusi lengkap untuk bisnis besar dan multi-cabang",
    features: [
      "Semua fitur Premium",
      "Multi-store management",
      "Advanced analytics & forecasting",
      "Custom integrations",
      "Dedicated account manager",
      "On-site training",
      "Custom branding",
      "Advanced security features",
      "Unlimited users",
      "SLA 99.9% uptime",
    ],
    limitations: [],
    buttonText: "Hubungi Sales",
    buttonStyle: "bg-purple-500 hover:bg-purple-600 text-white",
    popular: false,
  },
];

const currentPlan = "free"; // Mock current user plan

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState(currentPlan);
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly or yearly

  const getDiscountedPrice = (price: number) => {
    return billingCycle === "yearly" ? Math.floor(price * 10) : price; // 2 months free for yearly
  };

  const handleUpgrade = (planId: string) => {
    // TODO: Implement payment integration
    console.log("Upgrading to plan:", planId);
    alert(
      `Memproses upgrade ke paket ${
        plans.find((p) => p.id === planId)?.name
      }...`
    );
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Pilih Paket Berlangganan
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Upgrade akun Anda untuk mendapatkan akses ke fitur premium dan
          tingkatkan produktivitas bisnis
        </p>
      </div>

      {/* Current Plan Status */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Crown className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Paket Saat Ini: {plans.find((p) => p.id === currentPlan)?.name}
              </h3>
              <p className="text-sm text-gray-500">
                {currentPlan === "free"
                  ? "Sisa 23 hari masa trial"
                  : "Berlangganan aktif hingga 30 Nov 2024"}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">
              {currentPlan === "free"
                ? "Gratis"
                : `Rp ${plans
                    .find((p) => p.id === currentPlan)
                    ?.price.toLocaleString()}`}
            </p>
            {currentPlan !== "free" && (
              <p className="text-sm text-gray-500">per bulan</p>
            )}
          </div>
        </div>
      </div>

      {/* Billing Cycle Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              billingCycle === "monthly"
                ? "bg-white text-gray-900 shadow"
                : "text-gray-600"
            }`}
          >
            Bulanan
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              billingCycle === "yearly"
                ? "bg-white text-gray-900 shadow"
                : "text-gray-600"
            }`}
          >
            Tahunan
            <span className="ml-1 text-xs bg-green-100 text-green-800 px-1 rounded">
              Hemat 17%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white rounded-xl shadow-lg relative ${
              plan.popular ? "ring-2 ring-green-500" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  Paling Populer
                </span>
              </div>
            )}

            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  {plan.price === 0 ? (
                    <div>
                      <span className="text-4xl font-bold text-gray-900">
                        Gratis
                      </span>
                      <p className="text-sm text-gray-500">{plan.period}</p>
                    </div>
                  ) : (
                    <div>
                      <span className="text-4xl font-bold text-gray-900">
                        Rp {getDiscountedPrice(plan.price).toLocaleString()}
                      </span>
                      <p className="text-sm text-gray-500">
                        {billingCycle === "yearly" ? "per tahun" : plan.period}
                      </p>
                      {billingCycle === "yearly" && plan.price > 0 && (
                        <p className="text-xs text-green-600">
                          Hemat Rp{" "}
                          {(
                            plan.price * 12 -
                            getDiscountedPrice(plan.price)
                          ).toLocaleString()}
                          /tahun
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleUpgrade(plan.id)}
                  disabled={plan.id === currentPlan}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    plan.id === currentPlan
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : plan.buttonStyle
                  }`}
                >
                  {plan.id === currentPlan ? "Paket Aktif" : plan.buttonText}
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Fitur Termasuk:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Batasan:
                    </h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                          <span className="text-sm text-gray-600">
                            {limitation}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Comparison */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        <div className="px-6 py-4 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900">
            Perbandingan Fitur Lengkap
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fitur
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Free Trial
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Premium
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Dashboard Analytics
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="text-gray-400">Dasar</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  AI Assistant
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="text-gray-400">✕</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Multi-User Access
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="text-gray-400">1 User</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="text-gray-700">5 Users</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="text-gray-700">Unlimited</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  API Access
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="text-gray-400">✕</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Priority Support
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="text-gray-400">Email</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="text-gray-700">Chat + Email</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="text-gray-700">Dedicated Support</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Pertanyaan Umum
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900">
              Apakah saya bisa upgrade atau downgrade kapan saja?
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Ya, Anda dapat mengubah paket berlangganan kapan saja. Perubahan
              akan berlaku pada periode billing berikutnya.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">
              Apakah ada biaya setup atau biaya tersembunyi?
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Tidak ada biaya setup atau biaya tersembunyi. Harga yang tertera
              adalah harga final yang akan Anda bayar.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">
              Bagaimana jika saya ingin membatalkan langganan?
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Anda dapat membatalkan langganan kapan saja melalui pengaturan
              akun. Akses akan tetap aktif hingga akhir periode billing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
