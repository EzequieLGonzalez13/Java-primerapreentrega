// array para almacenar los nombres de frutas
let frutas = [];

// Función para pedir nombres de frutas al usuario
function pedirFrutas() {
  let fruta = prompt("Bienvenido Ingrese nombre de Fruta (fin para terminar):");
  while (fruta.toLowerCase() !== "fin") {
    frutas.push(fruta);
    fruta = prompt("Ingrese un nombre de fruta (fin para terminar):");
  }
}

// Función para mostrar la lista de frutas y el número total
function mostrarFrutas(array) {
  let mensaje = "Frutas ingresadas:\n";
  for (let i = 0; i < array.length; i++) {
    mensaje += (i + 1) + ". " + array[i] + "\n";
  }
  mensaje += "Total de frutas: " + array.length ;
  alert(mensaje);
}

// Función para calcular total de frutas
function calcularTotalFrutas() {
  let total = 0;
  let precio;

  while (true) {
    precio = prompt("Ingrese el precio de la fruta (o 'fin' para terminar):");
    if (precio.toLowerCase() === "fin") {
      break;
    }
    total = total + parseInt(precio);
  }

  alert("El total es: " + total + "$");
}

// Función mensaje salida
function mensajeSalida(){
  let continuar = true
let confirmacion = prompt ("desea volver a comprar? (si/no)")
    if (confirmacion == "no") {
        continuar = false
        console.log ("Gracias")
    }else if (confirmacion  ==  "si"){
      console.log ("Disculpa nos quedamos sin Wi fi")
    }

    }
  

// Llamar a la función para pedir nombres de frutas
pedirFrutas();
// Llamar a la función para mostrar la lista de frutas y el número total
mostrarFrutas(frutas);
// pedirPrecio();
calcularTotalFrutas();
// Función mensaje salida
mensajeSalida()