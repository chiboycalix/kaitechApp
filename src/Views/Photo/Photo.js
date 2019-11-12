import React from 'react';
import './Photo.css';

function Photo(props) {
    const { post } = props;
    return (
        <div 
            className="photo-wrapper" 
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-delay="100"
        >
            <img src={post.url} alt=""/>
            <div className="photo-title">
            
            {post.title}
            </div>
        </div>
    )
}
export default Photo;