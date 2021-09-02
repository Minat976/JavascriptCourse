let productos =[];
let listaProductos = document.getElementById("listaElementos");

function addElement() {
    let newElement = window.prompt("Nuevo elemento");
    if (newElement != null){
        productos.push(newElement);
    }
}
console.log(productos);

while(listaProductos.firstChild){
    listaProductos.removeChild(listaProductos.firstChild);


productos.forEach((producto) =>{
    let nuevoProducto = document.createElement("li");
    let numeroDeproductos = listaProductos.children.length;
    nuevoProducto.setAttribute('id',numeroDeproductos);
    nuevoProducto.innerHTML = `${producto}<button onclick ='eliminaProducto(${numeroDeproductos}))'>Eliminar</button>`;
    listaProductos.appendChild(nuevoProducto); 
});

}

function eliminaProducto(producto){
    listaProductos.removeChild(listaProductos.childNodes[producto]);
}

function agregaProducto(producto){
    let nuevoProducto= document.createElement("li");
    nuevoProducto.innerHTML = `${producto}<button>Eliminar</button>`;
    listaProductos.appendChild(nuevoProducto);
}

