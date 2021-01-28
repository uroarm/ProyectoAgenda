import React, {useState} from 'react'
import SignUp from '../components/login/SignUp'
import LoginPage from './LoginPage'
function SignUpPage() {

    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm(){
        setIsSubmitted(true);
    }
   
    return (
        <div>
            {!isSubmitted ? <SignUp submitForm=
            {submitForm} /> : (<LoginPage/>)}       
        </div>
    )
}

export default SignUpPage;
