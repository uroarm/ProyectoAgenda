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
        <div>
            <Header></Header>
            <div className="hero" ref={container}/>

            <div className="phrase">
                <h1>"Neque porro quisquam est qui dolorem ipsum adipisci velit..."</h1>
                <h3 className="subtitle">Duis a gravida neque. Praesent a dolor eu mauris.</h3>
            </div>

            <div class="custom-shape-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>

                <h1>"Neque porro quisquam est qui dolorem"</h1>
                <Grid container className="grids" spacing={3}>
                    <Grid item xs={4}>
                        <FaCalendarAlt/>
                        <p>Vivamus libero sem, congue non eros quis, scelerisque maximus dolor. Curabitur luctus turpis in leo rutrum</p>
                    </Grid>
                    <Grid item xs={4}>
                        <FaCalendarAlt/>
                        <p>Etiam semper ornare condimentum. Duis suscipit, lectus ac scelerisque cursus, augue dolor vestibulum libero, sit amet faucibus tellus dolor eget mi. Ut nec enim a mi feugiat consectetur vel at nisl.</p>
                    </Grid>
                    <Grid item xs={4}>
                        <FaCalendarAlt/>
                        <p>Vivamus libero sem, congue non eros quis, scelerisque maximus dolor. Curabitur suscipit, lectus ac scelerisque cursus, augue dolor</p>
                    </Grid>
                    <Grid item xs={4}>
                        <FaCalendarAlt/>
                        <p>Praesent a dolor eu mauris mattis venenatis a quis est. Integer semper magna posuere ipsum sodales aliquam. Ut interdum lectus at consectetur vehicula. Sed pretium sem tellus, nec venenatis dui ullamcorper id. Aenean eu quam sit amet elit molestie blandit. Fusce ornare gravida ipsum,</p>
                    </Grid>
                    <Grid item xs={4}>
                        <FaCalendarAlt/>
                        <p>Duis suscipit, lectus ac scelerisque cursus, augue dolor vestibulum libero, sit amet faucibus tellus dolor eget mi. Ut nec enim a mi feugiat consectetur vel at nisl. Sed dictum felis mollis erat porttitor posuere.</p>
                    </Grid>
                    <Grid item xs={4}>
                        <FaCalendarAlt/>
                        <p>Integer purus erat, feugiat eu viverra et, bibendum sed ipsum. In rhoncus massa in magna gravida pretium. Sed molestie euismod erat, eget vulputate lorem viverra at.</p>
                    </Grid>
                </Grid>

            </div>


            <div className="review">

                <div className="login">
                    <h2>"Curabitur blandit nisl id purus gravida, vitae scelerisque orci finibus." </h2>
                    <Link to="/Login">
                    <Button variant="outlined" color="#00bfff" className="boton">
                         Login Now
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
        

    )
}

export default LandingPage;

