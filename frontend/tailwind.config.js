module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sugarPink: "#FF6BA9",
        berryBlue: "#8BCBF9",
        cream: "#FFF6E6",
        chocolate: "#5E2C15",
        cherryRed: "#E53E51",
        starYellow: "#FFE66D"
      },
      boxShadow: {
        soft: "0 10px 20px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        xl: "1rem"
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};