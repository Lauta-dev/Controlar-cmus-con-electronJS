import { saberEstado } from "./cmusEstado.js";
const titulo = document.getElementById("titulo");

export const cambiarTitulo = async () =>
  (await saberEstado()) == "playing"
    ? (titulo.innerText = "Pausado")
    : (titulo.innerText = "Escuchando");
cambiarTitulo();
