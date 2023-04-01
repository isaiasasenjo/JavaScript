function  miFuncion(){
    return (4+900);
}

var miFuncionFlecha1 = (x,y) => (x*y+4*3);

alert(miFuncionFlecha1(2,3));


var miFuncionFlecha2 = () => {console.log("Sortida de la funció Fletxa 2 per la consola")}

miFuncionFlecha2();

var miFuncionFlecha3 = (array) => {
    for (let i=0;i<array.length;i++){
        console.log(array[i]+'  ');
    }
    console.log(" el array es de longitud: "+array.length);
}
miFuncionFlecha3([1,2,3]);

var miFuncionFlecha4 = () =>{
    return(
        console.log("estic dins del return de miFuncionflecha4")
    )
}
miFuncionFlecha4();


var miFuncionFlecha5 = (array1,array2) =>{
    return(
        console.log(array1.concat(array2)),
        alert(array1.concat(array2))
    )
}
miFuncionFlecha5([0,3],[4,6,7,8]);


let miFuncionFlecha6 = (x)=> {
    return(
        x= 100*x,
        alert(x)
    )
 
}

miFuncionFlecha6(5);

var miFuncionFlecha7 = (r) => {
    const PI =3.1416;
    return(
        console.log("Longitud de la circunferencia= "+2*PI*r),
        console.log("Superficie = "+PI*(r**2))
    )
}
 miFuncionFlecha7(4);
