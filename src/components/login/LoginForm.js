import React, {useState,Component} from 'react';
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

import {API_URL} from '../../services/api';
import axios from'axios';
import { withRouter } from "react-router";
import LoginPage from '../../pages/LoginPage';
import { history } from 'react-router-dom';
    

class LoginForm extends Component{

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
            "email":"",
            "password":""
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

        let url = API_URL + "/login ";
        axios.post(url,this.state.form)
        .then(response =>{
            if(response.data.message === "Invalid credentials"){
                this.setState({
                    error : true,
                    errorMsg : response.data.message
                })
                console.log(response);
                
                

            }else{
                console.log(response);
                localStorage.setItem("token",response.data.accessToken);
                localStorage.setItem("name",response.data.user.name);
                this.props.history.push("/actualEvent");
            }
        }).catch(error =>{
            console.log(error);
            this.setState({
                error : true,
                errorMsg : "Coould not connect to server"
            })
        })
    }

    render(){
    
    return (
        <div>
           
            <Container>
                    
                    <FormContent>
                        <Form onSubmit={this.submitHandler}>
                            <FormTitle>Login</FormTitle>
                            
                            <FormLabel>Email</FormLabel>
                            <TextField label="Email" variant="outlined" color="primary" fullWidth
                            placeholder='ingresa correo' type="email" id="email" onChange = {this.handlerChange}
                            />
                             <FormLabel>Password</FormLabel>
                            <TextField label="password" variant="outlined" id="password" color="#primary" fullWidth  onChange = {this.handlerChange}/>
                            <br></br>
                            <this.ColorButton type="submit" color="primary" variant="contained" fullWidth onClick ={this.buttonHandler}> Login </this.ColorButton>
                            <br></br>
                            <div>Don't have an account? <Link to="/SignUp">Sing up</Link></div>
                            <br></br>
                            
                            {this.state.error === true &&
                             <div class="alert alert-danger" role="alert">
                                {this.state.errorMsg}
                             </div>
                            }
                        </Form>
                    </FormContent>

                    
                    
                
            </Container>
        </div>
    )
    }
}

export default LoginForm ;



