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
                "slate-50": "#f8fafc",
                "slate-100": "#f1f5f9",
                "slate-200": "#e2e8f0",
                "slate-300": "#cbd5e1",
                "slate-400": "#94a3b8",
                "slate-500": "#64748b",
                "slate-600": "#475569",
                "slate-700": "#334155",
                "slate-800": "#1e293b",
                "slate-900": "#0f172a",
            },
        },
        container: {
            padding: ".75rem",
            center: true,
        },
    },
    plugins: [],
};
export default config;
