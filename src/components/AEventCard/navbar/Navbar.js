import React from 'react'
import {FiChevronLeft,FiCalendar} from 'react-icons/fi';
import {IconButton} from '@material-ui/core';
import {AiOutlineMenu} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { WiCloudy } from "react-icons/wi";
import {BiAlarm} from "react-icons/bi";
import {ContainerNav, Section} from './NavbarElements.js';
function Navbar() {
    return (
        
            <>
            
            <Section>
                    <Link to="/actualEvent">
                        <IconButton >
                            <AiOutlineMenu size="2em" color= "white"/>
                        </IconButton>
                    </Link>
                        
                        <ContainerNav>
                        <WiCloudy size="3em" color="white"/>
                        <div>Monday</div>
                        <div>13/01/2021</div>
                        </ContainerNav>
                        <Link to="/timer">
                        <IconButton>
                            <BiAlarm size="2em" color= "white"/>
                        </IconButton>
                        </Link>
                        
                    </Section>
           
                    
                    
            
            
            </>
       
    )
}

export default Navbar
