
function crearColaborador({ titulo, descripcion2 }) {
    return `
        <div class="colaborador">
            <img src="img/imagen.webp">
            <h1>${titulo}</h1>
            <p>${descripcion2}</p>
        </div>
    `;
}

const data2 = [
    { titulo: "Primer colaborador", descripcion2: "bla bla blaablabla" },
    { titulo: "Segundo colaborador", descripcion2: "bla bla bl4aablabla" },
    { titulo: "Tercer colaborador", descripcion2: "bla bla blaab43Sxlabla" }
];

function crearColaboradorConObjetos({ titulo, descripcion2 }) {
    const contenedorColaborador = document.createElement('div');
    const parrafo2 = document.createElement('p');
    parrafo2.innerText = descripcion2;
    const heading2 = document.createElement('h3');
    heading2.innerText = titulo;
    const img = document.createElement('img');
    img.src = "imagenes/logosuperior.png";
    contenedorColaborador.appendChild(img);
    contenedorColaborador.appendChild(heading2);
    contenedorColaborador.appendChild(parrafo2);
    contenedorColaborador.classList.add("colaborador");
    return contenedorColaborador;
}

const contenedor2 = document.querySelector('.contenedor-Colaboradores');

for (colaborador of data2) {
    const colaboradorHtml = crearColaboradorConObjetos(colaborador);
    contenedor2.appendChild(colaboradorHtml);
}
