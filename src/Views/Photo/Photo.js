import React from 'react';
import './Photo.css';

function Photo(props) {
    const { post } = props;
    return (
        <div className="photo-wrapper">
            <img src={post.url} alt=""/>
            <div className="photo-title">
            {post.title}
            </div>
        </div>
    )
}
export default Photo;