// jsnack4. Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

// Chiedi un numero di 4 cifre all'utente
let userNumber =prompt(`inserisci un numero di 4 cifre`);
console.log(userNumber);

if (userNumber.length !== 4 || isNan(userNumber)) {
    alert('scrivi un numero di 4 cifre');
} else {
    somma = 0
    for (let i = 0; i < 4; i++) {
        //far leggere le 4 cifre
        console.log(userNumber[i]);
        // trasformare le 4 cifre in numeri
        let number = parseInt(userNumber[i]);
        // sommare le 4 cifre
        somma = somma + number;
    }

    console.log(somma);

    //stampa
    document.getElementById('numero-inserito').innerHTML = `Il numero che hai inserito è ${userNumber}`;
    document.getElementById('numero-sommato').innerHTML = `Le cifre del tuo numero sommate risultano ${somma}`;

}


