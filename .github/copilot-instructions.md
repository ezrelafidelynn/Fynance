# Fynance - Copilot Project Instructions

## Project Overview

Fynance is a comprehensive web platform designed for UMKM (Small and Medium Enterprises) to manage finances, inventory, cashier systems, and business networking.

## Tech Stack

- **Frontend**: Next.js 16 with TypeScript and Tailwind CSS
- **Backend**: Express.js with PostgreSQL (planned)
- **Authentication**: NextAuth.js with JWT
- **Payment**: Stripe/Midtrans integration (planned)
- **Deployment**: Vercel for frontend

## Key Features Implemented

- Landing page with modern green/white design
- Authentication system (login/register pages)
- Dashboard with analytics and charts
- Cashier system with product management
- Inventory management with stock tracking
- Forum networking for business collaboration
- Subscription system (Free/Premium/Enterprise)
- AI Assistant for business insights

## Development Guidelines

- Use Poppins font for consistent typography
- Follow green (#4CAF50, #2E7D32) and white (#FFFFFF) color scheme
- Maintain responsive design with mobile-first approach
- Keep components modular and reusable
- Follow TypeScript best practices with proper typing
- Use Tailwind CSS utility classes for styling

## Project Structure

- `/src/app/` - Next.js App Router pages
- `/src/app/auth/` - Authentication related pages
- `/src/app/dashboard/` - Main application dashboard
- All pages are fully functional with mock data
- Responsive design implemented throughout

## Running the Project

```bash
npm install --legacy-peer-deps
npm run dev  # Development server on http://localhost:3000
npm run build  # Production build
```

## Current Status

✅ Project successfully scaffolded and compiled
✅ All major features implemented with mock data
✅ Responsive UI with professional design
✅ Development server running successfully
✅ README.md documentation complete
