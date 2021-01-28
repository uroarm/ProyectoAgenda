import React from 'react'
import Card from '@material-ui/core/card'
import CardContent from '@material-ui/core/CardContent';
import {IconButton, makeStyles} from '@material-ui/core'
import {FiCommand,FiEdit,FiClock,FiBell, FiAlignLeft} from 'react-icons/fi'
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import './Card.css'
import Fab from '@material-ui/core/Fab'
import {FiCheck, FiCalendar} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { FiPlusCircle } from "react-icons/fi";



const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

function Cards (){
    
    const classes = useStyles();

    return (

            <Card id="card">
                <CardContent>
                    <div className="divs">
                        <FiCalendar className="icons" size="2em" />
                        <h2>Date</h2>
                    </div>
                    
                    <TextField
                        id="date"
                        name="date"
                        label="Date"
                        type="date"
                        defaultValue="2020-01-01"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                   
                    <div className="divs">
                        <FiCommand className="icons" size="2em"/>
                        <h2>Task</h2>
                    </div>
                    <TextField label="Task" variant="outlined" color="secondary" fullWidth/>

                    <div className="divs">
                        <FiEdit className="icons" size="2em"/>
                        <h2>Notes</h2>
                    </div>
                    <TextField label="Notes" variant="outlined" color="secondary" multiline rows={4} fullWidth/>

                    <div className="divs">
                        <FiClock className="icons" size="2em"/>
                        <h2>Time</h2>
                    </div>
                    <TextField 
                    id="time"
                    name="time"
                    label="Alarm clock"
                    type="time"
                    defaultValue="00:00"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, //5 min
                    }}
                    />
                    <div className="divs">
                        <FiBell className="icons" size="2em"/>
                        <h2>Alert</h2>
                    </div>
                    <Switch inputProps={{ 'aria-label': 'primary checkbox' }  } />

                    <Link to="/actualEvent">
                    <br></br>                   
                        <IconButton>                           
                            <FiPlusCircle size = "50px" color="red"/>               
                        </IconButton>               
                </Link>   
                </CardContent>
            </Card>
    )
}

export default Cards;