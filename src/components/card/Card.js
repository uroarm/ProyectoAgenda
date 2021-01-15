import React from 'react'
import Card from '@material-ui/core/card'
import CardContent from '@material-ui/core/CardContent';
import {FiCommand,FiEdit,FiClock,FiBell, FiAlignLeft} from 'react-icons/fi'
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import './Card.css'
import Fab from '@material-ui/core/Fab'
import {FiCheck} from 'react-icons/fi'

function Cards (){

    return (
        
            <Card id="card">
                <CardContent>
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
                    <TextField select label="    8:00 a.m" color="secondary" helperText="Please select start hour" variant="outlined"/>
                    
                    <div className="divs">
                        <FiBell className="icons" size="2em"/>
                        <h2>Alert</h2>
                    </div>
                    <Switch inputProps={{ 'aria-label': 'primary checkbox' }  } />

                </CardContent>
            </Card>
    )
}

export default Cards;