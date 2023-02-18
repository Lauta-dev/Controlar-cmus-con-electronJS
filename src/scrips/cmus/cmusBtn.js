import { titulo } from "./musica.js";
import { playCmus } from "./comandos.js";
import { cambiarTitulo } from "./Verificar-estado.js";

import { Cancion } from "../../../scripts.js";
import { artista } from "./artista.js";
import { artistaHTML } from "../../../scripts.js";
import { cmusEstado } from "../cmus/estado.js";

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

export const btn = {
  btnPlay,
  btnNext,
  btnPrev,
};
