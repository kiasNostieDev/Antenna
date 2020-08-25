
import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyD9TwC78Vi-ZyAFXnmkRzxyilAXhO8r6Uc",
    authDomain: "antenna-8225f.firebaseapp.com",
    databaseURL: "https://antenna-8225f.firebaseio.com",
    projectId: "antenna-8225f",
    storageBucket: "antenna-8225f.appspot.com",
    messagingSenderId: "776278968733",
    appId: "1:776278968733:web:5b215d8a97aded0f4cc774",
    measurementId: "G-63M4RRKT5G"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()



export {
    storage, firebase as fb
}