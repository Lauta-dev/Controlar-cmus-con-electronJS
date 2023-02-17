import { saberEstado } from "./CMUS/cmusEstado.js";
import { playCmus } from "./CMUS/cmusReproducion.js";
import { cambiarTitulo } from "./CMUS/estado.js";

const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const btnPlay = async () => {
  const estadoCmus = await saberEstado();
  cambiarTitulo();
  if (estadoCmus == "playing") {
    playCmus("u");
    play.innerText = "Play";
  } else {
    playCmus("p");
    play.innerText = "Pause";
  }
};

play.addEventListener("click", btnPlay);
next.addEventListener("click");
prev.addEventListener("click");
