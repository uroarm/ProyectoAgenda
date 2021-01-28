import React, {useRef,useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../components/header/Header";
import Header from '../components/header/Header';
import "./LandingPage.css";
import lottie from "lottie-web";
import {FaCalendarAlt} from "react-icons/fa";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import MediaIcons from "../components/media-icons/mediaIcons" 

import EventIcon from '@material-ui/icons/Event';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

function LandingPage() {

    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer:"svg",
            loop:true,
            autoplay:true,
            animationData: require("../images/drawkit-grape-animation-8-LOOP.json")
        })
        
    }, [])


    return (           
        <div class="divd">
            <Header></Header>
            <div className="hero" ref={container}/>

            <div className="phrase">
                <h1>"La Aplicacion para llevar el tiempo de tu vida..."</h1>
            </div>

            <div class="custom-shape-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>

                <h1>Todo lo necesario a la palma de tu mano</h1>
                <Grid container className="grids" spacing={8}>
                    <Grid item xs={4}>
                        <a className="sizeOfIcons2"><FaCalendarAlt /></a>
                        <p>Calendarización de todas tus actividades</p>
                    </Grid>
                    <Grid item xs={4} className="borderGrids">
                        <a className="sizeOfIcons"><EventIcon /></a>
                        <p>Calendarización de todas tus actividades</p>
                    </Grid>
                    <Grid item xs={4} className="borderGrids">
                        <a className="sizeOfIcons"><EventAvailableIcon /></a>
                        <p>Crear actividades a tu gusto</p>
                    </Grid>
                    <Grid item xs={4} className="borderGrids">
                        <a className="sizeOfIcons"><EventBusyIcon/></a>
                        <p>Elimina actividades que no necesites</p>
                    </Grid>
                    <Grid item xs={4} className="borderGrids">
                        <a className="sizeOfIcons"><EventNoteIcon/></a>
                        <p>Registra tus actividades</p>
                    </Grid>
                    <Grid item xs={4} className="borderGrids">
                        <a className="sizeOfIcons"><AccessAlarmIcon /></a>
                        <p>Organiza tus tiempos</p>
                    </Grid>
                </Grid>
            </div>
            <div class="custom-shape-divider-2">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>

            <div className="review">
                <div className="loginB">
                    <h2>¿Qué esperas? ¡Regístrate ahora! </h2>
                    <br></br>
                    <Link to="/Login">
                        <Button className="boton">
                            Sign Up
                        </Button>
                    </Link>
                    <br></br>
                    <br></br>
                    <MediaIcons />
                </div>
            </div>
        </div>
        

    )
}

export default LandingPage;

