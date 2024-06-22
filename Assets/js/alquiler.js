// /assets/js/alquiler.js

function renderPropiedadesAlquiler() {
    console.log('Arreglo de propiedades en alquiler:', propiedades_alquiler);
 
    const container = document.getElementById('propiedades-alquiler');
  
    console.log('Contenedor de propiedades en alquiler:', container);

    container.innerHTML = '';
    propiedades_alquiler.forEach(propiedad => {
        const propertyElement = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                        <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                            <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
                            ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                        </p>
                        <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                            <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i>
                            ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                        </p>
                    </div>
                </div>
            </div>
        `;
 
        console.log('HTML generado para la propiedad:', propertyElement);
 
        container.innerHTML += propertyElement;
    });
}

document.addEventListener('DOMContentLoaded', renderPropiedadesAlquiler);
