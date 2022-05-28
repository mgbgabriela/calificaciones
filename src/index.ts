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
let nombreA = (prompt ("ingrese el nombre del alumno")); 

while (nombreA !== ""){ 
  practica =  Number(prompt ("Ingrese nota parte práctica"));
  teorica = Number(prompt ("Ingrese nota parte teórica"));
  problemas = Number(prompt ("Ingrese nota parte problemas")); 

  if((practica <= 10 && practica >=0) && (teorica <= 10 && teorica >= 0) && (problemas <= 10 && problemas >=0)) {
    final= practica * 0.1 + teorica * 0.4 + problemas * 0.5;
console.log("La nota del alumno " + nombreA + " es " + final);

       }else {
console.log("Las notas ingresadas de alumno " + nombreA + " son incorrectas");
  } 
nombreA = (prompt ("Ingrese el nombre de otro alumno ")
}

