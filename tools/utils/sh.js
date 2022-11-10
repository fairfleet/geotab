/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { exec } = require("child_process");

module.exports = {
  async sh(command) {
    return new Promise((resolve, reject) => {
      let stderr = "";

      const child = exec(command, (error) => {
        if (error) {
          return reject(error);
        }
      });

      child.stderr.on("data", (data) => (stderr += data));
      child.stdout.pipe(process.stdout);
      child.stderr.pipe(process.stderr);

      child.on("close", (code) => {
        if (code !== 0) {
          return reject(new Error(stderr));
        }

        resolve();
      });
    });
  },
};
