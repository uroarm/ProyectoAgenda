import React from 'react'
import Cards from '../components/AEventCard/Card/Card';
import './ActualEventPage.css';
import Navbar from '../components/AEventCard/navbar/Navbar.js';

const ActualEventPage = () => {
    return (
        <div className="ActualEventPage">
            <div className="header">
            <Navbar />
            </div>
            <Cards />  
      </div>
    )
}

export default ActualEventPage
