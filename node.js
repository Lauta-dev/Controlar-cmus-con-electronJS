const { spawn } = require("node:child_process");
const cmus = spawn("cmus-remote", ["-Q"]);
export const play = (v) => spawn("cmus-remote", [`-${v}`]);
const tag = "tag";

cmus.stdout.on("data", (d) => {
  const cmus = d.toString().trim().split("\n");
  const cmusStatus = cmus.find((e) => e.startsWith(`status`));
  const estado = cmusStatus.split(" ")[1];
  
  if (estado == "playing") play("u");
  else if (estado == "paused") play("p");
});
