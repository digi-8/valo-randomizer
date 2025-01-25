import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        defaulttext: '#0D1520',
        buttonmidBg: '#1E4377',
        buttonmidHover: '#2E5790',
        buttonrandomizeblue: '',

        
      },
    },
  },
  plugins: [],
} satisfies Config;
