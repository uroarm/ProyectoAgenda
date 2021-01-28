import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';

function Header (){

    const i = {
    };

    return (
        <div className="header">
            <div className="leftside">
                <div className="logo">
                    <Link to="/landing">
                        <div className="effect">
                            <span>TaskLive</span>
                        </div>
                    </Link>
                </div> 
            </div>
            <div className= "rightside">
                <div className="login">
                    <Link to="/Login">
                        <a>Log In</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;

/*
                    <Link to="/landing">
                        <a>TaskLive</a>
                    </Link>
*/