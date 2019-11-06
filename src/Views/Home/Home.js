import React from 'react';
import './Home.css';

import ApodList from '../PhotoList';

 function Home() {
    return (
        <div className="home-wrapper">
            <div className="home-showcase">
                <h2>Your Astronomy Picture of the Day</h2>
            </div>
            <div className="content">
                <ApodList />
            </div>
        </div>
    )
}

export default Home;