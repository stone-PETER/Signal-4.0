/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 3s linear infinite",
        glitch: "glitch 1s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "5%": { transform: "translate(-2px, 0)" },
          "10%": { transform: "translate(-4px, 0)" },
          "15%": { transform: "translate(2px, 0)" },
          "20%": { transform: "translate(4px, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        p1: "#B292FF",
        p2: "#3B0F40",
        accent: "#90EE90",
        primary: "#1E90FF",
      },
    },
    fontFamily: {
      ClashDisplay: ["Clash Display", "sans-serif"],
      RoverExplore: ["Rover Explore", "sans-serif"],
    },
  },
  plugins: [],
};
