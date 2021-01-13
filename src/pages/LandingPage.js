import React from 'react';
import {Link} from 'react-router-dom';


function LandingPage() {

    return (           
        <div>
            
            <h1>landing page</h1>
            <Link to="/login">
                <button >Login</button>
            </Link>
        </div>
        

    )
}

export default LandingPage;

