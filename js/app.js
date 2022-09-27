let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', btnGuardarCliente);

function guardarCliente(){
const mesa = document.querySelector('#mesa').value;
const hora = document.querySelector('#hora').value;

// Revisar si hay campos vacios

const camposVacios = [mesa, hora].some( campo => campo === '' )

if(camposVacios) {
    console.log ('Si hay almenos un campo vacio');
} else {
    console.log('Todos los campos estan llenos')
}
}