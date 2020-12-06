import React, {useState} from 'react'
import LoginForm from '../components/login/LoginForm';
import  Calendar from '../components/calendar/Calendar';

function LoginPage() {

        const adminUser = {
        email: "admin@mail.com",
        password: "bebecita"                  
        }
     
     const [user, setUser] = useState ( { email: "", password: ""} );
     const [error, setError] = useState ("");    
   
       
     const Login = details => {
        console.log(details);
        if(details.email == adminUser.email && details.password == adminUser.password){
            console.log("logged in");
             setUser({
                email: details.email, 
                password: details.password
             });    
        } else{
            console.log("datos incorrectos");
            setError("datos incorrectos");
        }
    }

   /* const Logout = () => {
        console.log("logout");
    }*/
    
     
    return (
        <div>
             { (user.email != "") ? (
                /*<div className = "Welcome">
                    <h2>Welcome</h2>
                    <button>Logout</button>
                </div>*/
                <Calendar></Calendar>
            ) : 
            (
            <LoginForm Login={Login} error={error} />
                )
            }      
            
        </div>

    );
}

export default LoginPage;
