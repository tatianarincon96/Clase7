// ETAPA 1 Y 2
const enlaces = document.querySelectorAll(".rutas-img");
enlaces.forEach((enlace, i) => {
    // Pido urls de imágenes al usuario
    const urlImagen = prompt(`Ingrese la url de la imagen ${(i + 1)} por favor`);
    // Creo elemento imagen en el DOM
    const imagen = document.createElement("img");
    // Adjunto etiqueta imagen "hija" a la etiqueta enlace "padre"
    enlace.appendChild(imagen);
    // Agrego atributos a imagen
    imagen.setAttribute("src", urlImagen);
    imagen.setAttribute("alt", `imagen ${i + 1}`);
    imagen.setAttribute("width", "100%");
    // Agrego atributos a enlace
    enlace.setAttribute("href", urlImagen);
    enlace.setAttribute("target", "_blank");
});

/* ETAPA 3
- Nodo padre: contenedor
- Nodo hijo repetitivo: tarjeta
- Explicación: La creación de un template para las tarjetas eliminaría 
el código repetido en el html, y además nos permitiría manipular su contenido
de una forma más dinámica.
*/