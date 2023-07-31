/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#171717",
        white: "#fff",
        aquamarine: "#45edad",
        tomato: "#f85858",
        "neutral-800": "#262626",
        "neutral-500": "#737373",
        gainsboro: "#d9d9d9",
      },
      fontFamily: {
        dosis: "Dosis",
        inter: "Inter",
      },
      borderRadius: {
        "8xs-4": "4.4px",
        "7xs-3": "5.3px",
        "8xs-5": "4.5px",
      },
    },
    fontSize: {
      "sm-1": "0.82rem",
      "12xl-7": "1.98rem",
      "31xl-6": "3.16rem",
      "sm-6": "0.85rem",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
