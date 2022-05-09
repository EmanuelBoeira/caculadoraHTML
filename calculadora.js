function clear() 
{
    document.getElementById("output").innerHTML = 0;
}

function show(value) 
{
    document.getElementById("output").innerHTML += value;
}

function solve() 
{
    let equaçao = document.getElementById("output").innerHTML;
    let soluçao = eval(equaçao);
    document.getElementById('output').innerHTML = soluçao;
}

function quadrado()
{
    let x = document.getElementById("output").innerHTML;
    let num = eval(x);
    num *= num;
    document.getElementById("output").innerHTML = num;
}
