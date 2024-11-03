import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      primary_clr:"#5F7A69",
      secondary_clr:"#040D08",
      third_clr:"#7B7B7B",
      fth_clr:"#465B4E",
      fifth_clr:"#F5F8F5"
      
      },
      fontFamily: {
        luxurious: ["Luxurious Script", "serif"], 
      },
    },
  },
  plugins: [],
};

export default config;
