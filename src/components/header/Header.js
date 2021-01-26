import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';

function Header (){
    return (
        <div className="header">
            <div className="leftside">
                <div className="logo">
                    <Link to="/landing">
                        <a>Time-App</a>
                    </Link>
                </div> 
            </div>
            <div className= "rightside">
                <div className="login">
                    <Link to="/Login">
                        <a>Login</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;