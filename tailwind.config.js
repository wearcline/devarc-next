/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#08090d",
                card: "rgba(255, 255, 255, 0.04)",
                "card-hover": "rgba(255, 255, 255, 0.08)",
                accent: "#0076ff",
                "accent-glow": "rgba(0, 118, 255, 0.3)",
                danger: "#ff4d4d",
                success: "#00f5a0",
                warning: "#ffb800",
                "text-primary": "#ffffff",
                "text-secondary": "#9499ad",
            },
            backgroundImage: {
                "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))",
            },
            animation: {
                fade: "fade 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            },
            keyframes: {
                fade: {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
}
