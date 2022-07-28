console.log('JS ok')
// VERIFICARE SE UNA PAROLA è PALINDROMA

// creo una variabile contenente una parola immessa dall'utente
const parola = prompt('inserisci parola')
// invoco la funzione
let parolaInversa = invertiParola(parola);
// condizione se la parola inserita è uguale alla parola inversa
if (parola === parolaInversa) {
    // stampa la parola è palindroma
    console.log('la parola è palindroma');
    // altrimenti stampa la parola non è palindroma
} else {
    console.log('la parola non è palindroma');
}

function invertiParola(parola) {
    // creo una variabile contenitore
    let parolaInversa = '';
// assengno all'indice il valore della length -1
    let i = parola.length - 1; 
    
    while (i >= 0) {
        parolaInversa += parola[i];
        i--;
    }

    return parolaInversa;
}
