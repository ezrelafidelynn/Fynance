"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple authentication check (replace with real auth later)
    if (!formData.email || !formData.password) {
      alert("Mohon lengkapi email dan password!");
      return;
    }

    // Demo credentials from README
    const validCredentials = [
      {
        email: "owner@fynance.demo",
        password: "password123",
        role: "Business Owner",
      },
      { email: "staff@fynance.demo", password: "password123", role: "Staff" },
    ];

    const user = validCredentials.find(
      (cred) =>
        cred.email === formData.email && cred.password === formData.password
    );

    if (user) {
      // Mock authentication success
      console.log("Login successful:", { ...formData, role: user.role });
      alert(`Login berhasil sebagai ${user.role}! Mengarahkan ke dashboard...`);

      // Store user info in localStorage for demo purposes
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "fynance_user",
          JSON.stringify({
            email: user.email,
            role: user.role,
            name:
              user.role === "Business Owner" ? "Ahmad Sutanto" : "Staff Member",
          })
        );

        // Redirect to dashboard
        window.location.href = "/dashboard";
      }
    } else {
      alert(
        "Email atau password salah! \n\nCoba gunakan akun demo:\nEmail: owner@fynance.demo\nPassword: password123"
      );
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
          Selamat Datang Kembali
        </h2>
        <p className="mt-2 text-gray-600">Masuk ke akun Fynance Anda</p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Masukkan email Anda"
            />
          </div>
        </div>

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
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 bg-gray-50 focus:bg-white transition-colors"
              placeholder="Masukkan password Anda"
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

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm text-gray-700"
            >
              Ingat saya
            </label>
          </div>

          <Link
            href="/auth/forgot-password"
            className="text-sm text-green-600 hover:text-green-500"
          >
            Lupa password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors focus:ring-4 focus:ring-green-200"
        >
          Masuk
        </button>
      </form>

      {/* Demo Credentials */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">
          🎯 Demo Account:
        </h4>
        <div className="text-xs text-blue-700 space-y-1">
          <p>
            <strong>Email:</strong> owner@fynance.demo
          </p>
          <p>
            <strong>Password:</strong> password123
          </p>
          <p className="mt-2 text-blue-600">
            Gunakan kredensial di atas untuk mengakses dashboard demo!
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Atau</span>
          </div>
        </div>
      </div>

      {/* Register Link */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Belum punya akun?{" "}
          <Link
            href="/auth/register"
            className="text-green-600 hover:text-green-500 font-semibold"
          >
            Daftar sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}
