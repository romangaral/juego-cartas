
//-----------------------------------VARIABLES-------------------------
let jugador1 = new Jugador(pideNombres());
let jugador2 = new Jugador(pideNombres());
let ptoGlobales = 0;
let intentos = 1;

const valor = ['1', '2', '3', '4', '5', '6', '7', 'S', 'C', 'R'];
const palo = ['Or', 'Ba', 'Co', 'Es'];
const baraja = [];


//----------------------------------CLASES------------------------------

class Carta {
  constructor(valor, palo) {
    this.valor = valor;
    this.palo = palo;
    this.nombre = valor + palo;
  }

  getCarta() {
    return this.nombre;
  }

  setCarta(carta) {
    this.nombre = nombre;
  }
}


class Jugador {
  constructor(nombre) {
    this.nombre = nombre;
    this.intentos = 0;
    this.match = 0;
  }
}


//----------------------------------FUNCIONES---------------------------

function inicializa_baraja() {
  for (let i = 0; i < valor.length; i++) {
    for (let j = 0; j < palo.length; j++) {
      carta = new Carta(valor[i], palo[j]);
      baraja.push(carta);
    }
  }
}


function pideNombres() {

  do{
    Jugador.nombre = prompt("Nombre jugador");

    var nombreOK = true;
    //Comprobamos que el campo no este vacio o que solo sean espacios en blanco
    if(Jugador.nombre == null || Jugador.nombre.length == 0 || /^\s/.test(Jugador.nombre)){
      nombreOK = false;
      alert("Campo obligatorio para comenzar");
    }
  }while(nombreOK == false);

}


//Funcion en la que se introduce una carta y se comprueba si esta en el array.
function eligeCarta(Jugador) {
  carta = prompt(`${Jugador.nombre} elije una carta:`);

  if(baraja.includes(carta)){
    return carta;
  }else{
    alert("Introduce una carta valida");
  }

}


//Funcion que comprueba si las cartas son iguales y hace un match.
function jugadaEnCurso(apuesta1, apuesta2) {
  //introducimos en la variable rst la etiqueta que corresponde al selector que nombramos
  var rst = document.querySelector(".resultado");
  var apuesta1 = eligeCarta(nombre1);
  var apuesta2 = eligeCarta(nombre2);

  if (apuesta1 == apuesta2) {
    ptoGlobales = ptoGlobales + 1;
    alert("MATCH!!!! " + "Puntos totales: " + ptoGlobales);
    
    //Añadimos a la variable rst un texto hijo para mostrarlo en el html
    rst.appendChild(document.createTextNode("Intento " + intentos + ": MATCH POINT!!"));
    rst.appendChild(document.createElement("br"));

    intentos = intentos + 1;
  } else {
    alert("NO Match!!");

    rst.appendChild(document.createTextNode("Intento " + intentos + ": NO Match"));
    rst.appendChild(document.createElement("br"));

    intentos = intentos + 1;
  }
}


//Funcion que arranca el juego y limita los intentos a 10 veces.
//Aqui he creado una funcion flecha para variar la creacion de las funciones.
const comenzarPartida = () => {
  var fin = document.querySelector(".final");

  pideNombres();

  do {
    jugadaEnCurso();
  } while (intentos <= 10);

  switch(ptoGlobales){
    case 0:
    case 1:
    case 2:
    case 3:
      final = ("MATCH Points: " + ptoGlobales + ". El resultado final es de " + 
      ptoGlobales + " sobre 10, necesitáis mejorar...");
      break;
    case 4:
    case 5:
    case 6:
      final = ("MATCH Points: " + ptoGlobales + ". El resultado final es de " + 
      ptoGlobales + " sobre 10, vais por buen camino...");
      break;
    case 7:
    case 8:
    case 9:
      final = ("MATCH Points: " + ptoGlobales + ". El resultado final es de " + 
      ptoGlobales + " sobre 10, estais en la misma sintonia...");
      break;
    case 10:
      final = ("MATCH Points: " + ptoGlobales + ". El resultado final es de " + 
      ptoGlobales + " sobre 10, sois perfectos lo, lo boráis...");
      break;
  }

  fin.appendChild(document.createTextNode(final));
}

//Con la llamada a esta función comenzamos a jugar
comenzarPartida();