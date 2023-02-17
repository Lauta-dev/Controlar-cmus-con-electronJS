import { playCmus, estado } from "./cmus.js";

const titulo = document.getElementById("titulo");
const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

play.addEventListener("click", () => {
  
  playCmus("u");
  if (play.innerText == "Pause") play.innerText = "Play";
  else play.innerText = "Pause";

  if (estado == "playing") titulo.innerText = "Pausado";
  else titulo.innerText = "dsakjdiasjid"
});

next.addEventListener("click", () => playCmus("n"));
prev.addEventListener("click", () => playCmus("r"));
