import React from 'react'
import TextField from '@material-ui/core/TextField';
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
import {  withStyles  } from '@material-ui/core/styles';   
import Button from '@material-ui/core/Button';    
import { Link } from 'react-router-dom';
const SignUp = () => {
   
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
        <>

          <Container>
              <FormContent>
                  <Form >
                  <FormTitle>Register</FormTitle>
                      <FormLabel>Name</FormLabel>

                      <TextField label="Name" variant="outlined" color="#9900ef" fullWidth 
                      type="text" id="username" name="username"
                      placeHolder="username" />
                       

                      <FormLabel>Email</FormLabel>
                      <TextField label="Email" variant="outlined" color="#9900ef" fullWidth
                      type="email" id="email" name="email"
                      placeHolder="email" />

                      <FormLabel>Password</FormLabel>

                      <TextField label="Password" variant="outlined" color="#9900ef" fullWidth 
                      type="password" id="password" name="password"
                      placeHolder="password" />
                      
                      <FormLabel>Confirm Password</FormLabel> 

                      <TextField label="Confirm Password" variant="outlined" color="#9900ef" fullWidth
                      type="password" id="password2" name="password2"
                      placeHolder="confirm password" />
                        <br></br>
                        <ColorButton type='submit' >Sign Up</ColorButton>
                        <br></br>
                        Already have an account? <Link to="/login">Sign in</Link>
                  </Form>
              </FormContent>
         </Container>  
        </>
    )
}

export default SignUp;

