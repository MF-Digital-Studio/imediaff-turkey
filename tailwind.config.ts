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
        "accent": "#FE9417",
        "secondary": "#FF6B00",
        "brand-magenta": "#FE9417",
        "brand-red": "#FE9417",
        "brand-orange": "#FE9417",
        "brand-yellow": "#FE9417",
      },
      backgroundImage: {
        "sunset-gradient": "linear-gradient(135deg, #FE9417, #FF6B00)",
        "accent-gradient": "linear-gradient(135deg, #FE9417 0%, #FF6B00 100%)",
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
}

export default config
