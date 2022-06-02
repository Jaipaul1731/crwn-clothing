import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
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

  const provider= new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt:"select_account",
  });

  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);
  export const db=getFirestore();
  export const createUserDocumentFromAuth=async(userAuth)=>{
        const userDocRef=doc(db,'users',userAuth.uid);
        // console.log(userDocRef);
        const userSnapShot=await getDoc(userDocRef);
        // console.log(userSnapShot)
        // console.log(userSnapShot.exists())
        if(!userSnapShot.exists()){
            const {displayName,email}=userAuth;
            const createAt=new Date();
            try {
                await setDoc(userDocRef,{displayName,email,createAt})
            } catch (error) {
                console.log("error create at user",error.message);
            }
        }
        return userDocRef;
       
  };
