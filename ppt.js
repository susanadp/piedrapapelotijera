
let jugador;
let pc;
let contador_jug = 0;
let contador_pc = 0;

function Numero_Aleatorio() {
    return Math.ceil(Math.random()*3)
}

for (var i=0; i<3; i++){

jugador = prompt('Juego de PIEDRA, PAPEL Y TIJERA.                                                    Elija: 1- Piedra, 2- Papel, 3- Tijera')
pc = Numero_Aleatorio();
alert('Tu elegiste: ' + eleccion(jugador))
alert('PC eligio: ' + eleccion(pc))

if(jugador == pc){
    alert('EMPATE')
    contador_jug = contador_jug + 1 
    contador_pc = contador_pc + 1
}else if(jugador==1 && pc==3){
    alert('GANASTE')
    contador_jug = contador_jug + 1
}else if(jugador==2 && pc==1){
    alert('GANASTE')
    contador_jug = contador_jug + 1
}else if(jugador==3 && pc==2){
    alert('GANASTE')
    contador_jug = contador_jug + 1
}else{
    alert('PERDISTE')
    contador_pc = contador_pc + 1
}

function eleccion(jugada){
    let resultado = ''
    if (jugada==1){
        resultado = 'PIEDRA'
    }else if (jugada==2){
        resultado = 'PAPEL'
    }else if (jugada==3){
        resultado = 'TIJERA'
    }else {
        resultado = 'TU ELECCION ES INCORRECTA'
    }
    return resultado
}
}

if(contador_jug > contador_pc){
     alert('Felicitaciones, eres el GANADOR')
}else if(contador_jug == contador_pc){
     alert('Hubo un EMPATE')
}else{
     alert('Perdiste, el ganador es la PC')
}


