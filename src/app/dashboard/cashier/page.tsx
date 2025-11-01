"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  Trash2,
  Search,
  ShoppingCart,
  Calculator,
  Receipt,
} from "lucide-react";

// Mock data untuk produk
const products = [
  {
    id: "PRD001",
    name: "Smartphone Samsung A54",
    price: 4500000,
    stock: 15,
    category: "Elektronik",
    barcode: "8901030123456",
  },
  {
    id: "PRD002",
    name: "Kemeja Batik Pria",
    price: 125000,
    stock: 25,
    category: "Fashion",
    barcode: "8901030123457",
  },
  {
    id: "PRD003",
    name: "Kopi Arabica 100g",
    price: 45000,
    stock: 50,
    category: "Makanan",
    barcode: "8901030123458",
  },
  {
    id: "PRD004",
    name: "Headphone Bluetooth",
    price: 280000,
    stock: 12,
    category: "Elektronik",
    barcode: "8901030123459",
  },
  {
    id: "PRD005",
    name: "Tas Kulit Wanita",
    price: 350000,
    stock: 8,
    category: "Fashion",
    barcode: "8901030123460",
  },
];

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export default function CashierPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [amountPaid, setAmountPaid] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.barcode.includes(searchTerm)
  );

  const addToCart = (product: (typeof products)[0]) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  subtotal: (item.quantity + 1) * item.price,
                }
              : item
          )
        );
      } else {
        alert("Stok tidak mencukupi!");
      }
    } else {
      if (product.stock > 0) {
        setCart([
          ...cart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            subtotal: product.price,
          },
        ]);
      } else {
        alert("Produk tidak tersedia!");
      }
    }
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    const product = products.find((p) => p.id === id);
    if (newQuantity > 0 && product && newQuantity <= product.stock) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: newQuantity,
                subtotal: newQuantity * item.price,
              }
            : item
        )
      );
    } else if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      alert("Jumlah melebihi stok yang tersedia!");
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setCustomerName("");
    setAmountPaid("");
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.subtotal, 0);
  };

  const calculateChange = () => {
    const total = calculateTotal();
    const paid = parseFloat(amountPaid) || 0;
    return paid - total;
  };

  const processTransaction = () => {
    const total = calculateTotal();
    const paid = parseFloat(amountPaid) || 0;

    if (cart.length === 0) {
      alert("Keranjang masih kosong!");
      return;
    }

    if (paymentMethod === "cash" && paid < total) {
      alert("Jumlah pembayaran kurang!");
      return;
    }

    // TODO: Implement transaction processing logic
    const transactionData = {
      items: cart,
      customer: customerName,
      total,
      paymentMethod,
      amountPaid: paid,
      change: paymentMethod === "cash" ? calculateChange() : 0,
      timestamp: new Date().toISOString(),
    };

    console.log("Processing transaction:", transactionData);
    alert("Transaksi berhasil diproses!");
    clearCart();
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Sistem Kasir</h1>
        <p className="mt-1 text-sm text-gray-500">
          Proses transaksi penjualan dengan mudah dan cepat
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Search and List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Daftar Produk
                </h3>
                <div className="relative max-w-xs">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500"
                    placeholder="Cari produk atau scan barcode..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => addToCart(product)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900 text-sm">
                        {product.name}
                      </h4>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          product.stock > 10
                            ? "bg-green-100 text-green-800"
                            : product.stock > 0
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        Stok: {product.stock}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{product.id}</p>
                    <p className="text-lg font-semibold text-green-600">
                      Rp {product.price.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Shopping Cart and Checkout */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <ShoppingCart className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">
                  Keranjang Belanja
                </h3>
              </div>

              {/* Customer Info */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Pelanggan (Opsional)
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Masukkan nama pelanggan"
                />
              </div>

              {/* Cart Items */}
              <div className="mb-6 max-h-80 overflow-y-auto">
                {cart.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <ShoppingCart className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                    <p>Keranjang masih kosong</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            Rp {item.price.toLocaleString()}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 rounded-full hover:bg-gray-200"
                          >
                            <Minus className="h-4 w-4 text-gray-600" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 rounded-full hover:bg-gray-200"
                          >
                            <Plus className="h-4 w-4 text-gray-600" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 rounded-full hover:bg-red-100 text-red-600 ml-2"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Payment Method */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Metode Pembayaran
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500"
                >
                  <option value="cash">Tunai</option>
                  <option value="debit">Kartu Debit</option>
                  <option value="credit">Kartu Kredit</option>
                  <option value="qr">QRIS</option>
                </select>
              </div>

              {/* Amount Paid (for cash) */}
              {paymentMethod === "cash" && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah Dibayar
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 text-sm">Rp</span>
                    </div>
                    <input
                      type="number"
                      value={amountPaid}
                      onChange={(e) => setAmountPaid(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500"
                      placeholder="0"
                    />
                  </div>
                </div>
              )}

              {/* Total and Change */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                  <span>Total:</span>
                  <span>Rp {calculateTotal().toLocaleString()}</span>
                </div>
                {paymentMethod === "cash" && amountPaid && (
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Kembalian:</span>
                    <span
                      className={
                        calculateChange() >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      Rp {calculateChange().toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={processTransaction}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Receipt className="h-5 w-5 mr-2" />
                  Proses Transaksi
                </button>
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  Kosongkan Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
