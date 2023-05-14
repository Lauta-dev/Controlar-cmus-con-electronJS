import { artista } from "./artista.js";
import { titulo } from "./musica.js";
import { btn } from "./cmusBtn.js";

export const artistaHTML = document.getElementById("artista");
export const Cancion = document.getElementById("cancion");
const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

artistaHTML.innerText = await artista();
Cancion.innerText = await titulo();

play.addEventListener("click", btn.btnPlay);
next.addEventListener("click", btn.btnNext);
prev.addEventListener("click", btn.btnPrev);
