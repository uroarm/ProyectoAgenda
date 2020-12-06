import React, {useState} from 'react';
import { Container, 
    FormButton,
    Form, 
    FormContent, 
    FormInput, 
    FormLabel, 
    FormTitle,
    Images
    } from './LoginElements'

    import myImg from '../../images/Imagen.PNG';



function LoginForm({Login, error})  {

    const [details, setDetails] = useState ( { email: "", password: ""} );

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }

    return (
        <div>
           
            <Container>
                    <Images src= {myImg}/> 
                    <FormContent>
                        <Form onSubmit={submitHandler}>
                            <FormTitle>Iniciar Sesion</FormTitle>
                            {(error != "") ? (<div>datos incorretos!!</div>) : ""}
                            <FormLabel htmlFor='for'>Correo</FormLabel>

                            <FormInput  placeholder='ingresa correo' type="email" id="email" 
                            onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>

                            <FormLabel htmlFor='for'>Contraseña</FormLabel>

                            <FormInput placeholder="ingresa contraseña"  type="password" id = "password"
                            onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>

                            <FormButton type='submit'>aceptar</FormButton>
                        </Form>
                    </FormContent>
                
            </Container>
        </div>
    )
}

export default LoginForm;



