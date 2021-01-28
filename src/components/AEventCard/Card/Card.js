
import React, {useState} from 'react'
import './Card.css'
import { Button, IconButton, Box, Grid,List, Fab, makeStyles, ButtonGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FiPlusCircle } from "react-icons/fi";
import { FaBurn, FaRegTrashAlt, FaRegEdit, FaRegClock } from "react-icons/fa";
import { green, purple } from '@material-ui/core/colors';    
import {  withStyles  } from '@material-ui/core/styles';    
   
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
         
        },
        
      }));

      const posts = [
    {id: 1,hour:'8:00', title: 'Run', content: 'Lorem ipsum dolor sit amet Suspendisse sem urna,'},
    {id: 2, hour:'9:00', title: 'Remind', content: 'Lorem ipsum dolor sit amet Suspendisse sem urna, Lorem ipsum dolor sit amet Suspendisse sem urna,'},
    {id: 3, hour: '12:00', title: 'Meeting', content: 'Lorem ipsum dolor sit amet Suspendisse sem urna' },
    {id: 4, hour: '16:00', title: 'Message', content: 'Lorem ipsum dolor sit amet Suspendisse sem urna'},
    {id: 5, hour: '16:00', title: 'Message', content: 'Lorem ipsum dolor sit amet Suspendisse sem urna'},
    {id: 6, hour: '16:00', title: 'Message', content: 'Lorem ipsum dolor sit amet Suspendisse sem urna'},
    {id: 7, hour: '16:00', title: 'Message', content: 'Lorem ipsum dolor sit amet Suspendisse sem urna'}
  ];
    
  const ColorButton = withStyles((theme) => ({
    root: {
      //color: theme.palette.getContrastText(purple[500]),
      color: purple[400],
      '&:hover': {
        color: purple[600],
        
      },
    },
  }))(Button);


  

function AEventCards (){

    //togle de botones
  
    
    //content de las horas y eventos
    const [data, setData] = useState(posts);
    const classes = useStyles();
     
    const [editEvent, setEditEvent] = useState(false);

    const [deleteEvent, setDeleteEvent] = useState(false); 

    const[selectedEvent, setSelectedEvent] = useState({
        id: '',
        hour: '',
        title:'',
        content:''
    });

  const selectEvent = (element, eventcase) => {
        setSelectedEvent(element);
        (eventcase ==='Editar')&&setEditEvent(true)
    }

    const handleChange=e=>{
        const {name, value}=e.target;
        setSelectedEvent((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }

    const editar = () =>{
        var newData = data;
        newData.map((aevent)=>{
            if(aevent.id === selectedEvent.id){
                aevent.hour = selectedEvent.hour;
                aevent.title = selectedEvent.title;
                aevent.content = selectedEvent.content;
            }
        });
        setData(newData);
        setEditEvent(false);
    }
  
    return (
        
        <Box className="container">
                <Grid className = {classes.root}>
                    <Fab color="secondary">
                        12   
                    </Fab>
                    <Fab color ="secondary">
                        12   
                    </Fab>
                    <Fab color ="secondary">
                        12   
                    </Fab>
                </Grid>
                <List style={{maxHeight: 550, overflow: 'auto'}}>
                    <div>
                        {data.map((element) =>
                            
                            <div key={element.id}>
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
                                            <div>{element.content}</div>
                                        </div>
                                                    
                                                        
                                        <div className="miniIcons"> 
                                            <ColorButton><FaRegClock /> </ColorButton> 
                                            <ColorButton><FaRegTrashAlt /></ColorButton>
                                            <ColorButton><FaRegEdit /> </ColorButton>
                                        </div>
                                                        
                                    </Grid>
                    
                            
                                </Grid>
                                </div>

                         ) }
                    </div> 
                </List>                  
                                                    
            <Link to="/addEvent">
                    <br></br>                   
                        <IconButton>                           
                            <FiPlusCircle size = "50px" color="red"/>               
                        </IconButton>               
                </Link>   
        </Box>
    )
}




export default AEventCards
