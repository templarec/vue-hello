/*
Descrizione
Stampare a schermo un messaggio all’interno di un h1,
utilizzando i data.
Bonus
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/
//istanza oggetto vue
var app = new Vue(
	{
		el: "#root",
		data: {
			messaggio: "Primo messaggio con vue.js"
		}
	}
);