const color = "azul";

switch (color) {
    case 'amarillo':
        console.log("amarillo");
        break;
    case 'rojo':
        console.log("rojo");
        break;
    case 'verde':
        console.log("verde");
        break;
    default:
        console.log("color no encontrado");
}

// color="rosa"
let numero = 5
console.log("este es el valor original de 'numero'", numero)
console.log("esto es una comparacion con ==", numero == "5")//correcto
console.log("esto es una comparacion con ===", numero === 5)//incorrecto