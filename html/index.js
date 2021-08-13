function readyFn( ) {
    // Este código es lanzado por el elemento <body onload="readyFn()">
    const entrada  = document.getElementById("input");
    const selector = document.getElementById("select");
    // Creamos un "Listener" para escuchar eventos en nuestra página, en este ejemplo, el evento es "click".
    selector.addEventListener("change", (event) => {
        console.log(event.target.value)
    })
    document.getElementById("submit").addEventListener("click", () => {
        // Aquí es donde vamos a realizar todas nuestras actividades.
        var texto = entrada.value // Actualizar el valor de la constante "entrada", por si ha cambiado recientemente.
        texto = texto.toString() // Este paso convierte cualquier valor en una cadena de texto (String variable)
        // ACTIVIDADES (Algoritmos):
        // 1) Todo el texto en Mayúsculas. // .toUpperCase() 
        // 2) Todo el texto en Minúsculas. // .toLowerCase()
        // 3) Detectar si el texto es un número o no. // .isNaN()
        // 4) Solo aceptar números. // .replace(/\D/g,'') // RegEx \D 
        // 5) Determinar si un número es par o impar. // Operador Resto (x % 2)
        myFunction(texto)
    });
}
function myFunction( texto ) {
    console.log(texto)
}
// Ejemplo de una función nueva
function newFunction( input ) {
    // El nombre de esta funcion es "newFunction" y tiene una variable de entrada llamada "input"
    // Ejemplo para usar esta función: newFunction("Hola")
}

function epprSignature(){
    console.log("@@@@@&&&&&&&&&&%%%%%&&&&&&&&@&&&%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&&@&%&&&&@&&&@@@@@@")
    console.log("&@@@@@@@@&&&&&&&&&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%%&&&&&&&@&&&&@&&&&@@@@@@")
    console.log("@@@@@@@@@@@@@&&&&&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&@@&&&&&&&@@@@@@@")
    console.log("@@@&@@@&&&@@@&@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@&&&&&@@@@@@@@")
    console.log("&&@@@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&@@@@@@@@@")
    console.log("@@@@@&@@&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&@@@@@@@@")
    console.log("&&&&&&&&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&@@@@@@@")
    console.log("@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%/ .*/#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&@@@@@")
    console.log("&&&&&%%%%%%%%%%%%%%%%%%%%%%%%#                  .,/(%%%%%%%%%%%%%%%%%%%%%%%%@@@@")
    console.log("&&&%%%%%%%%%%%%%%%%%%%%%%%%,                       ,%%%%%%%%%%%%%%%%%%%%%%%%%@@@")
    console.log("&&%%%%%%%%%%%%%%%%%%%%%%/             .,,,..     #%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@")
    console.log("&%%%%%%%%%%%%%%%%%%%%#.        .%%#(.         *#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@")
    console.log("%%%%%%%%%%%%%%%%%%%,        (%/       .,*/*,.  *#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%%%,(/*,%#    .##%(,       ./%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%%%* %%%%%  %%*                 .%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%%%#  %%%%%%.                      (%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%(              .          .%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%(       ,%#    (%  #%*      ,%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%.    .%#.     #%     .#%,    %%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%.      #%/   /%     /%#      %%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%#         * /%     ,        ,%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%#                         ,%%%%%%%%%%%%%%%%%%%%%%%%@")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%.                      #%%%%%%%%%%%%%%%%%%%%%%%%@@")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%(                 *%%%%%%%%%%%%%%%%%%%%%%%%%%@@@")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#/.     .,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&&&")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&&&")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&&&&&&&")
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&&&&&&&&")
}
