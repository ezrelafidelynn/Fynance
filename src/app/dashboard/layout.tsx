"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  ShoppingCart,
  Package,
  Users,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  User,
  Bot,
  CreditCard,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Kasir", href: "/dashboard/cashier", icon: ShoppingCart },
  { name: "Inventori", href: "/dashboard/inventory", icon: Package },
  { name: "Forum", href: "/dashboard/forum", icon: Users },
  { name: "AI Assistant", href: "/dashboard/ai-assistant", icon: Bot },
  { name: "Subscription", href: "/dashboard/subscription", icon: CreditCard },
  { name: "Pengaturan", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<{
    email: string;
    role: string;
    name: string;
  } | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const pathname = usePathname();

  // Load user data from localStorage
  useEffect(() => {
    setIsHydrated(true);
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("fynance_user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        // Redirect to login if no user data
        window.location.href = "/auth/login";
      }
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("fynance_user");
      window.location.href = "/";
    }
  };

  // Show loading state during hydration
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 flex z-40 md:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          onClick={() => setSidebarOpen(false)}
        />
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
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

            {user && (
              <div className="px-4 py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                    <p className="text-xs text-green-600 font-medium">
                      {user.role}
                    </p>
                  </div>
                </div>
              </div>
            )}
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive
                        ? "bg-green-100 text-green-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <item.icon
                      className={`mr-4 h-6 w-6 ${
                        isActive
                          ? "text-green-500"
                          : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-xs text-gray-500">Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                Fynance
              </span>
            </div>
            <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "bg-green-100 text-green-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-6 w-6 ${
                        isActive
                          ? "text-green-500"
                          : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          {user && (
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="flex items-center w-full">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-700">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">{user.role}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="ml-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4 text-gray-400 hover:text-red-500" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="md:pl-64 flex flex-col flex-1">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-50">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Top bar */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex items-center">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500"
                      placeholder="Cari produk, transaksi..."
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  <Bell className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1">
          <div className="py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
