import React from 'react' ;
import {FiChevronLeft,FiCalendar} from 'react-icons/fi';
import {IconButton} from '@material-ui/core';
import './Navbar.css';

import { Link } from 'react-router-dom';

function Navbar (){

    
    return (
        <section>
            <Link to="/actualEvent">
            <IconButton >
                <FiChevronLeft size="2em" color= "white"/>
            </IconButton>
            </Link>
            <h2 id="tittle">ADD AN EVENT</h2>
            <IconButton>
                <FiCalendar size="2em" color= "white"/>
            </IconButton>
        </section>
    )
}

export default Navbar;