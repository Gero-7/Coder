let age = prompt("Ingresar un numero");
let firstName = prompt("Ingresa un nombre");
let surname = prompt("Ingresa apellido");

if (age <= 16) {
    alert("No tiene acceso a la pagina");
} else if (firstName == "Gero" || surname == "Salado") {
    alert("Verfique su nombre y apellido: " + firstName + " " + surname);
} else {
    alert("Bienvenido a su clase " + firstName + " " + surname);
}