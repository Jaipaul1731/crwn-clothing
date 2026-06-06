import SignUpForm from "../../components/sign-up-form/sign-up-form";

import {
  signinwithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signinwithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>singin page</h1>
      <button onClick={logGoogleUser}>Sing In with google</button>
      <SignUpForm />
    </div>
  );
};
export default SignIn;
