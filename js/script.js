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

// verificato se l'utente ha inserito una mail accettata o meno, comunico relatico messaggio
if (valid) {
    alert('puoi accedere');
}
else {
    alert('fatti un giro');
}

//-----------------------------------------------------------------------