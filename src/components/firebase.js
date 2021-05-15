import firebase from "firebase";

// Initialize Firebase
var firebaseApp = firebase.initializeApp({
     // Your web app's Firebase configuration
    apiKey: "AIzaSyAgfrueg7RwTi7DRgdwW6Parw2tXoHFYhE",
    authDomain: "contract-app-form.firebaseapp.com",
    databaseURL: "https://contract-app-form.fireaseio.com",
    projectId: "contract-app-form",
    storageBucket: "contract-app-form.appspot.com",
    messagingSenderId: "645546749531",
    appId: "1:645546749531:web:da69d4d6b9c1dd5a5e197e"
})

var db = firebase.firestore();

export { db };