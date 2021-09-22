// VALIDACIONES
const validarCuotas = (cantidad) => {
    return cantidad === 1 || cantidad === 3 || cantidad === 6 || cantidad === 9;
}
const validarValor = (valor) => {
    return isNaN(valor) || valor <= 0;
}


//CÁLCULO DE VALOR DE CADA CUOTA
const calculo = (price, cuotas) => {
    return  (price / cuotas).toFixed(2);
};


// FUNCIONES PARA EL INGRESO DE DATOS
const pedirValor = () => {
    let valor = parseFloat(prompt("Ingrese el valor del producto"));
    while(validarValor(valor)){
        alert('Por favor, ingrese un número válido.');
        valor = parseFloat(prompt("Ingrese el valor del producto"));
    }
    return valor;
}

const pedirCuotas = () => {
    let cantidadCuotas = parseInt(prompt("Ingrese las cuotas"));
    while(!validarCuotas(cantidadCuotas)){
        alert('Por favor, ingrese 1, 3, 6 o 9 cuotas.');
        cantidadCuotas = parseInt(prompt("Ingrese las cuotas"));
    }
    return cantidadCuotas;
}

// PROGRAMA PRINCIPAL

const res = () => {
    let valorPro = pedirValor();
    let cantidadCuotas = pedirCuotas();
    let cuotas = calculo(valorPro, cantidadCuotas);
    alert("EL Total de pago es: " + cuotas + "$");
};

res();


//Además, para que sea autoejecutable podemos hacer esto otro

/* 
(() => {
    let valorPro = pedirValor();
    let cantidadCuotas = pedirCuotas();
    let cuotas = calculo(valorPro, cantidadCuotas);
    alert("EL Total de pago es: " + cuotas + "$");
})()

//De esta forma no necesitamos el const res, ni invocar con el res();
 */