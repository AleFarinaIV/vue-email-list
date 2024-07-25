# Descrizione

Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

# Bonus

Far comparire gli indirizzi email solamente quando sono stati tutti generati.

# Scomposizione del problema

Devo impostare l'istanza Vue, così da utilizzare una funzione e un array vuoto nei data per stampare a schermo una lista di mail per l'utente

1 - inizializzo l'istanza Vue invocando la funzione createApp()
2 - utilizzo la proprietà 'data' degli options object per connettermi al DOM e scambiare dati
3- utilizzo il metodo created per far partire la funzione all'apertura del sito
4- definisco la funzione all'interno dei methods, inviando una richiesta all'endpoint
5 - utilizzo il metodo '.mount()' per connettere l'istanza al tag HTML con id "#app" e renderizzare l'app