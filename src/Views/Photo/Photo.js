import React from 'react';
import './Photo.css';

function Photo(props) {
    const { post } = props
    return (
        <div className="photo-wrapper">
            {post.title}
        </div>
    )
}
export default Photo;