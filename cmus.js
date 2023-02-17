const { spawn } = require("node:child_process");
export const playCmus = (v) => spawn("cmus-remote", [`-${v}`]);

const saberEstado = () => {
  const cmus = spawn("cmus-remote", ["-Q"]);

  return new Promise((resolve, reject) => {
    cmus.stdout.on("data", (data) => {
      const cmus = data.toString().trim().split("\n");
      const cmusStatus = cmus.find((e) => e.startsWith(`status`));
      const estado = cmusStatus.split(" ")[1];
      resolve(estado)
    });
    cmus.on("error", (error) => reject(error))
  });
};
export const estado = await saberEstado();