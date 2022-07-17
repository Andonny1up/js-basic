var estudiantes = ["Maria","Jose","Del barrio","soy"];

function saludarEstudiantes(namae) {
    console.log(`Hola, ${namae}`);
}
//for
for (var i = 0; i < estudiantes.length; i++) {
     saludarEstudiantes(estudiantes[i]);
}

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
while (estudiantes.length > 0) {
    console.log(estudiantes)
    saludarEstudiantes(estudiantes[i]);
    estudiantes.shift();
}
do {
    saludarEstudiantes(estudiantes[i]);
    i++;
} while ( i < estudiantes.length);