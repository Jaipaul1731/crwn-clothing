
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} 
    from '../../utils/firebase/firebase.js'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component.js';
const SignIn=()=>{
    

    const logGoogleUser= async ()=>{
        const {user} = await signInWithGooglePopup();
       const userDocRef=await createUserDocumentFromAuth(user)
        // console.log(response)
    }
    return(
        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>
                signWithInGooglepopup
            </button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;