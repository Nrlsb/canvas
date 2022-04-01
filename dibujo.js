var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l =  0;
  var xi, yf;
  var colorcito = "blue";
  var espacio = ancho / lineas;


  for(l = 0; l < lineas; l++)
  {
    xi = espacio * l;
    yf = espacio * (l + 1);
    dibujarLinea(colorcito, xi, 0, 300, yf);
    console.log("linea " + l);

  }

  dibujarLinea(colorcito, 1, 1, 299, 1);
  dibujarLinea(colorcito, 299, 1, 299, 299);
}
