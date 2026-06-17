import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        surface: {
          DEFAULT: "#111118",
          elevated: "#16161f",
          border: "#1e1e2e",
        },
        accent: {
          DEFAULT: "#6366f1",
          hover: "#818cf8",
          muted: "#6366f120",
          violet: "#8b5cf6",
        },
        success: "#10b981",
        text: {
          primary: "#e2e8f0",
          secondary: "#94a3b8",
          muted: "#64748b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-accent":
          "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        "gradient-radial-accent":
          "radial-gradient(ellipse at center, #6366f115 0%, transparent 70%)",
        "gradient-hero":
          "radial-gradient(ellipse at 60% 0%, #6366f120 0%, transparent 50%), radial-gradient(ellipse at 0% 80%, #8b5cf615 0%, transparent 50%)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        glow: "glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #6366f140" },
          "100%": { boxShadow: "0 0 20px #6366f160, 0 0 40px #6366f120" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 10px #6366f130",
        glow: "0 0 20px #6366f140",
        "glow-lg": "0 0 40px #6366f150",
        card: "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6), 0 0 20px #6366f120",
      },
    },
  },
  plugins: [],
};

export default config;
