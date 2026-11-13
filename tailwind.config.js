/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cobalt: {
          DEFAULT: "#1533d9",
          press: "#0f26a8",
        },
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        frost: "#b9c6ff",
      },
      fontFamily: {
        display: ["Schibsted Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        gutter: "var(--gutter)",
      },
      maxWidth: {
        page: "92rem",
      },
    },
  },
  plugins: [],
};
