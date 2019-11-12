import React from 'react';

import './Home.css';

import PhotoList from '../PhotoList';

 function Home() {
    return (
        <div className="home-wrapper">
            <div className="home-showcase">
                <h2>Your Random Posts of the Day</h2>
            </div>
            <div className="content" >
                <PhotoList />
            </div>
        </div>
    )
}

export default Home;