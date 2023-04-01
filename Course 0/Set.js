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