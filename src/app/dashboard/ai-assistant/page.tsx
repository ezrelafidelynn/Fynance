"use client";

import { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  Zap,
  TrendingUp,
  Calculator,
  FileText,
  Lightbulb,
  Clock,
} from "lucide-react";

interface Message {
  id: number;
  type: "user" | "ai";
  content: string;
  timestamp: string;
  suggestions?: string[];
}

const quickActions = [
  {
    icon: Calculator,
    title: "Hitung Profit",
    description: "Analisis margin keuntungan produk",
    prompt:
      "Bantu saya menghitung profit margin untuk produk dengan harga beli Rp 100,000 dan harga jual Rp 150,000",
  },
  {
    icon: TrendingUp,
    title: "Analisis Penjualan",
    description: "Insight penjualan bulan ini",
    prompt:
      "Analisis data penjualan saya bulan ini dan berikan rekomendasi untuk meningkatkan performa",
  },
  {
    icon: FileText,
    title: "Buat Laporan",
    description: "Generate laporan keuangan",
    prompt:
      "Buatkan laporan keuangan sederhana untuk bisnis UMKM saya bulan ini",
  },
  {
    icon: Lightbulb,
    title: "Saran Bisnis",
    description: "Rekomendasi strategi bisnis",
    prompt:
      "Berikan saran untuk meningkatkan penjualan produk fashion online saya",
  },
];

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      content:
        "Halo! Saya adalah AI Assistant Fynance. Saya siap membantu Anda dengan berbagai kebutuhan bisnis seperti analisis keuangan, saran strategi, perhitungan profit, dan banyak lagi. Ada yang bisa saya bantu hari ini?",
      timestamp: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      suggestions: [
        "Analisis penjualan bulan ini",
        "Hitung profit margin produk",
        "Saran meningkatkan cash flow",
        "Tips marketing digital",
      ],
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string = inputMessage) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      const aiMessage: Message = {
        id: messages.length + 2,
        type: "ai",
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        suggestions: generateSuggestions(message),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes("profit") || message.includes("margin")) {
      return "Untuk menghitung profit margin, gunakan rumus: ((Harga Jual - Harga Beli) / Harga Jual) × 100%. Contoh: jika harga beli Rp 100,000 dan harga jual Rp 150,000, maka profit margin = ((150,000 - 100,000) / 150,000) × 100% = 33.33%. Ini adalah margin yang sehat untuk retail. Apakah Anda ingin saya bantu menghitung untuk produk spesifik?";
    }

    if (message.includes("penjualan") || message.includes("analisis")) {
      return "Berdasarkan data penjualan Anda, saya melihat tren positif dengan peningkatan 12% dari bulan lalu. Produk elektronik adalah kategori terlaris (40% dari total penjualan), diikuti fashion (30%). Rekomendasi saya: 1) Tingkatkan stok produk elektronik, 2) Buat promosi bundle untuk produk fashion, 3) Fokus marketing pada hari Jumat-Minggu yang menunjukkan penjualan tertinggi.";
    }

    if (message.includes("laporan") || message.includes("report")) {
      return "Saya akan membantu Anda membuat laporan keuangan sederhana. Laporan harus mencakup: 1) Pendapatan kotor, 2) Harga pokok penjualan, 3) Laba kotor, 4) Biaya operasional, 5) Laba bersih. Apakah Anda ingin saya buatkan template laporan atau membantu menganalisis data keuangan yang sudah ada?";
    }

    if (message.includes("marketing") || message.includes("promosi")) {
      return "Untuk meningkatkan penjualan, coba strategi ini: 1) Social media marketing - posting konsisten di Instagram/TikTok, 2) Email marketing untuk customer retention, 3) Program loyalitas dengan poin reward, 4) Kolaborasi dengan influencer lokal, 5) Optimasi SEO untuk website/marketplace. Fokus pada 2-3 channel dulu untuk hasil maksimal. Mau saya jelaskan lebih detail salah satu strategi?";
    }

    if (message.includes("stok") || message.includes("inventori")) {
      return "Untuk manajemen stok yang optimal: 1) Terapkan sistem ABC analysis (A=fast moving, B=medium, C=slow moving), 2) Set minimum stock level untuk auto-reorder, 3) Monitor turnover ratio setiap produk, 4) Lakukan stock opname rutin. Produk dengan turnover rendah sebaiknya dikurangi atau di-clearance sale. Apakah ada produk spesifik yang ingin dianalisis?";
    }

    return "Terima kasih atas pertanyaannya! Sebagai AI Assistant khusus bisnis UMKM, saya dapat membantu dengan analisis keuangan, strategi marketing, manajemen inventori, perhitungan profit, perencanaan bisnis, dan tips operasional. Bisakah Anda berikan detail lebih spesifik tentang apa yang ingin Anda ketahui?";
  };

  const generateSuggestions = (userMessage: string): string[] => {
    const suggestions = [
      "Bagaimana cara meningkatkan cash flow?",
      "Analisis kompetitor saya",
      "Strategi pricing yang tepat",
      "Tips mengelola customer relationship",
      "Cara optimasi biaya operasional",
      "Rekomendasi ekspansi bisnis",
    ];

    return suggestions.slice(0, 3);
  };

  const handleQuickAction = (action: (typeof quickActions)[0]) => {
    handleSendMessage(action.prompt);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">AI Assistant</h1>
        <p className="mt-1 text-sm text-gray-500">
          Asisten cerdas untuk membantu keputusan bisnis dan analisis keuangan
          Anda
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center p-4 border-b border-gray-200">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Fynance AI
                </h3>
                <p className="text-sm text-gray-500">
                  Selalu siap membantu • Online
                </p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md ${
                      message.type === "user" ? "order-2" : "order-1"
                    }`}
                  >
                    <div
                      className={`flex items-start ${
                        message.type === "user"
                          ? "flex-row-reverse"
                          : "flex-row"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === "user"
                            ? "bg-blue-500 ml-2"
                            : "bg-green-100 mr-2"
                        }`}
                      >
                        {message.type === "user" ? (
                          <User className="h-4 w-4 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 text-green-600" />
                        )}
                      </div>

                      <div
                        className={`px-4 py-2 rounded-lg ${
                          message.type === "user"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">
                          {message.content}
                        </p>
                        <p
                          className={`text-xs mt-1 ${
                            message.type === "user"
                              ? "text-blue-100"
                              : "text-gray-500"
                          }`}
                        >
                          {message.timestamp}
                        </p>
                      </div>
                    </div>

                    {/* AI Suggestions */}
                    {message.type === "ai" && message.suggestions && (
                      <div className="mt-3 ml-10">
                        <p className="text-xs text-gray-500 mb-2">
                          Saran topik:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {message.suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSendMessage(suggestion)}
                              className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full hover:bg-green-100 transition-colors"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
                    <Bot className="h-4 w-4 text-green-600 mr-2" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Tanyakan tentang bisnis, keuangan, atau strategi Anda..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-green-500 focus:border-green-500"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Aksi Cepat
            </h3>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-start">
                    <action.icon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {action.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* AI Features */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Kemampuan AI
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Zap className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    Analisis Real-time
                  </p>
                  <p className="text-xs text-gray-500">
                    Analisis data bisnis secara instant
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <TrendingUp className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    Prediksi Tren
                  </p>
                  <p className="text-xs text-gray-500">
                    Prediksi penjualan dan tren pasar
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Calculator className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    Kalkulator Bisnis
                  </p>
                  <p className="text-xs text-gray-500">
                    Hitung profit, ROI, dan metrik lainnya
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Lightbulb className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    Saran Strategis
                  </p>
                  <p className="text-xs text-gray-500">
                    Rekomendasi berdasarkan data Anda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Stats */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Statistik Penggunaan
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Pertanyaan hari ini
                </span>
                <span className="font-semibold text-gray-900">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total interaksi</span>
                <span className="font-semibold text-gray-900">156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Waktu respons rata-rata
                </span>
                <span className="font-semibold text-gray-900">1.2s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
