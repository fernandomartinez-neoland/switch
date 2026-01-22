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
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");

color1.addEventListener("input", function () {

    document.body.style.background = `linear-gradient(to right, ${color1.value} 0%, ${color1.value} 30%, ${color2.value} 30%, ${color2.value} 100%) no-repeat fixed`;
})

color2.addEventListener("input", function () {

    document.body.style.background = `linear-gradient(to right, ${color1.value} 0%, ${color1.value} 30%, ${color2.value} 30%, ${color2.value} 100%) no-repeat fixed`;
})



const fruta = "manzana";

switch (fruta) {
    case "manzana":
    case "pera":

        console.log("es una fruta de arbol")
        break;
    case "fresa":
    case "arandano":

        console.log("es una baya");
        break;
    default:
        console.log("fruta desconocida");
}