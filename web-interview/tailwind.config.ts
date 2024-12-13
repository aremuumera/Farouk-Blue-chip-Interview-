import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#00A3FF',
        secondary: '#F1FAFF',
        accent: '#FF5722',
        accent1: '#9CCDFF',
        mainBg: '#f2f3f7'
      },
    },
  },
  plugins: [],
} satisfies Config;
