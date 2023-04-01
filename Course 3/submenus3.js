//BARRA DE NAVEGACI&Oacute;N: enlaces y datos.
//gardar los datos en arrays:
var titulos=new Array();
var enlaces=new Array();
//Datos de los submen&uacute;s
titulos[0]=new Array(
          "Subsecci&oacute;n uno uno",
          "Subsecci&oacute;n uno dos",
          "Subsecci&oacute;n uno tres",
          "Subsecci&oacute;n uno cuatro");
enlaces[0]=new Array("#","#","#","#");
titulos[1]=new Array(
          "Subsecci&oacute;n dos uno",
          "Subsecci&oacute;n dos dos",
          "Subsecci&oacute;n dos tres",
          "Subsecci&oacute;n dos cuatro",
          "Subsecci&oacute;n dos cinco");
enlaces[1]=new Array("#","#","#","#","#");
titulos[2]=new Array(
          "Subsecci&oacute;n tres uno",
          "Subsecci&oacute;n tres dos",
          "Subsecci&oacute;n tres tres",
          "Subsecci&oacute;n tres cuatro",
          "Subsecci&oacute;n tres cinco");
enlaces[2]=new Array("#","#","#","#","#");	
titulos[3]=new Array(
          "Subsecci&oacute;n cuatro uno",
          "Subsecci&oacute;n cuatro dos",
          "Subsecci&oacute;n cuatro tres");
enlaces[3]=new Array("#","#","#");	
//arrays para guardar elementos de la lista y submen&uacute;s:
var menu=new Array()
var submenu=new Array()

window.onload = function() {
//BARRA DE NAVEGACI&Oacute;N: Crear desplegables:
for (i=0;i<titulos.length;i++) {
     //localizar elementos principales
     menu[i]=document.getElementById("seccion"+i);
     //crear elemento menu desplegable
     menu[i].innerHTML+="<div id='subseccion"+i+"'></div>"
     //localizar elemento menu desplegable
     submenu[i]=document.getElementById('subseccion'+i);
     //escribir menu desplegable
     for (j=0;j<titulos[i].length;j++) {
         submenu[i].innerHTML += "<p><a href='"+enlaces[i][j]+"'>"+titulos[i][j]+"</a></p>";
         }
     //estilo de los submen&uacute;s
     menu[i].style.position="relative";
     submenu[i].style.position="absolute";
     submenu[i].style.top="100%";
     submenu[i].style.left="0px";
     submenu[i].style.backgroundColor="#41338b";
     submenu[i].style.font="normal 0.8em arial";
     submenu[i].style.padding="0.2em 0.5em";
     submenu[i].style.display="none"
     }	
for (i=0;i<titulos.length;i++) {
		menu[i].onmouseover = ver;
		menu[i].onmouseout = ocultar;
		} 
}
//funci&oacute;n para ver los men&uacute;s desplegables.
function ver() {
         muestra=this.getElementsByTagName("div")[0];
         muestra.style.display="block"
         }
//funcion para ocultar los men&uacute;s desplegables.
function ocultar() {
         oculta=this.getElementsByTagName("div")[0];
         oculta.style.display="none"
         }