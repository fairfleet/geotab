/**
 * # generate.js
 *
 * This script generates TypeScript types for Geotab, formats them, and writes export statements for
 * them to `src/types/index.ts`.
 */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const glob = require("fast-glob");
const { writeFile, rm } = require("fs/promises");
const { sh } = require("./utils/sh");

async function main() {
  await clean();
  await generate();
  await writeTypesIndex();
  await format();
}

async function clean() {
  console.info("* Cleaning `src/types/**`");

  for (const dir of await glob("src/types/**", { onlyDirectories: true })) {
    await rm(dir, { recursive: true, force: true });
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
  const exports = paths
    .map((file) => file.replace(/^src\/types\//, "").replace(/\.ts$/, ""))
    .filter((file) => file !== "index")
    .map((file) => `export * from "./${file}";`);

  exports.sort();

  await writeFile("src/types/index.ts", exports.join("\n"));
}

void main();
