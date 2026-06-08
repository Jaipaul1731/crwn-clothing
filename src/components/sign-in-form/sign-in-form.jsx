import { useState, useContext } from "react";
import {
  signinwithGooglePopup,
  signInAuthUserFromEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.contexts";

import "./sign-in.styles.scss";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };
  const signInWithGoogle = async () => {
    await signinwithGooglePopup();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserFromEmailAndPassword(
        email,
        password
      );
      // console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email.");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email.");
          break;
        case "auth/invalid-credential":
          alert("Invalid email or password.");
          break;
        default:
          console.error("Error signing in:", error.message);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account.</h2>
      <span>Sign In with you email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} button_type="google">
            Google Sing In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
