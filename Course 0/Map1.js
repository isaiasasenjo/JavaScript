let codigosPostales = new Map([[23,"Zamora"],[56,"Santander"],[76,"Leon"]]);
let matriculas = new Map([["ZA", "Zamora"],["SA","Santander"],["LE","Leon"]]);

let keyMatriculaMap = matriculas.keys();
let valueMatriculaMap = matriculas.values();
let entriesMatriculaMap = matriculas.entries();


document.writeln("Estoy dentro del  fichero Map1.js");
for (let i=0;i<matriculas.size;i++){
    document.writeln("<br>");
    document.writeln(keyMatriculaMap.next().value);
    document.write("--");
    document.writeln(valueMatriculaMap.next().value);
    document.write("<br>");
    document.writeln(entriesMatriculaMap.next().value);
    document.write("<br>");    
}

document.writeln("Ya salgo del fichero Map1.js");
/*
let codigosPostales = new Map([[23,"Zamora"],[56,"Santander"],[76,"Leon"]]);
let matriculas = new Map([["ZA", "Zamora"],["SA","Santander"],["LE","Leon"]]);

console.log(codigosPostales.size);

console.log(codigosPostales.get(23));
console.log(codigosPostales.get(76));
codigosPostales.set(76,"Palencia");
console.log(codigosPostales.get(76));
codigosPostales.clear();
console.log(codigosPostales.size);

console.log("Empieza la iteraccion");
let itclaves=matriculas.keys();
let itvalores=matriculas.values();
let itpares=matriculas.entries();

console.log("La primera clave es: "+itclaves.next().value);
console.log("El primer valor es: "+itvalores.next().value);
console.log("El primer par es:"+itpares.next().value);
*/