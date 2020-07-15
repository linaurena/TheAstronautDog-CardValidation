//primero haremos una funcion para capturar lo que entre en el input
function capturarNumero() {
    const $btn = document.getElementById("btn");

    //esperamos que nuestro button en el html haga alguna accion, en este caso un click por parte del usuario
    $btn.addEventListener("click", () => {
      //capturamos el valor del input
      let $digito = document.getElementById("numTarjeta").value;
      //capturar el valor del input, lo separamos en un array con split, le damos la vuelta al array, y lo unimos
      //nuevamente
      $digito = $digito.split("").reverse().join("");
      // llamamos la funcion calcular y pasamos como parametros $digito
      calcular($digito);
    });
  }
  //spread operator (...numeros) le decimos a la funcion que va a recibir 1 o mas numeros
  function calcular(...numeros) {
    let impares = Array.from(numeros[0]);
    let pares = Array.from(numeros[0]);

    let sumarimpar = 0;
    //variable pos es la posicion del array que foreach nos entrega
    impares.forEach((impar, pos) => {
      if (pos % 2 == 1) {
        //impar
        let multImpar = parseInt(impar) * 2;
        if (multImpar >= 10) {
          multImpar
            .toString()
            .split("")
            .forEach((num) => (sumarimpar += parseInt(num)));
        } else {
          sumarimpar += multImpar;
        }
      }
    });

    let sumarpar = 0;
    pares.forEach((par, pos) => {
      if (pos % 2 == 0) {
        //par
        sumarpar += parseInt(par);
        /*sumarpar = sumarpar + parseInt(par);´*/
      }
    });

    let resulSuma = sumarimpar + sumarpar;
    let resiNum = resulSuma % 10;
    let $msj = document.querySelector(".mensajeLuhn"); // (.) por que es una clase como en css .
    let mensajes = "";

    if (resiNum == 0) {
      mensajes = `Tarjeta Valida`;
      $msj.innerHTML = `<p class="valido">${mensajes} 😊 </p>`;
      $msj.style.visibility = "visible";
      // console.log(mensajes)

      //a los 5 segundos ocultamos el mensaje de msj
      setTimeout(() => {
        $msj.style.visibility = "hidden";
      }, 8000);
    } else {
      mensajes = `Tarjeta Invalida`;
      $msj.innerHTML = `<p class="invalido">${mensajes} 😝 </p>`;
      $msj.style.visibility = "visible";
      // console.log(mensajes)

      //a los 8 segundos ocultamos el mensaje de msj
      setTimeout(() => {
        $msj.style.visibility = "hidden";
      }, 8000);
    }
  }
  capturarNumero();
