// variable
const calculo = (price, cuotas) => {
    switch (cuotas) {
        case 1:
            return price / 1;

        case 3:
            return price / 3;

        case 6:
            return price / 6;

        case 9:
            return price / 9;

        default:
            return "No se puede con mas cuotas";
    }
};

const res = () => {
    let valorPro = parseInt(prompt("Ingrese el valor del producto"));
    let cantidadCuotas = parseInt(prompt("Ingrese las cuotas"));
    let cuotas = calculo(valorPro, cantidadCuotas);
    alert("EL Total de pago es: " + cuotas);
};

res();