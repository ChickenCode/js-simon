// Creo una funzione che genera 5 numeri random
var numeriGeneratiCasualmente = []

function generateFiveRandomNumbers(arr) {
    
    do{
        var numeroRandom = Math.ceil(Math.random() * 100)

        if (!arr.includes(numeroRandom)) {
            arr.push(numeroRandom)
        }
    } while (arr.length < 5)
}

// Uso la funzione e genero 5 i numeri random, mettendoli in un array
generateFiveRandomNumbers(numeriGeneratiCasualmente)

// Creo un alert che mostra 5 i numeri
alert("Benvenuto! Ho una sfida per te.")
alert("Il computer Ha generato 5 numeri tra 1 e 100 in modo del tutto casuale.")
alert("Tu avrai tutto il tempo di memorizzarli. Dopo di che, quando sarai pronto partira un timer d'attesa di 30 secondi.")
alert("Allo scadere del tempo, avrai l'occasione di inserire 5 numeri corrispondenti a quelli che hai visto.")
alert("Pronto per i numeri?")
alert("Eccoli!" + " " + numeriGeneratiCasualmente + ". Quando cliccherai, partirà il timer.")


// Creo una funzione che mi chiede per 5 volte un numero, cerca se il numero è presenti tra quelli generati e se si li pusha nell'array dei numeri trovati, se no in quello dei numeri non trovati
var numeriIndovinati = []
var numeriSbagliati = []



function richiediCinqueNumeri(arr1, arr2, arr3) {

    for (i = 0; i < arr1.length; i++) {

        var richiediNumero = parseInt(prompt("Inserisci i numeri che ti ricordi uno per volta"))

        if (arr1.includes(richiediNumero)) {
            arr2.push(richiediNumero)
        }

        else {
            arr3.push(richiediNumero)
        }
    }

    // Annuncio il risultato (sempre all'interno della funzione)
    if (numeriIndovinati.length > 0) {
        alert("In totale ne hai indovinati " + numeriIndovinati.length + ". Ecco i Numeri che hai indovinato : " + numeriIndovinati + ".")
    }
    if (numeriSbagliati.length > 0) {
        alert("In totale ne hai sbagliati " + numeriSbagliati.length + ". ecco quali: " + numeriSbagliati + "." )
    }
}

    // Creo un timer di 30 secondi visibile per l'html
var secondi = 30
var clock = setInterval(function () {
    if (secondi === -1) {
        clearInterval(clock)
    }
    else {
        document.getElementById("orologio").innerHTML = secondi
        secondi--
    }
}, 1000)

    // Chiamo la funzione con un timeout di 30 sec
function chiamaRichiediCinqueNumeri() {
    richiediCinqueNumeri(numeriGeneratiCasualmente, numeriIndovinati, numeriSbagliati)
}

setTimeout(chiamaRichiediCinqueNumeri, 31500)


// Alternativa 








    





