// jsnack3. Calcola la somma e la media dei primi 10 numeri.

let somma = 0;

for (let i = 1; i <= 10; i++) {
    console.log(i);
    somma = somma + i;
}

let media = somma / 10;

console.log(`la somma di tutti i numeri è ${somma}`);
console.log(`la media di tutti i numeri è ${media}`);