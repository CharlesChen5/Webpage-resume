import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00d4ff",
        secondary: "#7b61ff",
        accent: "#ff6b6b",
        dark: {
          50: "#e6e8ec",
          100: "#b8bcc7",
          200: "#8a90a3",
          300: "#5c647f",
          400: "#2e385b",
          500: "#1e2340",
          600: "#161934",
          700: "#0f1228",
          800: "#0a0c1c",
          900: "#050610",
          950: "#020308",
        },
        chip: {
          green: "#00ff88",
          blue: "#00d4ff",
          purple: "#7b61ff",
          gold: "#ffd700",
        },
      },
      fontFamily: {
        sans: [
          "SF Pro Display",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: ["SF Mono", "JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 212, 255, 0.3)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
