const { spawn } = require("node:child_process");
export const playCmus = (v) => spawn("cmus-remote", [`-${v}`]);