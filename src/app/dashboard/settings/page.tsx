"use client";

import { useState, useEffect } from "react";
import {
  User,
  Building,
  Bell,
  Shield,
  Palette,
  Globe,
  CreditCard,
  Download,
  Trash2,
  Eye,
  EyeOff,
  Save,
  Camera,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState<any>(null);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    marketingEmails: false,
    securityAlerts: true,
    transactionAlerts: true,
  });

  useEffect(() => {
    // Load user data from localStorage
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("fynance_user");
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setProfileData({
          name: userData.name || "",
          email: userData.email || "",
          phone: "+62 812-3456-7890",
          businessName: "Warung Maju Jaya",
          businessType: "Retail/Warung",
          address: "Jl. Sudirman No. 123",
          city: "Jakarta",
          postalCode: "10220",
        });
      }
    }
  }, []);

  const tabs = [
    { id: "profile", name: "Profil", icon: User },
    { id: "business", name: "Bisnis", icon: Building },
    { id: "security", name: "Keamanan", icon: Shield },
    { id: "notifications", name: "Notifikasi", icon: Bell },
    { id: "appearance", name: "Tampilan", icon: Palette },
    { id: "billing", name: "Billing", icon: CreditCard },
    { id: "data", name: "Data", icon: Download },
  ];

  const handleSave = (section: string) => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert(`${section} berhasil disimpan!`);
    }, 1000);
  };

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Password baru dan konfirmasi password tidak cocok!");
      return;
    }
    if (passwordData.newPassword.length < 8) {
      alert("Password baru minimal 8 karakter!");
      return;
    }
    handleSave("Password");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Pengaturan</h1>
          <p className="text-gray-600 mt-2">
            Kelola profil, keamanan, dan preferensi akun Anda
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id
                      ? "bg-green-100 text-green-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <tab.icon className="mr-3 h-5 w-5" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Informasi Profil
                    </h2>
                    <button
                      onClick={() => handleSave("Profil")}
                      disabled={isSaving}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {isSaving ? "Menyimpan..." : "Simpan"}
                    </button>
                  </div>

                  {/* Profile Picture */}
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">
                        {user?.name?.charAt(0).toUpperCase() || "U"}
                      </span>
                    </div>
                    <div className="ml-4">
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center">
                        <Camera className="w-4 h-4 mr-2" />
                        Ganti Foto
                      </button>
                      <p className="text-xs text-gray-500 mt-1">
                        JPG, GIF atau PNG. Maksimal 1MB.
                      </p>
                    </div>
                  </div>

                  {/* Profile Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kota
                      </label>
                      <input
                        type="text"
                        value={profileData.city}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            city: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Alamat
                      </label>
                      <textarea
                        rows={3}
                        value={profileData.address}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            address: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Business Tab */}
              {activeTab === "business" && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Informasi Bisnis
                    </h2>
                    <button
                      onClick={() => handleSave("Informasi Bisnis")}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Simpan
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Bisnis
                      </label>
                      <input
                        type="text"
                        value={profileData.businessName}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            businessName: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Bisnis
                      </label>
                      <select
                        value={profileData.businessType}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            businessType: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="Retail/Warung">Retail/Warung</option>
                        <option value="Restoran/Cafe">Restoran/Cafe</option>
                        <option value="Jasa">Jasa</option>
                        <option value="Manufaktur">Manufaktur</option>
                        <option value="Online Shop">Online Shop</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kode Pos
                      </label>
                      <input
                        type="text"
                        value={profileData.postalCode}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            postalCode: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === "security" && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Keamanan Akun
                  </h2>

                  {/* Change Password */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Ganti Password
                    </h3>
                    <div className="space-y-4 max-w-md">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Password Saat Ini
                        </label>
                        <div className="relative">
                          <input
                            type={showCurrentPassword ? "text" : "password"}
                            value={passwordData.currentPassword}
                            onChange={(e) =>
                              setPasswordData({
                                ...passwordData,
                                currentPassword: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowCurrentPassword(!showCurrentPassword)
                            }
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          >
                            {showCurrentPassword ? (
                              <EyeOff className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Eye className="h-5 w-5 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Password Baru
                        </label>
                        <div className="relative">
                          <input
                            type={showNewPassword ? "text" : "password"}
                            value={passwordData.newPassword}
                            onChange={(e) =>
                              setPasswordData({
                                ...passwordData,
                                newPassword: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          >
                            {showNewPassword ? (
                              <EyeOff className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Eye className="h-5 w-5 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Konfirmasi Password Baru
                        </label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={passwordData.confirmPassword}
                            onChange={(e) =>
                              setPasswordData({
                                ...passwordData,
                                confirmPassword: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Eye className="h-5 w-5 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={handlePasswordChange}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                      >
                        Update Password
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Autentikasi Dua Faktor
                    </h3>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">
                          SMS Authentication
                        </p>
                        <p className="text-sm text-gray-500">
                          Dapatkan kode verifikasi via SMS
                        </p>
                      </div>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
                        Aktifkan
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === "notifications" && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Pengaturan Notifikasi
                    </h2>
                    <button
                      onClick={() => handleSave("Pengaturan Notifikasi")}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Simpan
                    </button>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(notificationSettings).map(
                      ([key, value]) => {
                        const labels = {
                          emailNotifications: "Notifikasi Email",
                          pushNotifications: "Notifikasi Push",
                          smsNotifications: "Notifikasi SMS",
                          marketingEmails: "Email Marketing",
                          securityAlerts: "Peringatan Keamanan",
                          transactionAlerts: "Peringatan Transaksi",
                        };

                        return (
                          <div
                            key={key}
                            className="flex items-center justify-between py-3"
                          >
                            <div>
                              <p className="font-medium text-gray-900">
                                {labels[key as keyof typeof labels]}
                              </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={value}
                                onChange={(e) =>
                                  setNotificationSettings({
                                    ...notificationSettings,
                                    [key]: e.target.checked,
                                  })
                                }
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              )}

              {/* Other tabs placeholder */}
              {["appearance", "billing", "data"].includes(activeTab) && (
                <div className="p-6 text-center">
                  <div className="py-12">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Fitur Segera Hadir
                    </h3>
                    <p className="text-gray-500">
                      Pengaturan {tabs.find((t) => t.id === activeTab)?.name}{" "}
                      akan tersedia dalam update mendatang.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
