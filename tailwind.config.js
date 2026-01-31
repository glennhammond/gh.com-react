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
      borderRadius: {
        // Global tweak - consistent 4px rounding (crisper)
        sm: "0.25rem", // 4px
        md: "0.25rem", // 4px
        lg: "0.25rem", // 4px
        xl: "0.25rem", // 4px
        "2xl": "0.25rem", // 4px
        "3xl": "0.25rem", // 4px
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
