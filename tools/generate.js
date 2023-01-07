/**
 * # generate.js
 *
 * This script generates TypeScript types for Geotab, formats them, and writes export statements for
 * them to `src/types/index.ts`.
 */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const glob = require("fast-glob");
const { rm } = require("fs/promises");
const { sh } = require("./utils/sh");

async function main() {
  await clean();
  await generate();
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

void main();
