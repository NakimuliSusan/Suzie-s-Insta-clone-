import 'firebase/firestore'
import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp ({
  apiKey: "AIzaSyC-qwdrGXLkIzaOBSlNNfAnshGlXyQS3u4",
  authDomain: "suzie-insta-clone-9b1f2.firebaseapp.com",
  projectId: "suzie-insta-clone-9b1f2",
  storageBucket: "suzie-insta-clone-9b1f2.appspot.com",
  messagingSenderId: "503861101428",
  appId: "1:503861101428:web:50f5e264ff753effcd2221"
});

// Initialize Firebase
const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };

