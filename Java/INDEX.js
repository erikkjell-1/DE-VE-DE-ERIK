import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-A3v7MnV44iFiGVMDoOz9sVz6uXCP3qk",
  authDomain: "christmas-muvies.firebaseapp.com",
  projectId: "christmas-muvies",
  storageBucket: "christmas-muvies.appspot.com",
  messagingSenderId: "324195823082",
  appId: "1:324195823082:web:9d090f0d3df8e3a3425693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const titleElem = document.querySelector('#movie');
const yearElem = document.querySelector('#release');
const ratingElem = document.querySelector('#score');
const categoryElem = document.querySelector('#categories');
const sendBtn = document.querySelector('#send');
const elemResult = document.querySelector('#database');

sendBtn.addEventListener('click', () => {
    const title = titleElem.value;
    const year = yearElem.value;
    const rating = ratingElem.value;
    const genre = categoryElem.value;

    saveToFirebase(title, year, genre, rating);
});

async function saveToFirebase(title, year, genre, rating) {
    try {
        await addDoc(collection(db, 'Movies'), { 
            Title: title,
            Released: year,
            Genre: genre,
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
        const elem = `         <card><p>
                               ${movie.data().Title}<br>
                               Released: ${movie.data().Released}<br>
                               Genre: ${movie.data().Genre}<br>
                               Rating: ${movie.data().Rating}
                               </p></card>`
        elemResult.insertAdjacentHTML('beforeend', elem)
    })
}

getAllMovies();

    



