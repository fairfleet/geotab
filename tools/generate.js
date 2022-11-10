/**
 * # generate.js
 *
 * This script generates TypeScript types for Geotab, formats them, and writes export statements for
 * them to `src/types/index.ts`.
 */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const glob = require("fast-glob");
const { writeFile, rmdir } = require("fs/promises");
const { sh } = require("./utils/sh");

async function main() {
  await clean();
  await generate();
  await format();
  await writeTypesIndex();
}

async function clean() {
  console.info("* Cleaning `src/types/**`");

  for (const dir of await glob("src/types/**/")) {
    await rmdir(dir);
  }
}

async function generate() {
  console.info("* Generating types");

  await sh("dotnet run --project tools/CaroKann");
}

async function format() {
  console.info("* Formatting types");

  await sh('prettier --write "src/types/**/*.ts"');
  await sh("eslint --fix --ext .ts src/types/**");
}

async function writeTypesIndex() {
  console.info("* Generating `src/types/index.ts`");

  const paths = await glob("src/types/**/*.ts");
  const imports = paths.map((file) => file.replace(/^src\/types\//, "").replace(/\.ts$/, ""));
  const exports = imports.map((file) => `export * from "./${file}";`).join("\n");

  await writeFile("src/types/index.ts", exports);
}

void main();