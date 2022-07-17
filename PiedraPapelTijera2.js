var opcion = ["Piedra","Papel","Tijera"];
var cpu = "Papel";

function Comprobar(jugador){
    //Se muestra que eligio:
    console.log("Jugador: "+ jugador + " vs " + "Cpu: " + cpu)
    //Si son iguales sera empate
    if(jugador == cpu){
        console.log("Empate")
    }else{
        //Jugador elige Piedra
        if(jugador == opcion[0]){
            Piedra();
        //jugador elige papel
        }else if(jugador == opcion[1]){
            Papel();
        //jugador elige tijera
        }if(jugador == opcion[2]){
            Tijera();
        } 
    }
}
function Piedra(){
    //cpu elige papel sino significa que elige tijeras
    if(cpu == opcion[1]){
        console.log("Perdiste");
    }else if (cpu == opcion[2]){
        console.log("Ganaste");
    }
}
function Papel(){
    //cpu elige tijera sino significa que elige piedra
    if(cpu == opcion[2]){
        console.log("Perdiste");
    }else if (cpu == opcion[0]){
        console.log("Ganaste");
    }
}
function Tijera(){
    //cpu elige piedra sino significa que elige papel
    if(cpu == opcion[0]){
        console.log("Perdiste");
    }else if (cpu == opcion[1]){
        console.log("Ganaste");
    }
}