import { createPlugins } from "rollup-plugin-atomic";

const plugins = createPlugins(["js", "babel"]);

const RollupConfig = [
  {
    input: "src/main.js",
    output: [
      {
        dir: "dist",
        format: "cjs",
        sourcemap: true,
      },
    ],
    // loaded externally
    external: ["atom"],
  },
];
export default RollupConfig;
