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

console.log(coches.size);

//alert(coches.get(3));
coches.set(3,"mini");
//alert(coches.get(3));
coches.set(5,"yamaha-1");
coches.set(6,"yamaha-2");
coches.set(7,"yamaha-3");
coches.set(8,"yamaha-4");
alert(coches.size);

let key1 = coches.keys();
let key2 = coches.values();
let parejas = coches.entries();
alert (key1.next().value);
alert (key1.next().value);

alert (key2.next().value);
alert (key2.next().value);

alert (parejas.next().value)
alert (parejas.next().value)