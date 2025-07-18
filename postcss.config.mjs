const config = {
  theme: {
    extend: {
      clipPath: {
        trapezoid: "polygon(25% 0, 100% 0, 85% 100%, 5% 100%)",
        none: "none",
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
