import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-A3v7MnV44iFiGVMDoOz9sVz6uXCP3qk",
  authDomain: "christmas-muvies.firebaseapp.com",
  projectId: "christmas-muvies",
  storageBucket: "christmas-muvies.appspot.com",
  messagingSenderId: "324195823082",
  appId: "1:324195823082:web:9d090f0d3df8e3a3425693"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const titleElem = document.querySelector('#movie');
const yearElem = document.querySelector('#release');
const ratingElem = document.querySelector('#score');
const streamElem = document.querySelector('#streaming');
const categoryElem = document.querySelector('#categories');
const sendBtn = document.querySelector('#send');
const elemResult = document.querySelector('#database');

sendBtn.addEventListener('click', () => {
    const title = titleElem.value;
    const year = yearElem.value;
    const rating = ratingElem.value;
    const genre = categoryElem.value;
    const stream = streamElem.value;

    saveToFirebase(title, year, genre, stream, rating);
});

async function saveToFirebase(title, year, genre, stream, rating) {
    try {
        await addDoc(collection(db, 'Movies'), { 
            Title: title,
            Released: year,
            Genre: genre,
            Service: stream,
            Rating: rating,
            
        });
    } catch (error) {
        console.log('ERROR:', error);
    }
}

async function getAllMovies(){
    const movies = await getDocs(collection(db, 'Movies'));

    movies.forEach((movie) => {
        console.log(movie)
        const elem = `         <article data-movie-id="${movie.id}"><p>
                               ${movie.data().Title}<br>
                               Released: ${movie.data().Released}<br>
                               Genre: ${movie.data().Genre}<br>
                               Service: ${movie.data().Service}<br>
                               Rating: ${movie.data().Rating}</p>
                               </article>`
        elemResult.insertAdjacentHTML('beforeend', elem)
    })
    removeFunction();
}

getAllMovies();

async function removeMovie(movieId) {
    try {
        await deleteDoc(doc(db, "Movies", movieId));
    } catch (error) {
        console.log('ERROR:', error);
    }
}

function removeFunction() {
    const movieElems = document.querySelectorAll('article');

    movieElems.forEach((movieElem) => {
        movieElem.addEventListener('click', (event) => {
            const movieId = event.currentTarget.getAttribute('data-movie-id');
            removeMovie(movieId);
        });
    })
}
