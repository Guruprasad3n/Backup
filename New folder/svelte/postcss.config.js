import taliwindcss from "tailwindcss";
import taliwidConfig from "./tailwind.config.js";
import autoprefixer from "autoprefixer";
import tailwindConfig from "./tailwind.config.js";

export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
};
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };
