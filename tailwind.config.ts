import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#111827",
      bordered: "rgba(255, 255, 255, 0.2)",
      foreground: "#1e293b",
      primary: "#f7f7f7",
      warning: "#eab308",
      succeses: "#16a34a",
      lightblack: "#0f172a",
      brand: "#2262DD",
      red: "#ff0000",
    },
    borderRadius: {
      full: "9999px",
      soorfinc: "10px",
    },
  },
  plugins: [],
};
export default config;
