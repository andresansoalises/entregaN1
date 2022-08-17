/* -----------CARGA DE PRODUCTOS--------*/
class Productos {
  constructor(nombre, marca, categoria, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.categoria = categoria;
    this.precio = precio;
  }
}

let producto1 = new Productos("serum intense", "avene", "hidratación", "6.893");
let producto2 = new Productos("tolerance", "avene", "hidratación", "4.875");
let producto3 = new Productos("sensibio H2O", "bioderma", "limpieza", "4.488");
let producto4 = new Productos("sensibio Ar", "bioderma", "atopica", "6.741");
let producto5 = new Productos("mineral 89", "vichy", "hidratación", "5.236");
let producto6 = new Productos("liftactiv", "vichy", "anti age", "6.408");

const tienda = [];
tienda.push(producto1, producto2, producto3, producto4, producto5, producto6);

/* ------------MÉTODO DE FILTRADO-----------*/

function marca() {
  let ingreseMarca = prompt("Ingrese la marca del producto");

  if (
    ingreseMarca == "avene" ||
    ingreseMarca == "vichy" ||
    ingreseMarca == "bioderma"
  ) {
    let filtrarMarca = tienda.filter((tienda) => tienda.marca == ingreseMarca);
    console.log(filtrarMarca);
  } else {
    alert("No se encuentra");
  }
}

let buscarProducto = prompt("¿Desea buscar un producto por la marca?");

while (buscarProducto != "" && buscarProducto == "si") {
  marca();
  break;
}
