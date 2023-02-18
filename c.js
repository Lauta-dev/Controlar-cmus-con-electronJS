import { cmusEstado } from "./src/scrips/CMUS/cmusEstado.js";
import { playCmus } from "./src/scrips/CMUS/cmusReproducion.js";
import { cambiarTitulo } from "./src/scrips/CMUS/estado.js";
import { artista } from "./src/scrips/CMUS/artista.js";
import { titulo } from "./src/scrips/CMUS/musica.js";

const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const artistaHTML = document.getElementById("artista");
const Cancion = document.getElementById("cancion");

artistaHTML.innerText = await artista();
Cancion.innerText = await titulo();

const btnNext = async () => {
  playCmus("n");
  artistaHTML.innerText = await artista();
  Cancion.innerText = await titulo();
};
const btnPrev = async () => {
  playCmus("r");
  artistaHTML.innerText = await artista();
  Cancion.innerText = await titulo();
};

const btnPlay = async () => {
  titulo();
  const estadoCmus = await cmusEstado();
  if (estadoCmus == "playing") {
    playCmus("u");
    cambiarTitulo();
    play.innerText = "Play";
  } else {
    playCmus("p");
    cambiarTitulo();
    play.innerText = "Pause";
  }
};

play.addEventListener("click", btnPlay);
next.addEventListener("click", btnNext);
prev.addEventListener("click", btnPrev);
