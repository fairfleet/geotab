/**
 * # prepare.js
 *
 * This script prepares the project for publishing to npm.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { copyFile } = require("fs/promises");

async function main() {
  await Promise.all([
    copyFile("README.md", "dist/README.md"),
    copyFile("LICENSE.md", "dist/LICENSE.md"),
    copyFile("package.json", "dist/package.json"),
  ]);
}

void main();
