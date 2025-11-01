"use client";

import { useState } from "react";
import {
  Plus,
  MessageCircle,
  ThumbsUp,
  Share2,
  Search,
  Filter,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";

// Mock data untuk forum posts
const forumPosts = [
  {
    id: 1,
    title: "Tips Meningkatkan Penjualan Online untuk UMKM",
    content:
      "Saya ingin berbagi beberapa strategi yang telah terbukti efektif untuk meningkatkan penjualan online. Pertama, optimalkan foto produk dengan pencahayaan yang baik...",
    author: "Sari Entrepreneur",
    authorRole: "Business Owner",
    category: "Marketing",
    likes: 24,
    comments: 8,
    timeAgo: "2 jam lalu",
    isLiked: false,
    tags: ["marketing", "online", "tips"],
  },
  {
    id: 2,
    title: "Mencari Supplier Bahan Baku Tekstil Berkualitas",
    content:
      "Halo semua! Saya sedang mencari supplier bahan baku tekstil yang reliable dan harga kompetitif untuk usaha konveksi saya. Ada rekomendasi?",
    author: "Ahmad Textile",
    authorRole: "Business Owner",
    category: "Supplier",
    likes: 12,
    comments: 15,
    timeAgo: "4 jam lalu",
    isLiked: true,
    tags: ["supplier", "tekstil", "kerjasama"],
  },
  {
    id: 3,
    title: "Workshop Manajemen Keuangan UMKM - Gratis!",
    content:
      "Kami akan mengadakan workshop gratis tentang manajemen keuangan untuk UMKM. Topik meliputi pembukuan, cash flow, dan perencanaan pajak...",
    author: "Konsultan Bisnis ID",
    authorRole: "Verified Consultant",
    category: "Event",
    likes: 45,
    comments: 22,
    timeAgo: "1 hari lalu",
    isLiked: false,
    tags: ["workshop", "keuangan", "gratis"],
  },
  {
    id: 4,
    title: "Kolaborasi Bisnis F&B - Mari Berpartner!",
    content:
      "Saya pemilik coffee shop di Jakarta Selatan dan ingin berkolaborasi dengan UMKM lain di bidang F&B. Mungkin kita bisa cross-promote atau joint event?",
    author: "Coffee Lover",
    authorRole: "Business Owner",
    category: "Partnership",
    likes: 18,
    comments: 11,
    timeAgo: "2 hari lalu",
    isLiked: false,
    tags: ["kolaborasi", "f&b", "jakarta"],
  },
];

const categories = [
  "Semua",
  "Marketing",
  "Supplier",
  "Event",
  "Partnership",
  "Tips",
  "Keuangan",
];

export default function ForumPage() {
  const [posts, setPosts] = useState(forumPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "Marketing",
    tags: "",
  });

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
              isLiked: !post.isLiked,
            }
          : post
      )
    );
  };

  const handleNewPost = () => {
    const post = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      author: "Anda",
      authorRole: "Business Owner",
      category: newPost.category,
      likes: 0,
      comments: 0,
      timeAgo: "Baru saja",
      isLiked: false,
      tags: newPost.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    };

    setPosts([post, ...posts]);
    setShowNewPostModal(false);
    setNewPost({
      title: "",
      content: "",
      category: "Marketing",
      tags: "",
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Marketing":
        return <TrendingUp className="h-4 w-4" />;
      case "Supplier":
        return <Users className="h-4 w-4" />;
      case "Event":
        return <Clock className="h-4 w-4" />;
      case "Partnership":
        return <Share2 className="h-4 w-4" />;
      default:
        return <MessageCircle className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Marketing":
        return "bg-blue-100 text-blue-800";
      case "Supplier":
        return "bg-green-100 text-green-800";
      case "Event":
        return "bg-purple-100 text-purple-800";
      case "Partnership":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Forum Networking
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Terhubung dengan sesama pelaku UMKM, berbagi pengalaman, dan
              bangun kerjasama bisnis
            </p>
          </div>
          <button
            onClick={() => setShowNewPostModal(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Buat Postingan
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-green-500" />
            <div className="ml-3">
              <p className="text-sm text-gray-500">Total Member</p>
              <p className="text-xl font-semibold text-gray-900">2,847</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <MessageCircle className="h-8 w-8 text-blue-500" />
            <div className="ml-3">
              <p className="text-sm text-gray-500">Total Diskusi</p>
              <p className="text-xl font-semibold text-gray-900">1,523</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <Share2 className="h-8 w-8 text-purple-500" />
            <div className="ml-3">
              <p className="text-sm text-gray-500">Partnership</p>
              <p className="text-xl font-semibold text-gray-900">284</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-orange-500" />
            <div className="ml-3">
              <p className="text-sm text-gray-500">Event Aktif</p>
              <p className="text-xl font-semibold text-gray-900">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Kategori Diskusi
            </h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-green-100 text-green-800"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    {category !== "Semua" && getCategoryIcon(category)}
                    <span className={category !== "Semua" ? "ml-2" : ""}>
                      {category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Popular Tags */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Tag Populer</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "marketing",
                "supplier",
                "kerjasama",
                "tips",
                "jakarta",
                "online",
                "keuangan",
                "workshop",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search and Filters */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Cari diskusi, member, atau topik..."
                />
              </div>
              <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
          </div>

          {/* Forum Posts */}
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
                      <p className="text-xs text-gray-500">
                        {post.authorRole} • {post.timeAgo}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(
                      post.category
                    )}`}
                  >
                    {getCategoryIcon(post.category)}
                    <span className="ml-1">{post.category}</span>
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4">{post.content}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-1 hover:text-green-600 ${
                      post.isLiked ? "text-green-600" : ""
                    }`}
                  >
                    <ThumbsUp
                      className={`h-4 w-4 ${
                        post.isLiked ? "fill-current" : ""
                      }`}
                    />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-600">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-purple-600">
                    <Share2 className="h-4 w-4" />
                    <span>Bagikan</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Post Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Buat Postingan Baru
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Judul diskusi..."
                value={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />

              <select
                value={newPost.category}
                onChange={(e) =>
                  setNewPost({ ...newPost, category: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              >
                {categories
                  .filter((cat) => cat !== "Semua")
                  .map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
              </select>

              <textarea
                placeholder="Tulis konten diskusi Anda di sini..."
                value={newPost.content}
                onChange={(e) =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />

              <input
                type="text"
                placeholder="Tags (pisahkan dengan koma)"
                value={newPost.tags}
                onChange={(e) =>
                  setNewPost({ ...newPost, tags: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowNewPostModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Batal
              </button>
              <button
                onClick={handleNewPost}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Posting
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
