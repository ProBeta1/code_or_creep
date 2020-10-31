import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhsKxfVij9SZcSQE6QZpFNAZ-usLSLKms",
    authDomain: "codecreep-b1627.firebaseapp.com",
    databaseURL: "https://codecreep-b1627.firebaseio.com",
    projectId: "codecreep-b1627",
    storageBucket: "codecreep-b1627.appspot.com",
    messagingSenderId: "310270320888",
    appId: "1:310270320888:web:625e6c3fcbfa609c6e5b0d"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
