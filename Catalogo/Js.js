const ventanaFlotante = document.getElementById('VentanaFlotante');
const tablaCarrito = ventanaFlotante.querySelector('.table');
const itemcarritocompras = document.querySelector('.CarritoCompras');
const carritoContenido = tablaCarrito.querySelector('tbody');


function Comprar(){
    alert('¡Producto agregado Exitosamente\nRevise el carrito de compras')
}


function agregarproductoclick(event) {
    const boton = event.target;
    const item = boton.closest('.card');

    const Titulo = item.querySelector('.card-title').textContent;
    const Precio = item.querySelector('.card-Precio').textContent;
    const Imagen = item.querySelector('.img-thumbnail').src;

    AgregarItemsAlCarrito(Titulo, Precio, Imagen);
}

function AgregarItemsAlCarrito(Titulo, Precio, Imagen) {

    const elemento= tablaCarrito.getElementsByClassName('shoppingCardItemTitle')
    for(let i = 0; i < elemento.length; i++){
        if(elemento[i].innerText === Titulo){
            CantidadRepetida.value++;
            $('.toast').toast('show');
            ActualizarTotal()
            return;
        }
    }

    const fila = document.createElement('tr');
    const contenidoFila = `
    <table class="table table-bordered">
        <tr>
            <td class="tde"><img src=${Imagen} alt=""></td>
            <td class="shoppingCardItemTitle"><p>${Titulo}</p></td>
            <td class="itemPrecio">${Precio}</td>
            <td><input class="inputcantidad" type="number" min="1" value="1" required></td>
            <td><button class="btn btn-danger buttondelete">X</button></td>
        </tr>
    </table>`
        ;
    fila.innerHTML = contenidoFila;
    carritoContenido.appendChild(fila);


    fila.querySelector('.buttondelete').addEventListener('click', QuitarProductoTabla)

    fila.querySelector('.inputcantidad').addEventListener('change', ActualizarCantidad);

    ActualizarTotal()
}

var ventanaFlotanteVisible = false;

function toggleVentanaFlotante() {
    if (ventanaFlotanteVisible) {
        ventanaFlotante.style.display = "none";
        ventanaFlotanteVisible = false;
    } else {
        ventanaFlotante.style.display = "block";
        ventanaFlotanteVisible = true;
    }
}

const addToShopping = document.querySelectorAll('.add-cart')
addToShopping.forEach(agregarboton => {
    agregarboton.addEventListener('click', agregarproductoclick)
})

    itemcarritocompras.addEventListener('click', toggleVentanaFlotante);


function ActualizarTotal(){
    let total = 0;
    const TotalCarrito = document.querySelector('.preciocar')
    const totalCarritoitems = document.querySelectorAll('tr')
    
    totalCarritoitems.forEach(totalCarritoitems => {
        const preciotabla = totalCarritoitems.querySelector('.itemPrecio');
        const precioLimpio= Number(preciotabla.textContent.replace('S/.',''));


        const inputCantidad= totalCarritoitems.querySelector('.inputcantidad')     
        const valorcantidad = Number(inputCantidad.value);
        total=total+ precioLimpio *  valorcantidad;    
    })
    TotalCarrito.innerHTML = `Total: S/.${total.toFixed(2)}`
}



function QuitarProductoTabla(event){
    const clickearBoton = event.target;
    
    clickearBoton.closest('tr').remove();
    ActualizarTotal();
}

function ActualizarCantidad(event){
    const input = event.target;
    if(input.value <= 0){
        input.value=1
    }
    ActualizarTotal()
    
}



function filtrarProductos() {
    var modelosSeleccionados = document.querySelectorAll('input[type="checkbox"][id^="modelo"]:checked');
    var coloresSeleccionados = document.querySelectorAll('input[type="checkbox"][id^="color"]:checked');

    var productos = document.getElementsByClassName('card-item');
    for (var i = 0; i < productos.length; i++) {
        var modelo = productos[i].getAttribute('data-modelo');
        var color = productos[i].getAttribute('data-color');

        var modeloFiltrado = modelosSeleccionados.length === 0 || Array.from(modelosSeleccionados).some(x => x.value === modelo);
        var colorFiltrado = coloresSeleccionados.length === 0 || Array.from(coloresSeleccionados).some(x => x.value === color);

        productos[i].style.display = modeloFiltrado && colorFiltrado ? 'block' : 'none';
    }
}
