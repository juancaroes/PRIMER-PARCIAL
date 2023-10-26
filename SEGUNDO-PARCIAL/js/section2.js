
function crearServicio({titulo,descripcion}){
    return `
        <div class="servicio">
            <h1>${titulo}</h1>
            <p>${descripcion}</p>
        </div>
    `;
}

const data=[
    {titulo: "Seccion uno",descripcion:"Descripcion de la uno"},
    {titulo: "Seccion dos",descripcion:"Descripcion de la dos"},
    {titulo: "Seccion tres",descripcion:"Descripcion de la tres"},
    {titulo: "Seccion cuatro",descripcion:"Descripcion de la cuatro"},
    {titulo: "Seccion cinco",descripcion:"Descripcion de la cinco"},
    {titulo: "Seccion seis",descripcion:"Descripcion de la seis"},
];
function crearServicioConObjetos({titulo,descripcion}){
    const contenedorServicio=document.createElement('div');
    const parrafo=document.createElement('p');
    parrafo.innerText=descripcion;
    const heading=document.createElement('h3');
    heading.innerText=titulo;
    contenedorServicio.appendChild(heading);
    contenedorServicio.appendChild(parrafo);
    contenedorServicio.classList.add("servicio");
    return contenedorServicio;
}
const contenedor=document.querySelector('.contenedor-servicios')
console.log(contenedor)


for (servicio of data){
    const{descripcion}=servicio;
    console.log(descripcion);
    const servicioHtml=crearServicioConObjetos(servicio);
    contenedor.appendChild(servicioHtml);
    //contenedor.insertAdjacentHTML('beforeend', servicioHtml)
}


