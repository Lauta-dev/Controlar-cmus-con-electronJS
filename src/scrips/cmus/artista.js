const { spawn } = require("node:child_process");

// Exporta el artista de la cancion
export const artista = () => {
  const proceso = spawn("cmus-remote", ["-Q"]);
  return new Promise((resolve) =>
    proceso.stdout.on("data", (data) => {
      const cmus = data.toString().trim().split("\n");
      resolve(cmus.find((e) => e.startsWith(`tag artist`)));
    })
  );
};
