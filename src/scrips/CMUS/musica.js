const { spawn } = require("node:child_process");

export const titulo = () => {
  const proceso = spawn("cmus-remote", ["-Q"]);

  // tag title 5 Seconds Of Summer

  return new Promise((res, rej) =>
    proceso.stdout.on("data", (data) => {
      const cmus = data.toString().trim().split("\n");
      res(cmus.find((e) => e.startsWith(`tag title`)));
    })
  );
};
