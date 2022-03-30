export function calculation() {
    var input = document.querySelector("input").value;
    let random = Math.random();
    let output = input * random;
    console.log(input, random, output);
    document.getElementById('output').innerHTML = `$. ${output.toFixed(2)}`;
}