import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.js'

const SignIn=()=>{

    const logGoogleUser= async ()=>{
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
        // console.log(response)
    }
    return(
        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>
                signWithInGooglepopup
            </button>
        </div>
    )
}

export default SignIn;