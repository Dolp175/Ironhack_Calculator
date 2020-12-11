function init(){

    var resultado = document.getElementById("resultado");
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var suma = document.getElementById('suma');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var resta = document.getElementById('resta');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var multiplicacion = document.getElementById("multiplicacion");
    var reset = document.getElementById('reset');
    var cero = document.getElementById('cero');
    var igual = document.getElementById('igual');
    var division = document.getElementById('division');

    var a;
    var b;
    var c;

    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function(e){
        resetfun();
    }
    suma.onclick = function(e){
        a = resultado.textContent;
        c = "+";
        clean()
    }
    resta.onclick = function(e){
        a = resultado.textContent;
        c = "-";
        clean()
    }
    multiplicacion.onclick = function(e){
        a = resultado.textContent;
        c = "*";
        clean()
    }
    division.onclick = function(e){
        a = resultado.textContent;
        c = "/";
        clean()
    }
    igual.onclick = function(e){
        b = resultado.textContent;
        solve()
    }

    function clean(){
        resultado.textContent = "";
    }

    function resetfun(){
        resultado.textContent = "";
        a = 0;
        b = 0;
        c = "";
    }

    function solve(){
        var res = 0;
        switch(c){
            case "+":
                res = parseFloat(a) + parseFloat(b);
                break;
            
            case "-":
                res = parseFloat(a) - parseFloat(b);
                break;

            case "*":
                res = parseFloat(a) * parseFloat(b);
                break;
            
            case "/":
                res = parseFloat(a) / parseFloat(b);
                break;
        }
        resetfun();
        resultado.textContent = res;

    }
  
}