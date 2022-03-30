var in_currency = document.getElementById('from-currency');
var out_currency = document.getElementById('to-currency');
in_currency.addEventListener("click", getOption1);
out_currency.addEventListener("click", getOption2);
 
function getOption1() {
    selectElement = document.querySelector('#from-currency');
    from = selectElement.value;
    console.log(from);
}

function getOption2() {
    selectElement = document.querySelector('#to-currency');
    to = selectElement.value;
    console.log(to);
    calculation();
}

function calculation() {
    var input = document.querySelector("input").value;
    console.log(input);
    let random = Math.random();
    let output = input * random;
    console.log(input, random, output);
    document.getElementById('output').innerHTML = output.toFixed(2);
}