/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        // Cyber/Neon custom colors
        cyber: {
          dark: "#030712",
          surface: "#111827",
          muted: "#1f2937",
        },
        neon: {
          cyan: "#22d3ee",
          pink: "#d946ef",
          blue: "#3b82f6",
        },
      },
      boxShadow: {
        // Neumorphic shadows
        neumorph:
          "8px 8px 16px rgba(0, 0, 0, 0.5), -4px -4px 12px rgba(50, 50, 50, 0.3)",
        "neumorph-sm":
          "4px 4px 8px rgba(0, 0, 0, 0.5), -2px -2px 6px rgba(50, 50, 50, 0.3)",
        "neumorph-inset":
          "inset 4px 4px 8px rgba(0, 0, 0, 0.5), inset -4px -4px 8px rgba(50, 50, 50, 0.2)",
        // Neon glow shadows
        "neon-cyan":
          "0 0 20px rgba(34, 211, 238, 0.4), 0 0 40px rgba(34, 211, 238, 0.2)",
        "neon-pink":
          "0 0 20px rgba(217, 70, 239, 0.4), 0 0 40px rgba(217, 70, 239, 0.2)",
        "neon-cyan-lg":
          "0 0 30px rgba(34, 211, 238, 0.5), 0 0 60px rgba(34, 211, 238, 0.3)",
        "neon-pink-lg":
          "0 0 30px rgba(217, 70, 239, 0.5), 0 0 60px rgba(217, 70, 239, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" },
          "50%": {
            boxShadow:
              "0 0 30px rgba(34, 211, 238, 0.6), 0 0 50px rgba(217, 70, 239, 0.3)",
          },
        },
      },
    },
  },
  plugins: [],
};
