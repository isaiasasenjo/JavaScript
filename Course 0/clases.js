
window.addEventListener("load",function() {
  // Map
/*
let matriculas = new Map([["ZA", "Zamora"],["SA","Santander"],["LE","Leon"]]);
let keyMatriculaMap = matriculas.keys();
let valueMatriculaMap = matriculas.values();
let entriesMatriculaMap = matriculas.entries();
for (let i=0;i<matriculas.size;i++){
  mensaje2.Map.keys = valueMatriculaMap;
}
*/


class Telefono {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
}

let miTelefono = new Telefono("Google","IV4");
let miTelefono1 = new Telefono("Hiundai","sha");
console.log("Marca: "+miTelefono.marca+ "  Modelo: "+miTelefono.modelo);
console.log("Marca: "+miTelefono1.marca+ "  Modelo: "+miTelefono1.modelo);


class Persona{
  constructor(nom,cognoms,email,tef){
    this._nom = nom;
    this._cognoms = cognoms;
    this._email = email;
    this._tef = tef;
  }
  get personNom(){
    return this._nom+"  "+this._cognoms+"  "+this._email+"  "+this._tef;
  }
  
  /**
   * @param {any} per
   * @param {any} persona
   */
  set per(persona){
    this._nom = nom;
  }
}

let persona = new Persona("edu","romo","eromo@xtec.cat","645231276");

//console.log(persona);
//console.log(persona.personNom);
//alert(persona._nom);
//persona.per("Jaume");
//alert(persona._nom);
columna1.innerHTML =  persona._nom;
columna2.innerHTML =  persona._cognoms;
columna3.innerHTML =  persona._email;
columna4.innerHTML =  persona._tef;

mensaje1.innerHTML = "Soc el : "+persona.personNom;
mensaje2.innerHTML = "Soc un estudiant de la Blockchain";
},true
)
