const validarValor = (n) => {
    return n <= 0;
};

const ingresoCosto = () => {
    let valor = parseFloat(prompt("Ingrese el valor del producto"));
    while (validarValor(valor)) {
        alert("Por favor, ingrese un número válido.");
        valor = parseFloat(prompt("Ingrese el valor del producto"));
    }
    return valor;
};
const sumarIva = (n) => {
    return n / 0, 21;
};

const Total = () => {
    let num = ingresoCosto();
    let iva = sumarIva(num);
    alert("EL Total de pago es: " + iva + "$");
};

Total();