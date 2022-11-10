/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { readFile } = require("fs/promises");
const { sh } = require("./utils/sh");

async function main() {
  const package = JSON.parse(await readFile("package.json", "utf8"));
  const version = package.version;

  sh(`git tag -a v${version} -m "Release v${version}"`);
}

void main();
