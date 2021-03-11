import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCGll9X1aVRscydNY6TFLrU5VXo6PRXq9Q',
  authDomain: 'react-photo-gallery-f8bf6.firebaseapp.com',
  projectId: 'react-photo-gallery-f8bf6',
  storageBucket: 'react-photo-gallery-f8bf6.appspot.com',
  messagingSenderId: '278951629673',
  appId: '1:278951629673:web:30092cb13419f7a07ae3f8',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Initialize Storage service
const projectStorage = firebase.storage();

// Initialize Firestore database
const projectFirestore = firebase.firestore();

// Timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
