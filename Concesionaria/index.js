window.onload = function () {

    total = 0;
    precio = 0;

    // CARRITO
    const cajaCarrito = document.querySelector('.cajaCarrito');

    // abrir carrito 
    $('.iconCarrito').on('click', function () {
        cajaCarrito.classList.add('active');
    });

    // cerrar carrito 
    $('.fa-close').on('click', function () {
        cajaCarrito.classList.remove('active');
    });

    // agregar mensaje d principio 
    $(".servicios").prepend("<h2> Nuestros Autos: </h2>");

    // LOCAL STORAGE 
    const agrCarritoBtn = document.getElementsByClassName('agrCarrito');
    let items = [];

    for (let i = 0; i < agrCarritoBtn.length; i++) {

        agrCarritoBtn[i].addEventListener("click", function (e) {
            if (typeof (Storage) !== 'undefined') {
                let item = {
                    id: i + 1,
                    nombre: e.target.parentElement.children[0].textContent,
                    precio: e.target.parentElement.children[1].children[0].textContent,
                    num: 1,
                    precioTotal: total
                };
                if (JSON.parse(localStorage.getItem('items')) === null) {
                    items.push(item);
                    localStorage.setItem("items", JSON.stringify(items));
                    window.location.reload();
                } else {
                    const localItems = JSON.parse(localStorage.getItem("items"));
                    localItems.map(data => {
                        if (item.id == data.id) {
                            item.num = data.num + 1;
                        } else {
                            items.push(data);
                        }
                    });
                    items.push(item);
                    localStorage.setItem('items', JSON.stringify(items))
                    window.location.reload();
                }
            } else {
                console.log('NO FUNCIONA');
            }
        });
    }

    // agregar al carrito 
    const iconCarritoP = document.querySelector('.iconCarrito p');
    let num = 0;
    JSON.parse(localStorage.getItem('items')).map(data => {
        num = num + data.num;
    });

    iconCarritoP.innerHTML = num;

    // agregar al carrito tabla 
    const cajaCarritoTabla = cajaCarrito.querySelector('table');
    let datosTabla = '';
    datosTabla += '<tr><th class="tituloTabla">Id</th><th class="tituloTabla">Nombre</th><th class="tituloTabla">Cantidad</th><th class="tituloTabla">Precio</th><th class="tituloTabla"></th></tr>';
    if (JSON.parse(localStorage.getItem('items'))[0] == null) {
        // no entiendo por que esto no funciona????
        datosTabla += '<tr><th> No agregó ningún item </th></tr>'
    } else {
        JSON.parse(localStorage.getItem('items')).map(data => {
            datosTabla += '<tr><th>' + data.id + '</th><th>' + data.nombre + '</th><th>' + data.num + '</th><th>$' + (data.precio * data.num) + '</th><th class="btnEliminar"><a href="#" onclick=eliminar(this);>Eliminar</a></th></tr>';
            // mostrar 
            precio = parseInt(data.precio) * parseInt(data.num);
            total = total + precio;
            console.log(total);
        });
    }
    let cajaMostrarTotal = document.getElementById("total");

    // mostrar tabla y total 
    cajaMostrarTotal.textContent = (total);
    cajaCarritoTabla.innerHTML = datosTabla;
}

// eliminar del carrito 
function eliminar(e) {
    let items = [];
    JSON.parse(localStorage.getItem('items')).map(data => {
        if (data.id != e.parentElement.parentElement.children[0].textContent) {
            items.push(data);
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
    window.location.reload();
};

// ANIMACIONES 
$("#contenedorAbajo").hide();
$("#ocultar").hide();

// mostrar caja 
$('#mostrar').click(function () {
    $('#contenedorAbajo').css("background-color", "black")
        .slideDown(1000)
    $("#ocultar").fadeIn(1000);
});

// cerrar caja 
$('#ocultar').click(function () {
    $('#contenedorAbajo')
        .slideUp(1000)
    $("#ocultar").fadeOut(1000);
});

// animacion concatenada 
$(".contenidoverMas").hide();

$('#verMas').click(function () {
    $('.contenidoverMas')
        .slideDown(1000)
        .delay(3000)
        .slideUp(1000);
});

// galeria (slider)
$(document).ready(function () {
    var x = 0;
    // cambiar img 
    $('.btn-next').click(function () {

        x = (x <= 300) ? (x + 100) : 0;
        $('figure').css('left', -x + '%');
    });

    // ir atras 
    $('.btn-prev').click(function () {

        x = (x >= 100) ? (x - 100) : 400;
        $('figure').css('left', -x + '%');
    });
});


// AJAX 

$(document).ready(function () {

    $('.comprar').click(function () {
        $.get("datos.txt", function (data) {
            $("#ajax").html(data);
        });
    });
});

//Auto
// Dom
let autos = [];

//Traemos la info del JSON
$.get("autos.json", function (datos, estado) {
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
    $(id).append(`<div class="itemsCaja">
    <div class="item">
      <img src="${coches.imagen}" alt="" />
      <div class="itemInfo">
        <h1>${coches.marca}</h1>
        <h3>${coches.modelo}</h3>
        <p>$<span>${coches.precio}</span></p>
        <a href="#" title="agregar" class="agrCarrito">Agregar</a>
      </div>
    </div>
  </div>`);
  }
}