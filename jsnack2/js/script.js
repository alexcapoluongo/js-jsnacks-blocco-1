// jsnack2. 
// Crea un array vuoto.
let dispari = [];
// Chiedi per 6 volte all'utente di inserire un numero,
for (let i= 0; i < 6; i++) {
    let number = Number(prompt('inserisci un numero'));
    console.log(number);
    // se è dispari inseriscilo nell'array.
    if (number % 2 === 1) {
        dispari.push(number);
    } else {
    }
} 
console.log(dispari);
