const viajes = [
    { id: 3, destino: "Grecia", precio: 500.32, disponible: true },
    { id: 1, destino: "Aruba", precio: 500.24, disponible: true },
    { id: 5, destino: "Alemania", precio: 4500, disponible: true },
    { id: 4, destino: "Italia", precio: 2000, disponible: false },
    { id: 10, destino: "Marruecos", precio: 500, disponible: false },
    { id: 2, destino: "España", precio: 1300, disponible: true },
];

let bot = document.getElementById("tocar");
bot.addEventListener("click", buscar(num));
let num = parseInt(prompt("Introducir el id de viaje"));

const buscar = (num) => {
    const viajeSolicitado = viajes.find((viaje) => num === viaje.id);
    if (viajeSolicitado) {
        const parrafo = document.querySelector(".parrafo");
        parrafo.innerHTML = `<h3> ID: ${viajeSolicitado.id} </h3>
        <p> Destino: ${viajeSolicitado.destino} </p>;
        <b> $ ${viajeSolicitado.precio}`;
    }
};