import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZgjLCa9PqekH1ZDfOvrpXkWfJ6d7yo40",
    authDomain: "messenger-clone-react-78948.firebaseapp.com",
    projectId: "messenger-clone-react-78948",
    storageBucket: "messenger-clone-react-78948.appspot.com",
    messagingSenderId: "926654849427",
    appId: "1:926654849427:web:1f8096935ebd30b9500866",
    measurementId: "G-Y0WZ3G7QHZ"
});

const db = firebaseApp.firestore();

export default db;