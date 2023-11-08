import cleaner from "rollup-plugin-cleaner";
import copy from "rollup-plugin-copy";

const config = [
  {
    input: "./src/empty.js",

    plugins: [
      cleaner({
        targets: ["./public"],
      }),
      copy({
        targets: [{ src: "./src/styles", dest: "./public", rename: "scss" }],
      }),
    ],
  },
];

export default config;
