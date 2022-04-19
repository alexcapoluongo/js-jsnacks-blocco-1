// jsnack1. L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

//chiedere all'utente due parole
let firstWord = prompt('inserisci la prima parola');
let secondWord = prompt('inserisci la seconda parola');

let firstWordLength = firstWord.length
let secondWordLength = secondWord.length  

// stampa prima la parola piu corta e poi la piu lunga

if (secondWordLength > firstWordLength) {
    console.log(firstWord, secondWord);
} else if (firstWordLength > secondWordLength) {
    console.log(secondWord, firstWord);
} else {
    console.log(`Le parole sono lunghe uguali, ${firstWord}, ${secondWord}`);
}