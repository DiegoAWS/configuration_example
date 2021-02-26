import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyA9wLNowMB6YIFfl1y37KZV5boIt6xJYP4",
  authDomain: "prueba-diego-escobar.firebaseapp.com",
  projectId: "prueba-diego-escobar",
  storageBucket: "prueba-diego-escobar.appspot.com",
  messagingSenderId: "278742390790",
  appId: "1:278742390790:web:22aa70371114fd676d8b87"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

const databaseRef = firebase.database().ref('/config');
const configStorage = databaseRef.child("config")

export {
  configStorage,
  storage, firebase as default
}