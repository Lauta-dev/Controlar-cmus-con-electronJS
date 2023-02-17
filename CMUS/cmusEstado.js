const { spawn } = require("node:child_process");

export const saberEstado = () => {
  const cmus = spawn("cmus-remote", ["-Q"]);

  return new Promise((resolve, reject) => {
    cmus.stdout.on("data", (data) => {
      const cmus = data.toString().trim().split("\n");
      const cmusStatus = cmus.find((e) => e.startsWith(`status`));
      const estado = cmusStatus.split(" ")[1];
      resolve(estado);
    });
    cmus.on("error", (error) => reject(error));
  });
};
