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
    import { green, purple } from '@material-ui/core/colors';
    import myImg from '../../images/imagenLogin.PNG';
    import TextField from '@material-ui/core/TextField';
    import {Link} from 'react-router-dom';
    import Button from '@material-ui/core/Button';
    import {  withStyles  } from '@material-ui/core/styles';    
    

function LoginForm()  {
   
    const ColorButton = withStyles((theme) => ({
        root: {
          color: theme.palette.getContrastText(purple[500]),
          backgroundColor: purple[400],
          '&:hover': {
            backgroundColor: purple[600],
          },
        },
      }))(Button);

    return (
        <div>
           
            <Container>
                    
                    <FormContent>
                        <Form>
                            <FormTitle>Login</FormTitle>
                            
                            <FormLabel>Email</FormLabel>
                            <TextField label="Email" variant="outlined" color="primary" fullWidth
                            placeholder='ingresa correo' type="email" id="email" 
                            />
                             <FormLabel>Password</FormLabel>
                            <TextField label="password" variant="outlined" color="#primary" fullWidth />
                            <br></br>
                            <ColorButton type="submit" color="primary" variant="contained" fullWidth> Login</ColorButton>
                            <br></br>
                            <div>Don't have an account? <Link to="/SignUp">Sing up</Link></div>
                        </Form>
                    </FormContent>
                
            </Container>
        </div>
    )
}

export default LoginForm;



