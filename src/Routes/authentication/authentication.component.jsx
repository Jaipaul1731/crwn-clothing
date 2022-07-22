import SignUpForm from '../../components/sign-up-form/sign-up-form.component.js';
import SignInForm from '../../components/sign-in-form/sign-in-form.component.js';
import { AuthenticationContainer } from './authentication.style.jsx';
const Authentication=()=>{
    
    return(
        <AuthenticationContainer>
            <SignInForm/>
            <SignUpForm/>
        </AuthenticationContainer>
    )
}

export default Authentication;