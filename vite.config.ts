import { defineConfig } from "vitest/config";
import { resolve } from "path";
import typescript from "@rollup/plugin-typescript";

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
      entry: [
        "src/index.ts",
        "src/Geotab.ts",
        "src/GeotabError.ts",
        "src/types/index.ts",
        "src/types/Checkmate/ObjectModel/KnownId.ts",
        "src/types/Checkmate/ObjectModel/Engine/KnownUnitOfMeasure.ts",
      ]
        // Ignore tests
        .filter((path) => !path.match(/\.test\.ts$/))
        // Reduce to an object where the key is the file path relative to `src/` and the value is
        // the file path relative to $PWD.
        .reduce((map, entry) => ({ ...map, [getEntryName(entry)]: entry }), {}),

      formats: ["es", "cjs"],

      fileName(format, entryName) {
        switch (format) {
          case "es":
            return `esm/${entryName}.js`;
          case "cjs":
            return `${entryName}.js`;
          case "umd":
            return `umd/${entryName}.js`;
        }

        throw new Error();
      },
    },
    rollupOptions: {
      external: ["cross-fetch", "ts-toolbelt", "nanoid/non-secure"],
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

    minify: true,
  },
});

function getEntryName(filename: string) {
  return filename.replace(/^src\//, "").replace(/\.ts$/, "");
}
