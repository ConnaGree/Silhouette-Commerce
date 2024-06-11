/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        colors: {
          primary: "#fff",
          accent: "#db4444",
          text: "#000",
          secondaryAccent: "#00FF66", // added missing '#' symbol
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
        spacing: {
          padding_lg_py: "2rem",
          padding_lg_px: "5rem",

          padding_md_px: "2rem",
          padding_lg_py: "3rem",

          padding_sm_px: "1rem",
          padding_sm_py: "2rem",
        },
        inherit: {
          inherit: "inherit",
        },
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};

