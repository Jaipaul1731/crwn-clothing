import { initializeApp } from "firebase/app";
// this is for authentication
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// this is for data base
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCEfhSxz1-ZO6BKdJuB4Bzw-SFA9ii-tdM",
  authDomain: "crwn-clothing-db-a6988.firebaseapp.com",
  projectId: "crwn-clothing-db-a6988",
  storageBucket: "crwn-clothing-db-a6988.firebasestorage.app",
  messagingSenderId: "914552295952",
  appId: "1:914552295952:web:8c6a39a5e8495d386b3095",
  measurementId: "G-5DE77TEMEX",
};
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

//creating a database
export const db = getFirestore();
//for authentication
export const auth = getAuth();
export const signinwithGooglePopup = () => signInWithPopup(auth, provider);
//user document for firestore db
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "user", userAuth.uid); //doc take three things(database,collection-name,unique identifier)
  // if  user exist give the value
  const userSnapshot = getDoc(userDocRef);

  //user doesn't exist
  if (!(await userSnapshot).exists()) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        creatAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error created at setuser", error.message);
    }
  }

  return userDocRef;
};

//sign up with email and password
export const createAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

//sign in with email and password
export const signInAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

//sign out user
export const signOutUser = async () => await signOut(auth);

//listen to auth state change
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
