import React from 'react'
import Cards from '../components/card/Card';
import './AddEventPage.css';
import Navbar from '../components/navbar/Navbar';

function AddEventPage() {
    return (
        <div className="AddEventPage">
      <div className="navbar">
      <Navbar/>
      </div>   
      <Cards />   
    </div>
    )
}

export default AddEventPage


