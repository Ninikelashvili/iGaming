/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkEspresso: "#1D1912",
        lightIvory: "#F3F3E6",
        goldenAmber: "#EECD5C",
        sunsetGold: "#D2A63C",
        burntSienna: "#BB8525",
      },
      boxShadow: {
        down: "0px 14px 24px -15px #BB8525",
      },
      fontFamily: {
        marcellus: ["var(--font-marcellus)"],
        poppins: ["var(--font-poppins)"],
      },
      height: {
        xxl: "600px",
      },
    },
  },
  plugins: [],
};
