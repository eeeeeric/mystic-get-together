import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyD-ZDutz248kz-PYKtJ7oEGQe6wNWVm6qU',
  authDomain: 'mystic-get-together.firebaseapp.com',
  databaseURL: 'https://mystic-get-together.firebaseio.com',
  projectId: 'mystic-get-together',
  storageBucket: 'mystic-get-together.appspot.com',
  messagingSenderId: '847755874279',
};

export const app = firebase.initializeApp(config);
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const isFirebaseInitialized = () => new Promise((resolve) => auth.onAuthStateChanged(resolve));

const db = firebase.firestore(app);
db.settings({
  timestampsInSnapshots: true,
});

export default db;
export const FIREBASE_FUNCTION_BASE_URL = 'https://us-central1-mystic-get-together.cloudfunctions.net';
