// Selecciona elementos del DOM una sola vez para mejorar la eficiencia
const elementos = {
  mensajeEntrada: document.getElementById("mensaje"),
  mostrarMensaje: document.getElementById("muestraMensaje"),
  imagenIA: document.getElementById("imagenIA"),
  copiar: document.getElementById("divCopiar"),
};

// Configuración inicial de la UI
function configurarUI() {
  establecerTextos([
    { selector: "h1", texto: "Encriptador de Texto" },
    { selector: "pTitulo", texto: "Challenge ONE G6" },
    { selector: "h2", texto: "Ningún mensaje fue encontrado" },
    { selector: "h4", texto: "Solo letras minúsculas y sin acentos" },
  ]);
  elementos.copiar.style.display = "none";
}

function establecerTextos(textos) {
  textos.forEach(({ selector, texto }) => {
    const elemento =
      document.querySelector(selector) || document.getElementById(selector);
    if (elemento) elemento.innerHTML = texto;
  });
}

function manejarInputTexto() {
  const textoNormalizado = normalizarTexto(elementos.mensajeEntrada.value);
  elementos.mensajeEntrada.value = textoNormalizado;
  actualizarUI(textoNormalizado);
}

function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¡!´¨°|¬`@#$%^&*"()=_+{}\[\]:;<>.?~\\/-]/g, "")
    .toLowerCase();
}

function actualizarUI(texto) {
  const hayTexto = texto.length > 0;
  establecerTextos([
    {
      selector: "h2",
      texto: hayTexto
        ? "Se encontró un mensaje"
        : "Ningún mensaje fue encontrado",
    },
    {
      selector: "h3",
      texto: hayTexto
        ? "Listo para trabajar"
        : "Ingresa el texto que deseas encriptar o desencriptar",
    },
  ]);
  elementos.imagenIA.style.display = hayTexto ? "none" : "inline";
  elementos.copiar.style.display = hayTexto ? "inline" : "none";
}

function iniciarEventos() {
  elementos.mensajeEntrada.addEventListener("input", manejarInputTexto);
  document.getElementById("encriptar").addEventListener("click", () => {
    const textoEncriptado = encriptar(elementos.mensajeEntrada.value);
    elementos.mostrarMensaje.textContent = textoEncriptado;
    actualizarUI(textoEncriptado);
  });
  document.getElementById("desencriptar").addEventListener("click", () => {
    const textoDesencriptado = desencriptar(elementos.mensajeEntrada.value);
    elementos.mostrarMensaje.textContent = textoDesencriptado;
    actualizarUI(textoDesencriptado);
  });
  elementos.copiar.addEventListener("click", copiarAlPortapapeles);
}

function encriptar(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function desencriptar(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function copiarAlPortapapeles() {
  navigator.clipboard
    .writeText(elementos.mostrarMensaje.textContent)
    .then(() => {
      console.log("Texto copiado al portapapeles");
    })
    .catch((err) => console.error("Error al copiar al portapapeles", err));
}

function iniciar() {
  configurarUI();
  iniciarEventos();
}

iniciar();
