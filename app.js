// Elementos del DOM
const inputTexto = document.getElementById("inputTexto");
const parrafoAside = document.getElementById("parrafoAside");
const divMensajes = document.getElementById("mensajes");
const copiarBtn = document.getElementById("copiarBtn");
const mensajeAside = document.getElementById("mensajeAside");
const muneco = document.getElementById("muñeco");

//  Funciones de Utilidad

/**
 * Valida si el texto contiene mayúsculas o acentos.
 * @param {string} texto - El texto a validar.
 * @returns {boolean} - `true` si el texto contiene mayúsculas o acentos, `false` de lo contrario.
 */
function validarTexto(texto) {
  // Expresión regular para encontrar letras mayúsculas (A-Z) o vocales acentuadas (áéíóúü)
  const expresion = /[A-ZÁÉÍÓÚÜáéíóúü]/;
  return expresion.test(texto);
}

/**
 * Muestra una alerta Toastify cuando el texto no cumple las reglas de validación.
 * Limpia el input de texto después de la alerta.
 */
function mostrarAlerta() {
  Toastify({
    text: "El texto no puede contener mayúsculas o acentos.",
    duration: 3500,
    style: {
      background: "linear-gradient(to right, #d01206, #f8f4f7)",
      borderRadius: "1vw",
    },
    gravity: "top",
    position: "center",
  }).showToast();

  // Limpia el input de texto después de un breve retraso (para que el usuario lea la alerta)
  setTimeout(() => {
    inputTexto.value = "";
  }, 3500);
}

/**
 * Restaura el estado inicial de la sección del aside (muñeco, mensaje y botón de copiar).
 * Se utiliza cuando no hay texto para procesar o después de un error de validación.
 */
function restaurarInterfazInicial() {
  muneco.style.display = "block";
  mensajeAside.style.display = "block";
  copiarBtn.style.display = "none";

  // Restablece los estilos del div de mensajes a su estado original
  divMensajes.style.textAlign = "center";
  divMensajes.style.padding = "0";
  divMensajes.style.top = "60%";
  parrafoAside.style.color = "#495057";
  parrafoAside.innerHTML =
    "Ingresa el texto que desees encriptar o desencriptar.";
}

/**
 * Aplica estilos al div de mensajes para mostrar el texto encriptado/desencriptado.
 * Cambia la alineación, padding y posición.
 */
function agregarEstilosParaResultado() {
  divMensajes.style.textAlign = "left";
  divMensajes.style.padding = "0 2vw";
  divMensajes.style.top = "3vh";
  parrafoAside.style.color = "#495057";
}

/**
 * Oculta los elementos iniciales del aside (muñeco, mensaje principal)
 * y muestra el botón de copiar.
 */
function ocultarElementosInicialesYMostrarBotonCopiar() {
  muneco.style.display = "none";
  mensajeAside.style.display = "none";
  copiarBtn.style.display = "block";
}

//  Funciones de Encriptación/Desencriptación

/**
 * Encripta el texto ingresado por el usuario.
 * Realiza validaciones y actualiza la interfaz con el resultado.
 */
function encriptarTexto() {
  let textoOriginal = inputTexto.value.trim();

  // Valida si el input está vacío
  if (textoOriginal === "") {
    Toastify({
      text: "Por favor, ingresa un texto para encriptar.",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #ffc107, #fff)",
        borderRadius: "1vw",
      },
      gravity: "top",
      position: "center",
    }).showToast();
    restaurarInterfazInicial();
    return;
  }

  // Valida el formato del texto (sin mayúsculas o acentos)
  if (validarTexto(textoOriginal)) {
    mostrarAlerta();
    restaurarInterfazInicial();
    return;
  }

  // Si la validación es exitosa, procede a encriptar
  let textoEncriptado = encriptar(textoOriginal);
  ocultarElementosInicialesYMostrarBotonCopiar();
  agregarEstilosParaResultado();
  parrafoAside.innerHTML = textoEncriptado;
  inputTexto.value = "";
}

/**
 * Desencripta el texto ingresado por el usuario.
 * Realiza validaciones y actualiza la interfaz con el resultado.
 */
function desencriptarTexto() {
  let textoOriginal = inputTexto.value.trim();

  // Valida si el input está vacío
  if (textoOriginal === "") {
    Toastify({
      text: "Por favor, ingresa un texto para desencriptar.",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #ffc107, #fff)",
        borderRadius: "1vw",
      },
      gravity: "top",
      position: "center",
    }).showToast();
    restaurarInterfazInicial();
    return;
  }

  // Procede a desencriptar
  let textoDesencriptado = desencriptar(textoOriginal);
  ocultarElementosInicialesYMostrarBotonCopiar();
  agregarEstilosParaResultado();
  parrafoAside.innerHTML = textoDesencriptado;
  inputTexto.value = "";
}

/**
 * Copia el texto que se encuentra en el párrafo del aside al portapapeles del usuario.
 * Muestra una notificación Toastify al copiar con éxito o si hay un error.
 */
function copiar() {
  // Selecciona el texto con innerText del párrafo del aside
  let textoParaCopiar = parrafoAside.innerText;

  // Utiliza la API de Clipboard para escribir el texto
  navigator.clipboard
    .writeText(textoParaCopiar)
    .then(() => {
      // Notificación de éxito
      Toastify({
        text: "Texto copiado 😀",
        duration: 3000,
        style: {
          padding: "1.2vh 1.5vw",
          background: "linear-gradient(to right, rgb(104, 48, 130), #f0e9f0)",
          borderRadius: "1vw",
        },
        gravity: "top",
        position: "center",
      }).showToast();
    })
    .catch((err) => {
      // Manejo de error si la copia falla
      console.error("Error al copiar al portapapeles:", err);
      Toastify({
        text: "No se pudo copiar el texto.",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #dc3545, #f8d7da)",
          borderRadius: "1vw",
        },
        gravity: "top",
        position: "center",
      }).showToast();
    });
}

/**
 * Función para encriptar texto según las reglas específicas.
 * @param {string} texto - El texto original a encriptar.
 * @returns {string} - El texto encriptado.
 */
function encriptar(texto) {
  let letras = texto.split("");
  const letrasEncriptadas = letras.map((letra) => {
    switch (letra) {
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "a":
        return "ai";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return letra;
    }
  });
  return letrasEncriptadas.join("");
}

/**
 * Función para desencriptar texto según las reglas específicas.
 * @param {string} texto - El texto encriptado a desencriptar.
 * @returns {string} - El texto desencriptado.
 */
function desencriptar(texto) {
  const expresionesEncriptadas = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  // Crea una expresión regular para buscar todas las palabras encriptadas
  const regex = new RegExp(Object.keys(expresionesEncriptadas).join("|"), "g");
  // Reemplaza cada coincidencia con su letra original
  texto = texto.replace(regex, (match) => expresionesEncriptadas[match]);
  return texto;
}

//  Event Listener para cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  restaurarInterfazInicial();
});
