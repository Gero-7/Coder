const viajes = [
    { id: 3, destino: "Grecia", precio: 500.32, disponible: true },
    { id: 1, destino: "Aruba", precio: 500.24, disponible: true },
    { id: 5, destino: "Alemania", precio: 4500, disponible: true },
    { id: 4, destino: "Italia", precio: 2000, disponible: false },
    { id: 10, destino: "Marruecos", precio: 500, disponible: false },
    { id: 2, destino: "España", precio: 1300, disponible: true },
];

viajes.sort(function(a, b) {
    if (a.destino > b.destino) {
        return 1;
    }
    if (a.destino < b.destino) {
        return -1;
    }

    return 0;
});