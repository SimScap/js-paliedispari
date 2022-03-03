let utente = prompt('scegli pari o dispari');

while ( utente != 'pari' && utente != 'dispari' ){
    utente = prompt('scegli pari o dispari');
}
let utenteNumero = parseInt(prompt('inserisci un numero da 1 a 5'));
let computer = computerRandom();

function computerRandom(){
   return  Math.floor(Math.random() * 5);
}

let somma = utenteNumero + computer;

console.log(somma)


function verifica(numero){
    if (numero % 2 === 0){
        return true
    }
    return false
}

if ((verifica(somma)) && (utente === 'pari') || (!verifica(somma)) && (utente === 'dispari')){
    console.log('hai vinto');
} else {
    console.log('hai perso');
}





