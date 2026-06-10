import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent": "#FB430A",
        "secondary": "#FF6B00",
        "brand-magenta": "#FB430A",
        "brand-red": "#FB430A",
        "brand-orange": "#FB430A",
        "brand-yellow": "#FB430A",
      },
      backgroundImage: {
        "sunset-gradient": "linear-gradient(135deg, #FB430A, #FF6B00)",
        "accent-gradient": "linear-gradient(135deg, #FB430A 0%, #FF6B00 100%)",
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
}

export default config
