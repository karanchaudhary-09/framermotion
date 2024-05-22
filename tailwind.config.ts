import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7500",
        primarytext: "#949494",
        bordercolor: "#EDEDFF",
        mainblack: "#3C3C46",
        primaryViolet: "#3D2D72",
        lightshade2: "#F8F8FF",
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
      },
      screens: {
        xxll: "1728px",
        xxxll: "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
