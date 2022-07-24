let registrarse = confirm ("Quisiera registarse en nuestra pagina y obtener beneficios unicos!");


if(registrarse){
    pedirdatos();

    alert("gracias por registrate");
    
} 
function pedirdatos(){
    let nombre = prompt("Ingresa tu nombre");
    let mail = prompt("Ingresa tu mail");

}

const precioProd = 15000;


const calcularCuotas = function () {
let cuotaStr = prompt("En cuantas cuotas desea pagar? 6 - 12 - 18 - 24");
if (cuotaStr != null) {
    while (
    cuotaStr != 6 &&
    cuotaStr != 12 &&
    cuotaStr != 18 &&
    cuotaStr != 24
    ) {
        if (cuotaStr != null) {
        cuotaStr = prompt(
            "Error. Ingrese un nro de cuotas valido. (6, 12, 18, 24)"
        );
    }
    }
    let precioFinal = precioProd / cuotaStr;
    alert(
    `Elegiste ${cuotaStr} cuotas, y el valor de cada cuota sera de: ${precioFinal}`
    );
}
};

calcularCuotas();






