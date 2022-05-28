/*Calificaciones
Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%
Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrara un mensaje de error y continuará con otro
alumno)
*/
let practica: number;
let teorica: number;
let problemas: number;
let final: number;
let nombreA = (promp ("ingrese el nombre del alumno")); 

while (nombreA !== ""){ 
  practica =  Number(promp ("Ingrese nota parte práctica"));
  teorica = Number(promp ("Ingrese nota parte teórica"));
  problemas = Number(promp ("Ingrese nota parte problemas")); 

  if((practica <= 10 && practica >=0) && (teorica <= 10 && teorica >= 0) && (problemas <= 10 && problemas >=0)); {
    final= practica * 0.1 + teorica * 0.4 + problemas * 0.5;
console.log("La nota del alumno " + nombreA + " es " + final);

       }else {
console.log("Las notas ingresadas de alumno" + nombreA + "son incorrectas");
  } 
nombreA = (promp ("Ingrese el nombre de otro alumno (vacio para cortar)");
}

/*
let nombreAlumno = prompt("Ingrese el nombre del alumno (vacío para cortar)");
let notaPractica, notaProblemas, notaTeorica, notaFinal : number;
while (nombreAlumno !== "") {
  notaPractica = Number(prompt("Nota práctica: " ));
  notaProblemas = Number(prompt("Nota problemas: " ));
  notaTeorica = Number(prompt("Nota teórica: " ));
  if ((notaPractica <= 10 && notaPractica >= 0) && (notaProblemas <= 10 && notaProblemas >= 0) && 
    (notaTeorica <= 10 && notaTeorica >= 0) {
    notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4 ;
    console.log ("La nota final de ", nombreAlumno, " es: ", notaFinal );
	} else {
    console.log ("Error en las notas ingresadas del alumno " + nombreAlumno);
  }
  nombreAlumno = prompt("Ingrese el nombre del alumno (vacío para cortar)");
}*/
