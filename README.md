# 🛡️ Encriptador de Texto

## 📝 Descripción

"Encriptador de Texto" es una aplicación web intuitiva y robusta diseñada para transformar tus mensajes, asegurando la confidencialidad de la información. Permite a los usuarios tanto encriptar para proteger sus datos de accesos no autorizados, como desencriptar para recuperar el contenido original. Ideal para practicar conceptos de seguridad básica y manipulación de cadenas de texto en un entorno web.

## 🚀 Demo

¡Mira cómo funciona!

- **Captura de Pantalla 1 - Sin texto en el aside**
  ![Interfaz inicial del encriptador](img/Captura%20de%20Pantalla%201.png)

- **Captura de Pantalla 2 - Texto encriptado en el aside**
  ![Ejemplo de texto encriptado](img/Captura%20de%20Pantalla%202.png)

## 🌟 Características

- **🔐 Encriptación y Desencriptación:** Transforma tus mensajes con un algoritmo de sustitución simple y reversible.
- **⚡ Validación de Entrada:** Asegura que el texto cumpla con los requisitos (sin mayúsculas ni acentos) antes de la encriptación.
- **📋 Funcionalidad de Copiar:** Copia instantáneamente el texto encriptado o desencriptado al portapapeles.
- **🎨 Interfaz de Usuario Amigable:** Diseño limpio y fácil de usar para una experiencia de usuario fluida.
- **📱 Diseño Responsive:** Se adapta perfectamente a diferentes tamaños de pantalla, desde dispositivos móviles hasta escritorios.
- **✨ Notificaciones Interactivas:** Utiliza Toastify para proporcionar retroalimentación visual al usuario sobre acciones y errores.

## 🔑 Reglas de Encriptación y Desencriptación

Para que el encriptador funcione correctamente, el texto ingresado debe seguir las siguientes reglas:

- **Solo letras minúsculas:** No se permiten letras mayúsculas (`A-Z`).
- **Sin acentos:** Las vocales acentuadas (`á, é, í, ó, ú, ü`) no son válidas.

**El algoritmo de encriptación transforma las siguientes vocales:**

- `e` se convierte en `enter`
- `i` se convierte en `imes`
- `a` se convierte en `ai`
- `o` se convierte en `ober`
- `u` se convierte en `ufat`

Las demás letras y caracteres se mantienen sin cambios.

## 💻 Tecnologías Utilizadas

- **HTML5:** Para la estructura semántica de la aplicación.
- **CSS3:** Para el estilo visual y el diseño responsive.
- **JavaScript:** Para la lógica de encriptación, desencriptación y la interactividad de la interfaz.
- **Toastify-JS:** Librería para notificaciones personalizables (Toasts).

## 🚀 Cómo Utilizar

1.  **Clona o descarga el repositorio:**

    ```bash
    git clone https://github.com/josecervera20/Encriptador.git
    ```

2.  **Navega al directorio del proyecto:**

    ```bash
    cd Encriptador
    ```

3.  **Abre el archivo `index.html`:** Simplemente abre el archivo `index.html` en tu navegador web preferido. No requiere un servidor local para funcionar.

4.  **Ingresa tu texto:** Escribe el mensaje que deseas procesar en el área de texto principal.

5.  **Elige una acción:**

    - Haz clic en el botón "Encriptar" para transformar tu texto siguiendo las reglas.
    - Haz clic en el botón "Desencriptar" para revertir un texto previamente encriptado a su forma original.

6.  **Copia el resultado:** Si estás satisfecho con el resultado, haz clic en el botón "Copiar" para guardar el texto en tu portapapeles.

## 🤝 Contribuir

¡Las contribuciones son siempre bienvenidas! Si tienes alguna idea para mejorar el proyecto, encuentras un error o quieres añadir una nueva característica, por favor:

1.  Abre un `Issue` describiendo tu propuesta o el problema.
2.  Si es una mejora o corrección, crea un `Fork` del repositorio.
3.  Crea una nueva rama (`git checkout -b feature/nueva-caracteristica` o `bugfix/nombre-del-bug`).
4.  Realiza tus cambios y commitea (`git commit -m "feat: descripción de la característica"`).
5.  Haz `push` a tu rama (`git push origin feature/nueva-caracteristica`).
6.  Abre un `Pull Request` detallando tus cambios.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---
