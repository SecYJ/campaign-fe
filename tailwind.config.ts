import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient":
          " linear-gradient(90deg, #E5793B 1.54%, #FF4185 97.86%)",
      },
      colors: {
        "color-primary": "#da7d4a",
        "text-primary": "#334155",
        "text-secondary": "#64748B",
        "bg-theme-1": "#FDFCFB",
        "bg-theme-2": "#F7ECE1",
      },
    },
    container: {
      padding: ".75rem",
    },
  },
  plugins: [],
};
export default config;
