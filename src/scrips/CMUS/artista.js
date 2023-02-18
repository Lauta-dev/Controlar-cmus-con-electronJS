const { spawn } = require("node:child_process");

export const artista = () => {
  const proceso = spawn("cmus-remote", ["-Q"]);

  // tag artist 5 Seconds Of Summer

  return new Promise((resolve) =>
    proceso.stdout.on("data", (data) => {
      const cmus = data.toString().trim().split("\n");
      resolve(cmus.find((e) => e.startsWith(`tag artist`)));
    })
  );
};
