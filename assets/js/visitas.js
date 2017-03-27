function vizualizacion(){
  var textoEntrada = document.getElementById("choro").value;
  var textoEditado= document.getElementById("modificado");
   textoEditado.innerHTML = textoEntrada;
  }

// PENDIENTE METER ESTAS FUNCIONES EN UNA GENERAL DE TAMAÑO:
  function tamanoGrande(){
    document.getElementById("modificado").style.fontSize = "xx-large";
  }

  function tamanoMediano(){
    document.getElementById("modificado").style.fontSize = "small";
    }
  function tamanoChico(){
           document.getElementById("modificado").style.fontSize = "xx-small";
      }

function colorTexto(){
  var color =prompt("¿Qué color deseas implementar?\n a)ciruela(#DDA0DD) b)verde hoja(#3CB371) c)negrito(#000000)\n << ingresa el no. que esta entre parentesis>> ");
  if (color == "#DDA0DD") {
   var ciruela = document.getElementById("modificado").style.color = "#DDA0DD";
   ciruela.innerHTML;
 }
 else if (color == "#3CB371") {
   var verde= document.getElementById("modificado").style.color = "#3CB371";
   verde.innerHTML;
   }
  else if (color == "#000000") {
    var negro =document.getElementById("modificado").style.color = "#000000";
    salmon.innerHTML;
  }
  else{
    alert("esta opción no esta disponible");
  }


 }

function colorFondo(){
  var color =prompt("¿Qué color deseas implementar?\n a)marron(#BC8F8F) b)Lavanda(#D8BFD8) c)mandarina dulce (#FFA07A)\n << ingresa el no. que esta entre parentesis>> ");

if (color == "#BC8F8F") {
  var marron = document.getElementById("modificado").style.background= "#BC8F8F";
   }
else if (color == "#D8BFD8") {
   var lavanda = document.getElementById("modificado").style.background=  "#D8BFD8";
   }
else if (color == "#FFA07A") {
   var mandarina = document.getElementById("modificado").style.background= "#FFA07A";
   }
  else{
    alert("esta opción no esta disponible");
  }

}

function centrar(){
 document.getElementById("modificado").style.textAlign = "center";
}
function alinearDerecha(){
 document.getElementById("modificado").style.textAlign = "right";
  }
function alinearIzquierda(){
 document.getElementById("modificado").style.textAlign = "left";
  }



function agregarComentario(){
 var nuevoElemento = document.createElement('p');
  var lista = document.getElementById('comentarios');
  var textoEditado = document.getElementById('modificado').innerHTML;
  nuevoElemento.innerHTML = textoEditado;
  lista.appendChild(nuevoElemento);
  
}
