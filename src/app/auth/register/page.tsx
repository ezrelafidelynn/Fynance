"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock, User, Building } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    role: "owner",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.businessName ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Mohon lengkapi semua field yang diperlukan!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Password dan konfirmasi password tidak sama!");
      return;
    }

    if (!formData.agreeToTerms) {
      alert("Mohon setujui syarat dan ketentuan!");
      return;
    }

    // Mock registration success
    console.log("Registration successful:", formData);
    alert("Registrasi berhasil! Mengarahkan ke dashboard...");

    // Redirect to dashboard
    if (typeof window !== "undefined") {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Logo and Header */}
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
          <Image
            src="/logo.jpeg"
            alt="Fynance Logo"
            width={64}
            height={64}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">
          Bergabung dengan Fynance
        </h2>
        <p className="mt-2 text-gray-600">
          Mulai kelola bisnis UMKM Anda hari ini
        </p>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nama Lengkap
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-gray-50 focus:bg-white transition-colors"
                placeholder="Nama lengkap Anda"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="businessName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nama Bisnis
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="businessName"
                name="businessName"
                type="text"
                required
                value={formData.businessName}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-gray-50 focus:bg-white transition-colors"
                placeholder="Nama bisnis/toko Anda"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-gray-50 focus:bg-white transition-colors"
              placeholder="email@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-gray-50 focus:bg-white transition-colors"
          >
            <option value="owner">Business Owner</option>
            <option value="staff">Staff</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-gray-50 focus:bg-white transition-colors"
                placeholder="Minimal 8 karakter"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Konfirmasi Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-gray-50 focus:bg-white transition-colors"
                placeholder="Ulangi password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <input
            id="agreeToTerms"
            name="agreeToTerms"
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
            required
          />
          <label
            htmlFor="agreeToTerms"
            className="ml-2 block text-sm text-gray-700"
          >
            Saya setuju dengan{" "}
            <Link href="/terms" className="text-green-600 hover:text-green-500">
              Syarat & Ketentuan
            </Link>{" "}
            dan{" "}
            <Link
              href="/privacy"
              className="text-green-600 hover:text-green-500"
            >
              Kebijakan Privasi
            </Link>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors focus:ring-4 focus:ring-green-200"
        >
          Daftar Sekarang
        </button>
      </form>

      {/* Login Link */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Sudah punya akun?{" "}
          <Link
            href="/auth/login"
            className="text-green-600 hover:text-green-500 font-semibold"
          >
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
