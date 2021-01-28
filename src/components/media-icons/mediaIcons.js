import React from 'react';
import "./media-icons.css";
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function mediaIcons (){
    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center" 
            spacing={1}>

            <Grid item xs={2}>
                <Link to="#">
                    <a className="mediaI"><FacebookIcon /></a>
                </Link>
            </Grid>
            <Grid item xs={2}>
                <Link to="#">
                    <a className="mediaI"><TwitterIcon /></a>
                </Link>
            </Grid>
            <Grid item xs={2}>
                <Link to="#">
                    <a className="mediaI"><InstagramIcon /></a>
                </Link>
            </Grid>
        </Grid>
    )
}

/*

        <container>
            <ul>
                <Link to="#">
                    <li><a><FacebookIcon /></a></li>
                </Link>
                <Link to="#">
                    <li><a><TwitterIcon /></a></li>
                </Link>
                <Link to="#">
                    <li><a><InstagramIcon /></a></li>
                </Link>
            </ul>
        </container>
        */

export default mediaIcons;