// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo.


// definisco array di email accettate
// definisco variabile false che di volta in volta verrà verificata nel ciclo for
const listMail = ['pino@gmail.com', 'lino@gmail.com', 'gino@gmail.com', 'rino@gmail.com'];
let valid = false;

//chiedo all'utente la sua mail
let userMail = prompt('digita la tua mail');

// apro un ciclo for all'interno dell'array e verifico di volta in volta se la mail inserita
// dall'utente rientra tra quelle accettate
// se rientra, cambio la variabile in true
//altrimenti la lascio in false
for (let i = 0; i < listMail.length; i++) {
    if (userMail === listMail[i]) {
        valid = true;
    }
}

// verificato se l'utente ha inserito una mail accettata o meno, comunico relativo messaggio
if (valid) {
    alert('puoi accedere');
}
else {
    alert('fatti un giro');
}

//-----------------------------------------------------------------------


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// genero numero random da 1 a 6 per il giocatore 
// genero numero random da 1 a 6 per la macchina
let humanNumber = Math.floor(Math.random() * 6) +1;
console.log('il numero generato per l\'umanità è ' + humanNumber);

let skynetNumber = Math.floor(Math.random() * 6) +1;
console.log('il numero generato per Skynet è ' + skynetNumber);


// apro un ciclo for in cui se il numero generato per l'umanità è > rispetto
// a quello generato per Skynet decreto la sua vittoria, e viceversa
if (humanNumber === skynetNumber) {
    Math.floor(Math.random() * 6) +1;
    Math.floor(Math.random() * 6) +1;  
    if (humanNumber === skynetNumber) {
        alert('peace and love')    
    }
}  
else if (humanNumber > skynetNumber) {
    alert('l\'umanità è salva');       
}
else {
    alert('si salvi chi può');
}
