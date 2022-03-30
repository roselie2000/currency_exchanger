import {in_currency, out_currency} from './modules/elements.js'
import {calculation} from './modules/money.js'

in_currency.addEventListener("click", getOption1);
out_currency.addEventListener("click", getOption2);

function getOption1() {
    var from = in_currency.value;
    console.log(from);
}

function getOption2() {
    var to = out_currency.value;
    console.log(to);
    calculation();
}