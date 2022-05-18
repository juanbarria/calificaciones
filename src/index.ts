let nombreAlumno: string = String(prompt("Ingrese nombre del Alumno"));
let notaFinal: number = 0;
while (nombreAlumno !== "") {
  console.log(nombreAlumno);
  let notaPractica: number = Number(prompt("Ingrese nota parte Practica"));
  let notaProblemas: number = Number(prompt("Ingrese nota parte Problemas"));
  let notaTeorica: number = Number(prompt("Ingrese nota parte Teorica"));
  if (
    notaPractica <= 10 &&
    notaProblemas <= 10 &&
    notaTeorica <= 10 &&
    notaPractica > 0 &&
    notaProblemas > 0 &&
    notaTeorica > 0
  ) {
    notaFinal = Number(
      notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4
    );
    console.log("La Nota Final del alumno es: ", notaFinal);
  } else {
    console.log("carga incorrecta");
  }
  nombreAlumno = String(prompt("Ingrese nombre del Alumno"));
}
