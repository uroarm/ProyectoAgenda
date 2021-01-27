import React, {useState} from 'react'
import SignUp from '../components/login/SignUp'

function SignUpPage() {

    const [isSubmit, setIsSubmit] = useState(false)

    function submitForm(){
        setIsSubmit(true);
    }
   
    return (
        <div>
            <SignUp/>         
        </div>
    )
}

export default SignUpPage;
