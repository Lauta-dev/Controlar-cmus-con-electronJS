const { spawn } = require("node:child_process");

// Exporta el titulo de la cancíon
export const titulo = () => {
  const proceso = spawn("cmus-remote", ["-Q"]);
  return new Promise((res, rej) =>
    proceso.stdout.on("data", (data) => {
      const cmus = data.toString().trim().split("\n");
      res(cmus.find((e) => e.startsWith(`tag title`)));
    })
  );
};
