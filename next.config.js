/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true, // Ensure proper linking of paths in static export
};
