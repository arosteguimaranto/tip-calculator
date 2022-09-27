let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente(){
const mesa = document.querySelector('#mesa').value;
const hora = document.querySelector('#hora').value;

// Revisar si hay campos vacios

const camposVacios = [mesa, hora].some( campo => campo === '' )

if(camposVacios) {
    //Verificar si ya hay una alerta
    const existeAlerta = document.querySelector('.invalid-feedback');
    
    if(!existeAlerta){
        const alerta = document.createElement('div');
        alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
        alerta.textContent = 'Todos los campos son Obligatorios';
        document.querySelector('.modal-body form').appendChild(alerta);
        
        // Eliminar la alerta

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
    return;
}  
 
// Asignar datos del formulario a cliente

cliente = {...cliente, mesa, hora}

console.log(cliente);

// Ocultar Modal

const modalFormulario = document.querySelector('#formulario');
const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
modalBootstrap.hide();

//Mostrar las secciones
mostrarSecciones();

}

function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}

function obtenerPlatillos() {
    const url = 'http://localhost:4000/platillos';

    fetch(url)
    .then (respuesta => respuesta.json())
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

}

function mostrarPlatillos(platillos) {
    const contenido = document.querySelector('#platillos .contenido'); 

    platillos.forEach( platillo => {
      const row = document.createElement('div');
      nombre.classList.add('col-md-4');
      nombre.textContent = platillo.nombre;

      row.appendChild(nombre);
      contenido.appendChild(row);
    })
}

