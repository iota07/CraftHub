/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        merienda: ["Merienda", "cursive"],
        permanent: ["Permanent Marker", "cursive"],
        dancing: ["Dancing Script", "cursive"],
      },
      colors: {
        yellow: "#fff9d6",
        blue: "#1f73ae",
        darkblue: "#0e4890",
        orange: "#fda608",
        zinc: "#09090b",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    plugins: [],
  },
};
