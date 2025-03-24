/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(stringa) {
    let vocali = ['a', 'e', 'i', 'o', 'u'];
    let contatore = 0;
    for (let i = 0; i < stringa.length; i++) {
        if (vocali.includes(stringa[i])) {
            contatore++;
        }
    }
    return contatore;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(contaVocali(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)