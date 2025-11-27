export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "var(--color-brand-primary)",
          accent: "var(--color-brand-accent)",
          soft: "var(--color-brand-soft)",
        },
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
