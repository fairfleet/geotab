import { defineConfig } from "vite";
import { resolve } from "path";
import typescript from "@rollup/plugin-typescript";
import { sync as glob } from "fast-glob";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ["lcov", "text"],
    },
  },
  build: {
    lib: {
      name: "geotab",
      entry: glob("src/**/*.ts")
        // Ignore tests
        .filter((path) => !path.match(/\.test\.ts$/))
        // Reduce to an object where the key is the file path relative to `src/` and the value is
        // the file path relative to $PWD.
        .reduce((map, entry) => ({ ...map, [getEntryName(entry)]: entry }), {}),

      fileName(format, entryName) {
        switch (format) {
          case "es":
            return `esm/${entryName}.js`;
          case "cjs":
            return `${entryName}.js`;
        }
      },
    },
    minify: false,
    rollupOptions: {
      external: ["cross-fetch"],
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
