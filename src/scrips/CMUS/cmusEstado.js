const { spawn } = require("node:child_process");

// Saca el estado de Cmus (playing/paused)
export const cmusEstado = () => {
  const cmus = spawn("cmus-remote", ["-Q"]);

  return new Promise((resolve, reject) => {
    cmus.stdout.on("data", (data) => {
      const cmus = data.toString().trim().split("\n");
      const cmusEstado = cmus.find((e) => e.startsWith(`status`));
      const estadoFinal = cmusEstado.split(" ")[1];
      resolve(estadoFinal);
    });
    cmus.on("error", (error) => reject(error));
  });
};
