# Fynance - Platform UMKM Terpadu

![Fynance Logo](https://img.shields.io/badge/Fynance-UMKM%20Platform-4CAF50?style=for-the-badge&logo=react)

**Fynance** adalah platform berbasis web yang membantu UMKM (Usaha Mikro, Kecil, dan Menengah) dalam mengelola keuangan, stok barang, transaksi kasir, serta menyediakan forum networking antar pelaku usaha.

## 🚀 Fitur Utama

### 📊 Dashboard Owner

- Ringkasan pendapatan dan pengeluaran
- Total transaksi dan statistik penjualan
- Grafik analitik real-time
- Monitoring performa bisnis

### 💰 Sistem Kasir

- Input transaksi penjualan dan pembelian
- ID barang unik dengan barcode scanner
- Update stok otomatis
- Multiple payment methods (Tunai, Debit, Credit, QRIS)

### 📦 Manajemen Inventori

- Daftar produk dengan tracking stok real-time
- Status restock otomatis
- Laporan inventori lengkap
- Alert stok rendah dan habis

### 🔐 Sistem Autentikasi

- Sign up dan login yang aman
- Role management (Business Owner & Staff)
- Forgot password functionality
- JWT-based authentication

### 🌐 Forum Networking

- Diskusi antar pelaku UMKM
- Berbagi ide dan pengalaman
- Mencari partner bisnis dan supplier
- Kategori diskusi terorganisir

### 💎 Sistem Berlangganan

- **Free Trial**: 30 hari dengan fitur terbatas
- **Premium**: Akses penuh semua fitur (Rp 99,000/bulan)
- **Enterprise**: Solusi multi-cabang (Rp 299,000/bulan)

### 🤖 AI Assistant

- Bantuan analisis keuangan
- Saran strategi bisnis
- Perhitungan profit margin otomatis
- Chatbot cerdas untuk produktivitas

## 🛠 Tech Stack

### Frontend

- **Next.js 16** - React framework dengan App Router
- **TypeScript** - Type safety dan better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Recharts** - Data visualization

### Backend (Planned)

- **Express.js** - Node.js web framework
- **PostgreSQL** - Relational database
- **Prisma** - Database ORM
- **JWT** - Authentication tokens

### Authentication & Payment

- **NextAuth.js** - Authentication solution
- **Stripe/Midtrans** - Payment processing

### Deployment

- **Vercel** - Frontend hosting
- **Railway/Render** - Backend hosting

## 🎨 Design System

### Color Palette

- **Primary Green**: `#4CAF50` - Main brand color
- **Dark Green**: `#2E7D32` - Accent and active states
- **Pure White**: `#FFFFFF` - Background and text
- **Gray Scale**: Various shades for UI elements

### Typography

- **Primary Font**: Poppins (Google Fonts)
- **Fallback**: Inter, system-ui, sans-serif

### Design Principles

- **Modern & Clean**: Minimalist interface design
- **Professional**: Business-focused aesthetics
- **Responsive**: Mobile-first approach
- **Accessible**: WCAG compliant

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm atau yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/fynance.git
   cd fynance
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npx tsc --noEmit     # TypeScript type check
```

## 📱 Demo Accounts

### Business Owner

- **Email**: owner@fynance.demo
- **Password**: password123
- **Access**: Full dashboard, all features

### Staff

- **Email**: staff@fynance.demo
- **Password**: password123
- **Access**: Limited cashier and inventory

## 🗂 Project Structure

```
fynance/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── auth/              # Authentication pages
│   │   ├── dashboard/         # Main application
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Landing page
│   └── components/            # Reusable components (future)
├── public/                    # Static assets
├── .github/                   # GitHub configurations
│   └── copilot-instructions.md
├── package.json
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── README.md
```

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/fynance"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Payment (Stripe)
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."

# AI Service (Optional)
OPENAI_API_KEY="sk-..."
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Alternative Platforms

- **Netlify**: Frontend hosting
- **Railway**: Full-stack deployment
- **Render**: Backend services

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Support & Contact

- **Email**: support@fynance.id
- **Documentation**: [docs.fynance.id](https://docs.fynance.id)
- **Issues**: [GitHub Issues](https://github.com/yourusername/fynance/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Figma Community](https://www.figma.com/design/jNbd0iqPpqCM7rw1uj51Iy/Dashboard-for-Cashier-App-Website-UI-Design--Community-)
- Icons by [Lucide](https://lucide.dev/)
- Charts by [Recharts](https://recharts.org/)
- Styling by [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ for Indonesian UMKM Community**

## 🗺 Roadmap

### Phase 1 (Current) - MVP

- ✅ Landing page & authentication
- ✅ Dashboard with basic analytics
- ✅ Cashier system
- ✅ Inventory management
- ✅ Forum networking
- ✅ Subscription system
- ✅ AI Assistant (basic)

### Phase 2 - Advanced Features

- [ ] Backend API integration
- [ ] Real database implementation
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Advanced reporting
- [ ] Mobile app (React Native)

### Phase 3 - Enterprise

- [ ] Multi-store management
- [ ] Advanced analytics & forecasting
- [ ] Custom integrations
- [ ] White-label solutions
- [ ] API marketplace

### Phase 4 - Ecosystem

- [ ] Supplier network
- [ ] Financing partnerships
- [ ] Training marketplace
- [ ] Government integration
- [ ] Export/import features

## 📊 Current Status

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC)
