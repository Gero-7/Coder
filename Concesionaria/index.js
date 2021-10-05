console.log("Bienvenidos a Salado");
//Prompt
let nombreCompleto = prompt("Ingrese su Nombre Completo");
alert("Bienvenido a la Concesionaria de Salado!\n" + nombreCompleto);

// Arrays
let autos = [];

//Traemos la info del JSON
$.get("autos.json", function(datos, estado) {
    //llamamos a la direccion del JSON
    console.log(datos); //nos fiajmos si esta el Array creado, si aparecen los Cursos, es porque hicimos bien la llamada
    console.log(estado); //Si esta bien la llamda del JSON, saldrá success como estado
    if (estado == "success") {
        // Si el estado es exitoso
        for (const listaJson of datos) {
            //guardamos los datos, que son los cursos en la variable listaJson
            autos.push(listaJson); //hacemos un Push al array producto
        }
    }
    //console.log(datos);//sirve para ver si vamos por buen camino!

    //INTERFAZ DE PRODUCTOS CON UNA FUNCION
    interfaz(autos, "#productosContenedor"); //agreamos datos al 1er parametro y listo! :D
});

//Interfaz DOM Jquery
function interfaz(autos, id) {
    $(id).empty();
    for (const coches of autos) {
        $(id).append(`<div class="card" style="width: 300px;">
                    <img src="${coches.imagen}" class="card-img-top img-flinterfazd" style="width: 300px;" alt="${coches.marca}  ">
                    <div class="card-body">
                    <h3 class="card-title">${coches.marca}</h3>
                    <h6 class="card-title">${coches.modelo}</h6>
                    <p class="card-text">$${coches.precio}</p>
                    </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>Color:</strong> ${coches.color}</li>
    <li class="list-group-item"><strong>Año:</strong> ${coches.anio}</li>
    <li class="list-group-item"><strong>Patente:</strong> ${coches.patente}</li>
    <li class="list-group-item"><strong>KM:</strong> ${coches.km}</li>
  </ul>
  <div class="card-body">
  <a href="#" id='${coches.id}' class="btn btn-success btn-compra">Comprar</a>
  </div>
</div>`);
    }
}