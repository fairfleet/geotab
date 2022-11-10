import { defineConfig } from "vite";
import { resolve } from "path";
import typescript from "@rollup/plugin-typescript";
import { sync as glob } from "fast-glob";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: "lcov",
    },
  },
  build: {
    lib: {
      name: "geotab",
      entry: glob("src/**/*.ts")
        // Reduce to an object where the key is the file path relative to `src/` and the value is
        // the file path relative to $PWD.
        .reduce((map, entry) => ({ ...map, [getEntryName(entry)]: entry }), {}),
    },
    rollupOptions: {
      external: ["cross-fetch"],
      output: {
        globals: {
          "cross-fetch": "fetch",
          nanoid: "nanoid",
        },
      },
      plugins: [
        typescript({
          target: "es2020",
          rootDir: resolve(__dirname, "./src"),
          declaration: true,
          declarationDir: resolve(__dirname, "./dist"),
          exclude: resolve(__dirname, "./node_modules/**"),
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
});

function getEntryName(filename: string) {
  return filename.replace(/^src\//, "").replace(/\.ts$/, "");
}
