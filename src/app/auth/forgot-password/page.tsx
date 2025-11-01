"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Mohon masukkan email Anda!");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log("Reset password email sent to:", email);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Email Terkirim!
        </h2>
        <p className="text-gray-600 mb-6">
          Kami telah mengirimkan instruksi reset password ke <br />
          <strong>{email}</strong>
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Silakan periksa inbox email Anda dan ikuti instruksi untuk reset
          password. Jika tidak ada di inbox, cek folder spam.
        </p>

        <div className="space-y-4">
          <Link
            href="/auth/login"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
          >
            Kembali ke Login
          </Link>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setEmail("");
            }}
            className="w-full text-green-600 hover:text-green-700 font-medium py-2 transition-colors"
          >
            Kirim Ulang Email
          </button>
        </div>
      </div>
    );
  }

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
        <h2 className="text-3xl font-bold text-gray-900">Lupa Password?</h2>
        <p className="mt-2 text-gray-600">
          Masukkan email Anda dan kami akan mengirimkan instruksi reset password
        </p>
      </div>

      {/* Forgot Password Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder-gray-400"
              placeholder="contoh@email.com"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Mengirim Email...
            </>
          ) : (
            "Kirim Instruksi Reset"
          )}
        </button>
      </form>

      {/* Back to Login */}
      <div className="mt-6 text-center">
        <Link
          href="/auth/login"
          className="inline-flex items-center text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Kembali ke Login
        </Link>
      </div>

      {/* Demo Notice */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="text-sm font-medium text-blue-800 mb-2">📧 Mode Demo</h4>
        <p className="text-xs text-blue-600">
          Ini adalah mode demo. Email reset password tidak akan benar-benar
          dikirim. Gunakan akun demo: <strong>owner@fynance.demo</strong> untuk
          testing.
        </p>
      </div>
    </div>
  );
}
