class inscriptcion {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const numeroFila = Number(prompt("Ingrese el numero de su fila"));
const x = [];

for (let i = 1; i <= numeroFila; i++) {
    let nombre = prompt("Ingre su nombre");
    let edad = prompt("Ingrese su edad");
    x.push(new inscriptcion(nombre, edad));
}