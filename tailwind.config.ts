import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#4CAF50",
          600: "#2E7D32",
          700: "#1976D2",
          800: "#0277BD",
          900: "#01579B",
        },
        green: {
          50: "#f0f9f0",
          100: "#e8f5e8",
          200: "#c8e6c9",
          300: "#a5d6a7",
          400: "#81c784",
          500: "#4CAF50",
          600: "#2E7D32",
          700: "#388e3c",
          800: "#2e7d32",
          900: "#1b5e20",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
