
import React from 'react'
import './Card.css'
import { Button, IconButton, Box, Grid,List } from '@material-ui/core';
import { Link } from 'react-router-dom';
    import { FiPlusCircle } from "react-icons/fi";
    import { FaBurn, FaRegTrashAlt, FaRegEdit, FaRegClock } from "react-icons/fa";


   
      

function AEventCards (props){
    //content de las horas y eventos
    const content = props.posts.map((post) =>
    <div key={post.id}>         
            <Grid 
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch"
            >
                        <Grid xs = "2">
                                <h2>{post.hour}</h2>
                        </Grid>
                            <Grid xs = "2">
                                <FaBurn className="icons" size="2em" />
                             </Grid>
                        <Grid xs = "8">
                            <div className="texts">
                                <h3>{post.title}</h3>
                                <div>{post.content}</div>
                            </div>
                        </Grid>
            </Grid>    
              
    </div>  
  );
    return (
        <Box className="container">
                <List style={{maxHeight: 550, overflow: 'auto'}}>

                    <div>
                    {content}
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
