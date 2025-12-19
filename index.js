let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btn0 = document.getElementById('btn0');
let btnSum = document.getElementById('btnsumar');
let btnRes = document.getElementById('btnrestar');
let btnMul = document.getElementById('btnmulti');
let btnDiv = document.getElementById('btndividir');
let btnresultado = document.getElementById('btnresultado');
let btnClr = document.getElementById('btnborrartodo');
let bntSemiClr = document.getElementById('btnclear');
let btnPunto = document.getElementById('btnpunto');
let pantalla = document.getElementById('pantalla');
let parentesisApertura = document.getElementById('parentesisApertura');
let parentesisCierre = document.getElementById('parentesisCierre');

let suma = "";


btn1.addEventListener('click', function() {
    pantalla.textContent += '1';
    suma += "1";
});

btn2.addEventListener('click', function() {
    pantalla.textContent += '2';
    suma += "2";
});     

btn3.addEventListener('click', function() {
    pantalla.textContent += '3';
    suma += "3"     ;
});

btn4.addEventListener('click', function() {
    pantalla.textContent += '4';
    suma += "4";
});

btn5.addEventListener('click', function() {
    pantalla.textContent += '5';
    suma += "5";
});

btn6.addEventListener('click', function() {
    pantalla.textContent += '6';
    suma += "6";
});

btn7.addEventListener('click', function() {
    pantalla.textContent += '7';
    suma += "7";
});

btn8.addEventListener('click', function() {
    pantalla.textContent += '8';
    suma += "8";
});

btn9.addEventListener('click', function() {
    pantalla.textContent += '9';
    suma += "9";
});

btn0.addEventListener('click', function() {
    pantalla.textContent += '0';
    suma += "0";
});

btnClr.addEventListener('click', function() {
    pantalla.textContent = '';
    suma = "";
});

btnSum.addEventListener('click', function() {
    pantalla.textContent += '+';
    suma += "+";
});
btnRes.addEventListener('click', function() {
    pantalla.textContent += '-';
    suma += "-";
});
btnMul.addEventListener('click', function() {
    pantalla.textContent += '*';
    suma += "*";
});
btnDiv.addEventListener('click', function() {
    pantalla.textContent += '/';
    suma += "/";
});

btnPunto.addEventListener('click', function() {
    pantalla.textContent += '.';
    suma += ".";
});

bntSemiClr.addEventListener('click', function() {
    pantalla.textContent = pantalla.textContent.slice(0, -1);
    suma = suma.slice(0, -1);
});

parentesisApertura.addEventListener('click', function() {
    pantalla.textContent += '(';
    suma += "(";
});

parentesisCierre.addEventListener('click', function() {
    pantalla.textContent += ')';
    suma += ")";
});


btnresultado.addEventListener('click', function() {
    pantalla.textContent = eval(suma);
    suma = pantalla.textContent;
});


window.onerror = function (e) {
        window.alert("Error en la operacion");
  };

