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
        // Global tweak - consistent 6px rounding (crisp + modern)
        sm: "0.375rem", // 6px
        md: "0.375rem", // 6px
        lg: "0.375rem", // 6px
        xl: "0.375rem", // 6px
        "2xl": "0.375rem", // 6px
        "3xl": "0.375rem", // 6px
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
