function calculate() {
  var sumMujeres = 0;
  var sumHombres = 0;
  var buttonM, elemM, buttonH, elemH;
  for (i=1; i<5; i++) {
    buttonM = 'mujer'+i;
    elemM = document.getElementById(buttonM);
    buttonH = 'hombre' + i;
    elemH = document.getElementById(buttonH);
    if (elemM.checked == true) { sumMujeres += Number(elemM.value); }
    if (elemH.checked == true) { sumHombres += Number(elemH.value); }
  }
  console.log('Labores realizadas por mujeres: ' + sumMujeres + ', Labores realizadas por hombres: ' + sumHombres);
}
