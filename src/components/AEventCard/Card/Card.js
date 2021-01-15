
import React from 'react'
import './Card.css'
import { Button, IconButton, Box, Grid, } from '@material-ui/core';
import {
    Container, 
    DayButtons,
    DaysContainer
} from './CardElements.js';
import { Link } from 'react-router-dom';
    import { FiPlusCircle } from "react-icons/fi";
    import { FaBurn, FaRegTrashAlt, FaRegEdit, FaRegClock } from "react-icons/fa";

function AEventCards (){
    return (
        <Box className="container">
            <Grid 
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch">
                <Grid xs="12">
                    
                </Grid>
                <Grid xs = "2">
                        <h2>8:00</h2>
                </Grid>
                <Grid xs = "2">
                        <FaBurn className="icons" size="2em"/>
                </Grid>
                <Grid xs = "8">
                <div className="texts">
                            <h3>Run</h3>
                            <div>Lorem ipsum dolor sit amet Suspendisse sem urna,</div>
                        </div>
                </Grid>         

                <Grid xs = "2">
                        <h2>9:00</h2>
                </Grid>
                <Grid xs = "2">
                        <FaBurn className="icons" size="2em" />
                </Grid>
                <Grid xs = "8">
                <div className="texts">
                            <h3>Remind</h3>
                            <div>Lorem ipsum dolor sit amet Suspendisse sem urna,
                                tempus quis nibh a, lobortis maximus ligula.
                            </div>
                        </div>
                </Grid>

                <Grid xs = "2">
                        <h2>12:00</h2>
                </Grid>
                <Grid xs = "2">
                        <FaBurn className="icons" size="2em" />
                </Grid>
                <Grid xs = "8">
                <div className="texts">
                            <h3>Meeting <FaRegClock size= "1rem"/> </h3> 
                            <div>Lorem ipsum dolor sit amet Suspendisse sem urna,</div>
                           
                        </div>
                        <div className="miniIcons"> 
                            <FaRegClock /> <FaRegTrashAlt /> <FaRegEdit /> 
                            </div>
                </Grid>

                <Grid xs = "2">
                        <h2>16:00</h2>
                </Grid>
                <Grid xs = "2">
                        <FaBurn className="icons" size="2em" />
                </Grid>
                <Grid xs = "8">
                <div className="texts">
                            <h3>Message</h3>
                            <div>Lorem ipsum dolor sit amet Suspendisse sem urna,</div>
                            
                        </div>
                </Grid>
                
                
                <Link to="/addEvent">                   
                        <IconButton>                           
                            <FiPlusCircle size = "50px" color="red"/>               
                        </IconButton>               
                </Link>          
            </Grid>

        </Box>
    )
}

export default AEventCards
