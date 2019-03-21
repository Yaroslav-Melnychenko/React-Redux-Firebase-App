import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "planning-app-cecff.firebaseapp.com",
  databaseURL: "https://planning-app-cecff.firebaseio.com",
  projectId: "planning-app-cecff",
  storageBucket: "planning-app-cecff.appspot.com",
  messagingSenderId: "714438655888"
};
firebase.initializeApp(config);
// firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;