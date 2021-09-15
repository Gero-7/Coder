const CANTIDAD_NUMEROS = 5;

for (let i = 1; i <= CANTIDAD_NUMEROS; i++) {
    let numero = parseInt(prompt("Ingrese el numero"));

    switch (numero) {
        case 0:
            alert("Muy Malo");
            break;
        case 1:
        case 2:
        case 3:
        case 4:
            alert("Malo");
            break;
        case 5:
        case 6:
        case 7:
            alert("Aceptable");
            break;
        case 8:
        case 9:
            alert("Bueno");
            break;
        case 10:
            alert("Excelente");
            break;
        default:
            alert("No has ingresado un valor valido");
            break;
    }
}

/// opcion 2
for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt("Ingresa un numero: "));

    console.log(num);
    if (num === 0) {
        console.log("Muy malo");
    } else if (num >= 1 && num <= 4) {
        console.log("Malo");
    } else if (num >= 5 && num <= 7) {
        console.log("Aceptable");
    } else if (num >= 8 && num <= 9) {
        console.log("Bueno");
    } else {
        console.log("Excelente");
    }
}