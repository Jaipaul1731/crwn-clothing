import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} 
from 'firebase/auth';
//import firestore  for database.
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDKuGGEai-3v90M2YGSqWWlZGy9voUHyMk",
    authDomain: "crwn-clothing-db-3176c.firebaseapp.com",
    projectId: "crwn-clothing-db-3176c",
    storageBucket: "crwn-clothing-db-3176c.appspot.com",
    messagingSenderId: "625685246720",
    appId: "1:625685246720:web:b026f232760d3e6392b9e5"
  };
  
  // Initialize Firebase
  const FirebaseApp = initializeApp(firebaseConfig);

  const googleProvider= new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt:"select_account",
  });

  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
  


//creating firebase instance for google popup;
  export const db=getFirestore();
  export const createUserDocumentFromAuth=async(userAuth,additionalInformation={})=>{
        const userDocRef=doc(db,'users',userAuth.uid);
        // console.log(userDocRef);
        const userSnapShot=await getDoc(userDocRef);
        // console.log(userSnapShot)
        // console.log(userSnapShot.exists())
        if(!userSnapShot.exists()){
            const {displayName,email}=userAuth;
            const createAt=new Date();
            try {
                await setDoc(userDocRef,{displayName,email,createAt,...additionalInformation})
            } catch (error) {
                console.log("error create at user",error.message);
            }
        }
        return userDocRef;
       
  };

  export const createAuthUserWithEmailAndPassword=async (email,password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
  }
  export const SignInAuthUserWithEmailAndPassword=async (email,password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password)
  }


  export const signOutUser =async()=>await signOut(auth); 
  export const onAuthStateChangedListener =(callback)=>onAuthStateChanged(auth,callback)
