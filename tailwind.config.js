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
        // MCU Color Palette - Black, Gray, and Red
        white: "#FFFFFF",
        black: "#000000",

        // MCU Primary Colors
        "mcu-black": "#0D0D0D", // Deep black background
        "mcu-charcoal": "#1A1A1A", // Charcoal for cards
        "mcu-gray": "#2D2D2D", // Medium gray
        "mcu-silver": "#8B8B8B", // Silver gray for text
        "mcu-light-gray": "#C0C0C0", // Light gray for accents

        // MCU Red Palette (inspired by Iron Man, Scarlet Witch)
        "mcu-red": "#DC143C", // Crimson red primary
        "mcu-red-light": "#FF4757", // Lighter red for hover
        "mcu-red-dark": "#8B0000", // Dark red for depth
        "mcu-red-glow": "#FF0A2E", // Glowing red for effects

        // Accent colors
        "mcu-accent": "#E63946", // Accent red
        "mcu-border": "#DC143C", // Border red

        // Legacy colors (keeping for backward compatibility)
        p1: "#DC143C",
        p2: "#1A1A1A",
      },
    },
    fontFamily: {
      ClashDisplay: ["Clash Display", "sans-serif"],
      RoverExplore: ["Rover Explore", "sans-serif"],
    },
  },
  plugins: [],
};
