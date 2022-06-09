import { useState} from "react";
import {
  signInWithGooglePopup,
  SignInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.style.scss';
import Button from "../button/button.component";

// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const defaulFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaulFormFields);
  const {  email, password } = formFields;
  //succes message notification:
 

 
  
  const resetFormField = () => [setFormFields(defaulFormFields)];



  const signInWithGoogle= async ()=>{
   await signInWithGooglePopup();

}


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
     await SignInAuthUserWithEmailAndPassword(email,password);
     
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break;
          case 'auth/user-not-found':
            alert('no user is associated with this email')
            break;
      
        default:
          console.log(error);
      }
    }
  };



  const handlechange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };



  return (
    <div className="sign-up-container">
      <h2 >Already have an account ?</h2>  
      <span>Sign in with email and password.</span>
      <form onSubmit={handleSubmit}>
        

        <FormInput
          label="email"
          type="email"
          required
          onChange={handlechange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handlechange}
          name="password"
          value={password}
        />
        <div className="buttons-containers">
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign in</Button> 
        </div>
       
      </form>
    </div>
  );
};

export default SignInForm;
