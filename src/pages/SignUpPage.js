import React, {useState,Component} from 'react'
import SignUp from '../components/login/SignUp'
import LoginPage from './LoginPage'
import TextField from '@material-ui/core/TextField';
import { Container, 
    FormButton,
    Form, 
    FormContent, 
    FormInput, 
    FormLabel, 
    FormTitle,
    Images
    } from '../components/login/LoginElements';
import { green, purple } from '@material-ui/core/colors';
import {  withStyles  } from '@material-ui/core/styles';   
import Button from '@material-ui/core/Button';    
import { Link } from 'react-router-dom';

import {API_URL} from '../services/api';
import axios from'axios';



class SignUpPage extends Component{

    constructor(props){
        super(props);
    }

    ColorButton = withStyles((theme) => ({
        root: {
          color: theme.palette.getContrastText(purple[500]),
          backgroundColor: purple[400],
          '&:hover': {
            backgroundColor: purple[600],
          },
        },
      }))(Button);

      state = {
        form:{
            "name":"",
            "email":"",
            "password":"",
            "password_confirmation": ""
        },
        error:false,
        errorMsg:""
    }

    submitHandler (e){
        e.preventDefault();
    }


     handlerChange = async e =>{

        await this.setState({
            form:{
                ...this.state.form,
                [e.target.id]: e.target.value
            }
        })
        console.log(this.state.form);
    }


    buttonHandler = () =>{

        this.setState({
            error : false,
            errorMsg : ""
        })

        let url = API_URL + "/register ";
            axios.post(url,this.state.form)
            .then(response =>{
                console.log(response);
                if(response.data.message === "The given data was invalid."){
                    this.setState({
                        error : true,
                        errorMsg : response.data.message
                    })
                    console.log(response);
                }else{
                    console.log(response);
                    localStorage.setItem("token",response.data.accessToken);
                    localStorage.setItem("name",response.data.user.name);
                    this.props.history.push("/Login");
                }
            }).catch(error =>{
                console.log(error);
                this.setState({
                    error : true,
                    errorMsg : "The email is already in use or password does not match"
                })
            })
    }


    render(){
   
        return (
            
            <Container>
              <FormContent>
                  <Form onSubmit={this.submitHandler}>
                  <FormTitle>Register</FormTitle>
                      <FormLabel>Name</FormLabel>

                      <TextField label="Name" variant="outlined" color="#9900ef" fullWidth 
                      type="text" id="name" name="name" onChange = {this.handlerChange}
                      placeHolder="username"/>
                     

                      <FormLabel>Email</FormLabel>
                      <TextField label="Email" variant="outlined" color="#9900ef" fullWidth
                      type="email" id="email" name="email" onChange = {this.handlerChange}
                      placeHolder="email" />
                      
                      <FormLabel>Password</FormLabel>

                      <TextField label="Password" variant="outlined" color="#9900ef" fullWidth 
                      type="password" id="password" name="password" onChange = {this.handlerChange}
                      placeHolder="password" />
                      
                      <FormLabel>Confirm Password</FormLabel> 

                      <TextField label="Confirm Password" variant="outlined" color="#9900ef" fullWidth
                      type="password" id="password_confirmation" name="password_confirmation" onChange = {this.handlerChange}
                      placeHolder="confirm password" />
                      
                        <br></br>
                        <this.ColorButton type="submit" onClick ={this.buttonHandler}>Sign Up</this.ColorButton>
                        <br></br>
                        Already have an account? <Link to="/login" >Sign in</Link>

                        <br></br>
                            
                            {this.state.error === true &&
                             <div class="alert alert-danger" role="alert">
                                {this.state.errorMsg}
                             </div>
                            }
                  </Form>
              </FormContent>
         </Container> 
            
        );

    }
}

export default SignUpPage;
