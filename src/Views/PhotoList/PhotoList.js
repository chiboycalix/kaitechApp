import React from 'react';
import './PhotoList.css';

import Apod from '../Photo'

function PhotoList() {
    return (
        <div className="photolist-wrapper">
            <Apod />
            <Apod />
            <Apod />
            <Apod />
            <Apod />
            <Apod />
            <Apod />
        </div>
    )
}
export default PhotoList;
