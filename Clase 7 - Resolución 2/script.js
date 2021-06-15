// ETAPA 3 - Solución con Template Strings
// Función para pedir al usuario url de una imagen
function recibirUrl() {
    const urlImagen = prompt('Ingrese la url de una imagen por favor');   
    return urlImagen;
}
// Función para crear una tarjeta a partir de un template
function crearTarjeta(url) {
    const template = `
    <div class="tarjeta">
        <a href="${url}">
            <img src="${url}" class="imagen" alt="imagen"/>
        </a>
    </div>
    `;
    return template;
}
// Itero la cantidad de veces que quiero (4 en este caso), y voy creando cada una de las tarjetas
function renderizar() {
    const contenedor = document.querySelector(".contenedor");
    for (let i = 0; i < 4; i++) {
        const url = recibirUrl();
        const tarjeta = crearTarjeta(url);
        contenedor.innerHTML += tarjeta;
    }   
}

renderizar();