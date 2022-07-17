var opcion = ["Piedra","Papel","Tijera"];
var cpu = "Papel"

function PiedraPapelTijera(jugador){
    //Se muestra que eligio:
    console.log("Jugador: "+ jugador + " vs " + "Cpu: " + cpu)
    //Mientras no sean iguales no hay empate
    if(jugador != cpu){
        //Jugador elige Piedra
        if(jugador == opcion[0]){
            //cpu elige papel sino significa que elige tijeras
            if(cpu == opcion[1]){
                console.log("Perdiste");
            }else{
                console.log("Ganaste");
            }
        //jugador elige papel
        }else if(jugador == opcion[1]){
            //cpu elige tijera sino significa que elige piedra
            if(cpu == opcion[2]){
                console.log("Perdiste");
            }else{
                console.log("Ganaste");
            }
        //jugador elige tijera
        }if(jugador == opcion[2]){
            //cpu elige piedra sino significa que elige papel
            if(cpu == opcion[0]){
                console.log("Perdiste");
            }else{
                console.log("Ganaste");
            }
        }
    }else{
        console.log("Empate")
    }

}