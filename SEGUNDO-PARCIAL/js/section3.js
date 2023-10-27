const data2 = [
    { titulo: "Primer colaboradorohn Stith Pemberton", descripcion2: "un georgiano apasionado por las bebidas que invento la primera receta" },
    { titulo: "pepsiman", descripcion2: "un gran competidor " },
    { titulo: "recordar poner mas imagenes", descripcion2: "pruebaaaa" }
];
function crearColaboradorConObjetos({ titulo, descripcion2 }) {
    const contenedorColaborador = document.createElement('div');
    const parrafo2 = document.createElement('p');
    parrafo2.innerText = descripcion2;
    const heading2 = document.createElement('h3');
    heading2.innerText = titulo;
    const img = document.createElement('img'); 
    contenedorColaborador.appendChild(img);
    contenedorColaborador.appendChild(heading2);
    contenedorColaborador.appendChild(parrafo2);
    contenedorColaborador.classList.add("colaborador");
    img.src ="imagenes/icono.png"; 
    return contenedorColaborador;
    
}
const contenedor2 = document.querySelector('.contenedor-Colaboradores');
for (colaborador of data2) {
    const colaboradorHtml = crearColaboradorConObjetos(colaborador);
    contenedor2.appendChild(colaboradorHtml);
}