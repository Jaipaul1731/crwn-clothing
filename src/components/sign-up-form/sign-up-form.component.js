import { useState} from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";
import { SignUpContainer,Heading } from "./sign-up-form.style";




const defaulFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaulFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormField = () => [setFormFields(defaulFormFields)];
  //creating user context
 


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password Does not match");
      return;
    }
    try {
      console.log("Ima in try block");
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot Crete User,email is already in use");
      } else {
        console.log("User Creation an error", error);
      }
    }
  };
  const handlechange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpContainer>
      <Heading >Don't have an account ?</Heading>  
      <span>Sign up with email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="DisplayName"
          type="text"
          required
          onChange={handlechange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="ConfirmPassword"
          type="password"
          required
          onChange={handlechange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
