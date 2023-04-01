function f1(){ 
let valores = [200, 300, 400];
for (let valor of valores) {
  console.log("precio sin IVA: " + valor);
  console.log("precio con iva: " + valor * 1.21);
}
}



let cadena = "El otro dia";
for (let letra of cadena) {
  console.log(letra);
}

function f2(){
let matriculas = new Map([
  ["B", "Barcelona"],
  ["Gi", "Girona"],
  ["T", "Tarragona"],
]);

for (let matricula of matriculas) {
  console.log(matricula);
}

console.log(matriculas);
let keyMatriculaMap = matriculas.keys();
let valueMatriculaMap = matriculas.values();

console.log(keyMatriculaMap.next().key);

console.log(valueMatriculaMap.next().value);
console.log("fin del las matrículas del map")
}
/*

let keyMatriculaMap = matriculas.keys();
let valueMatriculaMap = matriculas.values();
let entriesMatriculaMap = matriculas.entries();

for (let i=0;i<matriculas.size;i++){
  document.writeln(keyMatriculaMap.next().value);
  document.write("<br>");
  document.writeln(valueMatriculaMap.next().value);
  document.write("<br>");
  document.writeln(entriesMatriculaMap.next().value);
  document.write("<br>");    
}
*/

//console.log(matriculas[0].value);
/*
for (let [matricula, provincia] of matriculas) {
  console.log("Matricula: " + matricula + " Provincia: " + provincia);
}
*/

let tiradasDeDado = new Set([1, 3, 2, 5, 4, 6, 2, 3, 4, 5, 6]);
for (let tirada of tiradasDeDado) {
  console.log(tirada);
}

