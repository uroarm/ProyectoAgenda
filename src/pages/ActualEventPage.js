import React, {useState, Component} from 'react'
import './ActualEventPage.css';
import Navbar from '../components/AEventCard/navbar/Navbar.js';
import { render } from '@testing-library/react';
import '../components/AEventCard/Card/Card.css';
import { Button, IconButton, Box, Grid,List, Fab, makeStyles, ButtonGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FiPlusCircle } from "react-icons/fi";
import { FaBurn, FaRegTrashAlt, FaRegEdit, FaRegClock } from "react-icons/fa";
import { green, purple } from '@material-ui/core/colors';    
import {  withStyles  } from '@material-ui/core/styles';    
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'; 
import axios from 'axios';
import { API_URL } from '../services/api';
 
const url= API_URL + "/tasks";
var token = localStorage.getItem('token');
 
class ActualEventPage extends Component {
  
  posts = [
    {id: 1,hour:'8:00', title: 'Run', description: 'Lorem ipsum dolor sit amet Suspendisse sem urna,'},
    {id: 2, hour:'9:00', title: 'Remind', description: 'Lorem ipsum dolor sit amet Suspendisse sem urna, Lorem ipsum dolor sit amet Suspendisse sem urna,'},
    {id: 3, hour: '12:00', title: 'Meeting', description: 'Lorem ipsum dolor sit amet Suspendisse sem urna' },
    {id: 4, hour: '16:00', title: 'Message', description: 'Lorem ipsum dolor sit amet Suspendisse sem urna'},
    {id: 5, hour: '16:00', title: 'Sleep', description: 'Lorem ipsum dolor sit amet Suspendisse sem urna'},
    {id: 6, hour: '20:00', title: 'Cry', description: 'Lorem ipsum dolor sit amet Suspendisse sem urna'},
    {id: 7, hour: '21:00', title: 'Wonder', description: 'Lorem ipsum dolor sit amet Suspendisse sem urna'}
  ];
      

  useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
     
    },
    
  }));
    ColorButton = withStyles((theme) => ({
    root: {
    //color: theme.palette.getContrastText(purple[500]),
    color: purple[400],
    '&:hover': {
      color: purple[600],
      
    },
    },
    }))(Button);


    state={
      data:[{id: 5, hour: '16:00', title: 'Sleep', description: 'Lorem ipsum dolor sit amet Suspendisse sem urna'},
    {id: 6, hour: '20:00', title: 'Cry', description: 'Lorem ipsum dolor sit amet Suspendisse sem urna'},
    {id: 7, hour: '21:00', title: 'Wonder', description: 'Lorem ipsum dolor sit amet Suspendisse sem urna'}],
      insertData: false,
      deleteData: false,
      updateData: false,
      form:{
        id: '',
        hour: '',
        title: '',
        description: '',
        tipoModal: ''
      }
    }

    //peticiones axios
      
   peticionGet=()=>{
axios.get(url, {headers:{'Content-Type': 'application/json', 'Authorization': 'Bearer '+ token}}).then(response=>{
   console.log(response.data.data);
  this.setState({data: response.data.data});
 // this.setState({data: this.state.data});
  //console.log(this.state.data);
}).catch(error=>{
  console.log(error.message);
})
}

componentDidMount() {
  //this.setState({data: this.state.data});
  this.peticionGet();
}

peticionPost=async()=>{
  delete this.state.form.id;
      console.log(token);
 await axios.post(url,this.state.form,{headers:{'Content-Type': 'application/json', 'Authorization': 'Bearer '+ token}}).then(response=>{
    this.insertData();
    this.peticionGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

peticionPut=()=>{
  axios.put(url+"/"+this.state.form.id, this.state.form, {headers:{'Content-Type': 'application/json', 'Authorization': 'Bearer '+ token}}).then(response=>{
    this.insertData();
    this.peticionGet();
  })
}

peticionDelete=()=>{
  axios.delete(url+"/"+this.state.form.id, {headers:{'Content-Type': 'application/json', 'Authorization': 'Bearer '+ token}}).then(response=>{
    this.setState({deleteData: false});
    this.peticionGet();
  })
}
    
    handleChange=async e=>{
      e.persist();
      await this.setState({
        form:{
          ...this.state.form,
          [e.target.name]: e.target.value
        }
      });
      console.log(this.state.form);
    }

    

    insertData=()=>{
      this.setState({insertData: !this.state.insertData});  
    }

    selectElement=(element)=>{
      
      this.setState({
        tipoModal: 'update',
        form: {
          id: element.id,
          due: element.hour,
          title: element.title,
          content: element.content
        }
      })
    }

    render() {

      const {form}=this.state;

      return (   

        
        <div className="ActualEventPage">           
        <div className="navbar">
        <Navbar /></div>

        <Box className="container">
                <List style={{maxHeight: 550, overflow: 'auto'}}>
                    <div>
                    
        {this.state.data.map(element=>{
          return(
                 <div>      
                        <Grid 
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="stretch"
                        >                                       
                            <Grid xs = "2" >
                                <h2>{element.hour}</h2>
                            </Grid>
                            <Grid xs = "2">
                                <FaRegClock className="icons" size="2em" />
                            </Grid>
                            <Grid xs = "8">                                                   
                                <div className="texts">
                                    <h2>{element.title}</h2>
                                    <div>{element.description}</div>
                                </div>                                                                                                          
                                <div className="miniIcons"> 
                                    <this.ColorButton><FaRegClock /> </this.ColorButton> 
                                    <this.ColorButton onClick={()=>{this.selectElement(element); this.setState({deleteData: true})}}> <FaRegTrashAlt /> </this.ColorButton>
                                    <this.ColorButton onClick={()=>{this.selectElement(element); this.insertData()}}><FaRegEdit /> </this.ColorButton>
                                </div>                                                        
                            </Grid>                            
                        </Grid>
                </div>
          )
        })}
      
                    </div> 
                </List>                  
                                                          
                    <br></br>  
                      <Link>
                                    
                        <IconButton onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.insertData()}}>                           
                            <FiPlusCircle size = "50px" color="red"/>               
                        </IconButton>               
                        </Link> 
        </Box>

        <div>
            <Modal isOpen={this.state.insertData}>
        <ModalHeader>
          <div>
            <h3>Edit your event</h3>
          </div>
        </ModalHeader>

        <ModalBody>
        <label htmlFor="id">ID</label>
                    <input 
                    className="form-control" 
                    type="text" 
                    name="id" 
                    id="id" 
                    readOnly value={form?form.id: this.state.data.length+1}
                    onChange={this.handleChange}/>
                    <br />
          <div className="form-group">
           
            <label>Hour</label>
            <input
              className="form-control"
              type="text"
              name="hour"
              id="hour"
              value={form?form.hour: ''}
              onChange={this.handleChange}
            />
            <br />

            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              id="title"
              value={form?form.title: ''}
              onChange={this.handleChange}
            />
            <br />

            <label>Content</label>
            <input
              className="form-control"
              type="text"
              name="description"
              id="description"
              value={form?form.content: ''}
              onChange={this.handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
        {this.state.tipoModal=='insertar' ?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
  }

            <button
            className="btn btn-danger"
            onClick={()=>this.insertData()}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>
        </div>      

        <Modal isOpen={this.state.deleteData}>
        <ModalBody>
          Do you want delete {form && form.title}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>
            Yes
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>this.setState({deleteData: false})}
          >
            No
          </button>
        </ModalFooter>
      </Modal>                       
           </div>         
           

    )
    }
  }
    


export default ActualEventPage
