/* Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come ispirandovi alla foto allegata. Se volete cambiare la grafica siete liberi di farlo.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile assieme al suo titolo e testo.
Milestone 2:
Aggiungere il "ciclo infinito" del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sotto forma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop  del meccanismo di autoplay.
Buon lavoro e buon divertimento! */


const data = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

//FUNZIONI
function changePic(target) {
  images[currentActiveIndex].classList.remove('active');
  thumbs[currentActiveIndex].classList.remove('active');

if (target === 'next') {
  currentActiveIndex++;

  if (currentActiveIndex === images.length) currentActiveIndex = 0;

} else if (target === 'prev') {
  currentActiveIndex--;

  if (currentActiveIndex < 0) currentActiveIndex = images.length - 1;
} else {
  currentActiveIndex = target;
}

images[currentActiveIndex].classList.add('active');
thumbs[currentActiveIndex].classList.add('active');
}


//Array con url immagini
const pictures = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
];

//Prendo gli elementi dal DOM
const gallery = document.querySelector('#carousel .gallery');
const thumbGallery = document.getElementById('thumbnails');

//Dato che le immagini di galley e thumbnails sono le stesse, unifico il processo
let imageElements = '';

 for (let i = 0; i < pictures.length; i++) {
  imageElements += `<img src="${pictures[i]}" alt="...">`;
 }

 //Stampo in pagina
 gallery.innerHTML = imageElements;
 thumbGallery.innerHTML = imageElements;

//Recupero immagini e thumbnails
const images = document.querySelectorAll('.gallery img');
const thumbs = document.querySelectorAll('#thumbnails img');

//Aggiungo la classe Active alla prima immagine/thumbnails
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');
thumbs[currentActiveIndex].classList.add('active');

//Recupero i bottoni 
const prev = document.getElementById('prev');
const next = document.getElementById('next');

//Aggancio evento al bottone next
next.addEventListener('click', function() {
  changePic('next');
});

//Aggancio evento al bottone prev
prev.addEventListener('click', function() {
  changePic('prev');
});
