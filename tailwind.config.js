const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./src/**/*.{jsx,tsx,js,ts}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
});
