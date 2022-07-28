console.log('JS ok');
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Genero un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// creo un prompt per l'utente che seleziona un valore tre 1 e 5
let userNumberChoise = parseInt(prompt('scegli un numero tra 1 e 5'));
// creo un prompt per l'ùtente per scegliere pari o dispari
let userChoise = prompt('scegli pari o dispari');
// crea un generatore casuale di numeri da 1 a 5
const cpuNumber = Math.floor(Math.random()*5)+1;
console.log(cpuNumber)
let somma = userNumberChoise + cpuNumber;

let filter = IsEven(somma);
console.log(filter);

console.log(somma);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function IsEven(somma)
{
    // se la somma ha modulo uguale a il return è falso
    if ( somma % 2 == 1  ){
        console.log('dispari')
        return false
    }
    else
    {
        console.log('pari')
        return true
    }
}
// se la scelta utente è uguale a pari ed il return è vero hai vinto o se la scelta utente è dispari e il return è diverso da true hai vinto
if((userChoise === 'pari' && filter === true)||(userChoise === 'dispari' && filter !== true)){
    alert('hai vinto')
}else{
    
    alert('hai perso')
}
