const iconsPage = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

/* Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.
Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente. */

/* creiamo una variabile per poter stampare gli elementi in pagina */

const containerDiv = document.querySelector(".container");

/* creiamo una variabile vota per far contenere gli elementi */

let elementCreation = "";

/* andiamo a creare un ciclo per poter stampare in pagina tutti gli elementi desiderati */

iconsPage.forEach((element) => {

	/* andiamo a creare la struttura di ogni elemento */

	/* aggiungiamo le varie key per poter stampare ogni elemento diverso */

	/* aggiungiamo anche la classe del colore, che poi andrà cambiata dal css in base all'elemento che ha la classe di un determinato colore */

	elementCreation = `
	<div class="containerIcons ${element.type}">

		<div class="icon">

			<i class="${element.family} ${element.prefix}${element.name} ${element.color}"></i>

			<div class="iconDescription">

				<span>${element.name}</span>

			</div>

		</div>

	</div>
	`

	containerDiv.innerHTML += elementCreation;

});

/* andiamo a dare la funzione del click al menu per poter filtrare le icone in base al tipo selezionato dall'utente */

let menuIcons = document.getElementById("typesIcons");

let animals = document.getElementsByClassName("animal");

let vegetables = document.getElementsByClassName("vegetable");

let users = document.getElementsByClassName("user");


document.querySelector('select').addEventListener("change",

	function(){

		console.log(this.value);

		containerDiv.innerHTML = this.value;

	}
);



