import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        active: "#FF6464",
        light: "#8695A4",
        lightforeground: "#21243d",
        lightbackground: "#ffffff",
        darkforeground: "#f4f4f4",
        darkbackground: "#0f0f0f",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
