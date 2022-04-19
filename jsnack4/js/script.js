// jsnack4. Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

// Chiedi un numero di 4 cifre all'utente
let userNumber = (prompt('inserisci un numero di 4 cifre'));
console.log(userNumber);

let number1 = parseInt(userNumber[0]);
let number2 = parseInt(userNumber[1]);
let number3 = parseInt(userNumber[2]);
let number4 = parseInt(userNumber[3]);

let somma = number1 + number2 + number3 + number4;

document.getElementById('numero-inserito').innerHTML = `Il numero che hai inserito è ${userNumber}`;
document.getElementById('numero-sommato').innerHTML = `Le cifre del tuo numero sommate risultano ${somma}`;




