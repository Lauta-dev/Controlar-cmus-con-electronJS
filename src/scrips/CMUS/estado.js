import { cmusEstado } from "./cmusEstado.js";
const titulo = document.getElementById("estado");

export const cambiarTitulo = async () => {
  const estado = await cmusEstado();
  if (estado == "playing") titulo.innerText = "Escuchando";
  else if (estado == "paused") titulo.innerText = "Pausa";
  else if (estado == "stopped") titulo.innerText = "Cancion parada";
};
cambiarTitulo();
