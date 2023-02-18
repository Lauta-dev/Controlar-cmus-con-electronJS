const homedir = document.getElementById("homedir");
const plataforma = document.getElementById("plataforma");
const shell = document.getElementById("shell");
const kernel = document.getElementById("kernel");

const os = require("node:os");

homedir.innerText = `Home dir: ${os.homedir().toString()}`;
plataforma.innerText = `OS: ${os.platform().toString()} ${os
  .arch()
  .toString()}`;
shell.innerText = `Shell: ${os.userInfo().shell.toString()}`;
kernel.innerText = `Kernel: ${os.release().toString()}`;
