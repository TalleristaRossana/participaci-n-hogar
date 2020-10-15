var sumMujeres = 0;
var sumHombres = 0;

function calculate(){
  if(document.getElementById('mujer1').checked){
    sumMujeres++;
  }
  else if(document.getElementById('hombre1').checked){
    sumHombres++;
  }

  var divobj = document.getElementById('total');
  divobj.value = sumMujeres;
}
