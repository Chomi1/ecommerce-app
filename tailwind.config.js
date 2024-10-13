/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1e1e3c",
          "200": "#231f20",
          "300": "#080819",
          "400": "rgba(255, 255, 255, 0.1)",
          "500": "rgba(0, 0, 0, 0.3)",
          "600": "rgba(35, 31, 32, 0.3)",
          "700": "rgba(255, 255, 255, 0.05)",
          "800": "rgba(35, 31, 32, 0.6)",
          "900": "rgba(255, 255, 255, 0.2)",
          "1000": "rgba(255, 255, 255, 0.6)",
        },
        black: "#000",
        white: "#fff",
        ghostwhite: {
          "100": "#fbfbff",
          "200": "#f1f1fc",
          "300": "#efeffa",
          "400": "rgba(239, 239, 250, 0.6)",
        },
        gainsboro: "#d9d9d9",
        floralwhite: "#f4f3eb",
        ivory: "rgba(255, 255, 244, 0.95)",
        lightgray: {
          "100": "#ccc",
          "200": "#cacad3",
        },
        tomato: {
          "100": "#fe4541",
          "200": "rgba(254, 69, 65, 0.1)",
        },
        lavender: {
          "100": "#e3e3ff",
          "200": "#d9d9f0",
        },
        linen: {
          "100": "#f8eee5",
          "200": "#efeadd",
        },
        darkkhaki: "#af9453",
        "zinc-950": "#09090b",
        "zinc-200": "#e4e4e7",
        darkslategray: "#373234",
      },
      spacing: {
        "px-3": "12px",
        "py-2": "8px",
        "space-y-15": "6px",
      },
      fontFamily: {
        aeonik: "Aeonik",
        "helvetica-neue-lt": "'Helvetica Neue LT'",
        "text-sm-medium": "Inter",
        ageya: "Ageya",
      },
      borderRadius: {
        "31xl": "50px",
        "21xl": "40px",
        "rounded-md": "6px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      lg: "18px",
      "13xl": "32px",
      "7xl": "26px",
      "45xl": "64px",
      "32xl": "51px",
      "21xl": "40px",
      "17xl": "36px",
      "3xl": "22px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq720: {
        raw: "screen and (max-width: 720px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq360: {
        raw: "screen and (max-width: 360px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
