import React from 'react'
import Cards from '../components/AEventCard/Card/Card';
import './ActualEventPage.css';
import Navbar from '../components/AEventCard/navbar/Navbar.js';




const ActualEventPage = () => {
    const posts = [
        {id: 1,hour:'8:00', title: 'Run', content: 'Lorem ipsum dolor sit amet Suspendisse sem urna,'},
        {id: 2, hour:'9:00', title: 'Remind', content: 'Lorem ipsum dolor sit amet Suspendisse sem urna, Lorem ipsum dolor sit amet Suspendisse sem urna,'},
        {id: 3, hour: '12:00', title: 'Meeting', content: 'Lorem ipsum dolor sit amet Suspendisse sem urna' },
        {id: 4, hour: '16:00', title: 'Message', content: 'Lorem ipsum dolor sit amet Suspendisse sem urna'},
        {id: 5, hour: '16:00', title: 'Message', content: 'Lorem ipsum dolor sit amet Suspendisse sem urna'},
        {id: 6, hour: '16:00', title: 'Message', content: 'Lorem ipsum dolor sit amet Suspendisse sem urna'},
        {id: 7, hour: '16:00', title: 'Message', content: 'Lorem ipsum dolor sit amet Suspendisse sem urna'}
      ];
    return (
        <div className="ActualEventPage">
            <div className="navbar">
            <Navbar />
            </div>
            <Cards post={posts}/>  
      </div>
    )
}

export default ActualEventPage
