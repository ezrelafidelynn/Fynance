"use client";

import { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  Filter,
  Package,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

// Mock data untuk inventori
const initialInventory = [
  {
    id: "PRD001",
    name: "Smartphone Samsung A54",
    category: "Elektronik",
    stock: 15,
    minStock: 5,
    maxStock: 50,
    price: 4500000,
    supplier: "Samsung Official",
    lastRestock: "2024-10-15",
    status: "Tersedia",
  },
  {
    id: "PRD002",
    name: "Kemeja Batik Pria",
    category: "Fashion",
    stock: 3,
    minStock: 10,
    maxStock: 30,
    price: 125000,
    supplier: "Batik Nusantara",
    lastRestock: "2024-10-10",
    status: "Stok Rendah",
  },
  {
    id: "PRD003",
    name: "Kopi Arabica 100g",
    category: "Makanan",
    stock: 50,
    minStock: 20,
    maxStock: 100,
    price: 45000,
    supplier: "Petani Kopi Aceh",
    lastRestock: "2024-10-20",
    status: "Tersedia",
  },
  {
    id: "PRD004",
    name: "Headphone Bluetooth",
    category: "Elektronik",
    stock: 0,
    minStock: 5,
    maxStock: 25,
    price: 280000,
    supplier: "Audio Tech",
    lastRestock: "2024-09-28",
    status: "Habis",
  },
  {
    id: "PRD005",
    name: "Tas Kulit Wanita",
    category: "Fashion",
    stock: 8,
    minStock: 3,
    maxStock: 15,
    price: 350000,
    supplier: "Leather Craft",
    lastRestock: "2024-10-18",
    status: "Tersedia",
  },
];

export default function InventoryPage() {
  const [inventory, setInventory] = useState(initialInventory);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    stock: "",
    minStock: "",
    maxStock: "",
    price: "",
    supplier: "",
  });

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || item.category === categoryFilter;
    const matchesStatus = !statusFilter || item.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Tersedia":
        return "bg-green-100 text-green-800";
      case "Stok Rendah":
        return "bg-yellow-100 text-yellow-800";
      case "Habis":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Tersedia":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Stok Rendah":
      case "Habis":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const handleAddProduct = () => {
    const id = `PRD${String(inventory.length + 1).padStart(3, "0")}`;
    const stock = parseInt(newProduct.stock);
    const minStock = parseInt(newProduct.minStock);

    let status = "Tersedia";
    if (stock === 0) status = "Habis";
    else if (stock <= minStock) status = "Stok Rendah";

    const product = {
      id,
      name: newProduct.name,
      category: newProduct.category,
      stock,
      minStock,
      maxStock: parseInt(newProduct.maxStock),
      price: parseInt(newProduct.price),
      supplier: newProduct.supplier,
      lastRestock: new Date().toISOString().split("T")[0],
      status,
    };

    setInventory([...inventory, product]);
    setShowAddModal(false);
    setNewProduct({
      name: "",
      category: "",
      stock: "",
      minStock: "",
      maxStock: "",
      price: "",
      supplier: "",
    });
  };

  const handleRestock = (id: string, quantity: number) => {
    setInventory(
      inventory.map((item) =>
        item.id === id
          ? {
              ...item,
              stock: item.stock + quantity,
              status:
                item.stock + quantity > item.minStock
                  ? "Tersedia"
                  : "Stok Rendah",
              lastRestock: new Date().toISOString().split("T")[0],
            }
          : item
      )
    );
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      setInventory(inventory.filter((item) => item.id !== id));
    }
  };

  const categories = Array.from(
    new Set(inventory.map((item) => item.category))
  );
  const statuses = Array.from(new Set(inventory.map((item) => item.status)));

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Manajemen Inventori
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Kelola stok barang dan pantau status inventori real-time
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Tambah Produk
          </button>
        </div>
      </div>

      {/* Inventory Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-blue-500" />
            <div className="ml-3">
              <p className="text-sm text-gray-500">Total Produk</p>
              <p className="text-xl font-semibold text-gray-900">
                {inventory.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-green-500" />
            <div className="ml-3">
              <p className="text-sm text-gray-500">Stok Tersedia</p>
              <p className="text-xl font-semibold text-gray-900">
                {inventory.filter((item) => item.status === "Tersedia").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
            <div className="ml-3">
              <p className="text-sm text-gray-500">Stok Rendah</p>
              <p className="text-xl font-semibold text-gray-900">
                {
                  inventory.filter((item) => item.status === "Stok Rendah")
                    .length
                }
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <AlertTriangle className="h-8 w-8 text-red-500" />
            <div className="ml-3">
              <p className="text-sm text-gray-500">Stok Habis</p>
              <p className="text-xl font-semibold text-gray-900">
                {inventory.filter((item) => item.status === "Habis").length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Cari produk..."
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Semua Kategori</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Semua Status</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <button className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Reset Filter
          </button>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Produk
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kategori
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stok
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Harga
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Supplier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500">{item.id}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {item.stock} / {item.maxStock}
                    </div>
                    <div className="text-xs text-gray-500">
                      Min: {item.minStock}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {getStatusIcon(item.status)}
                      <span className="ml-1">{item.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Rp {item.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.supplier}</div>
                    <div className="text-xs text-gray-500">
                      Restock: {item.lastRestock}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => {
                        const quantity = prompt("Masukkan jumlah restock:");
                        if (quantity && !isNaN(parseInt(quantity))) {
                          handleRestock(item.id, parseInt(quantity));
                        }
                      }}
                      className="text-green-600 hover:text-green-900"
                    >
                      Restock
                    </button>
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(item.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Tambah Produk Baru
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nama Produk"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />

              <select
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Pilih Kategori</option>
                <option value="Elektronik">Elektronik</option>
                <option value="Fashion">Fashion</option>
                <option value="Makanan">Makanan</option>
                <option value="Kesehatan">Kesehatan</option>
              </select>

              <div className="grid grid-cols-3 gap-2">
                <input
                  type="number"
                  placeholder="Stok"
                  value={newProduct.stock}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, stock: e.target.value })
                  }
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="number"
                  placeholder="Min Stok"
                  value={newProduct.minStock}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, minStock: e.target.value })
                  }
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="number"
                  placeholder="Max Stok"
                  value={newProduct.maxStock}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, maxStock: e.target.value })
                  }
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <input
                type="number"
                placeholder="Harga"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />

              <input
                type="text"
                placeholder="Supplier"
                value={newProduct.supplier}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, supplier: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Batal
              </button>
              <button
                onClick={handleAddProduct}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Tambah Produk
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
