import React from 'react';
import './BoxRoute.css'

const BoxRoute = ({ image, title, descr }) => {
    return (
        <div className="box-route">
            <img className="imageUrl" src={image} alt=""/>
            <h1 className="title">{title}</h1>
            <p className="description">{descr}</p>
        </div>
    );
};

export default BoxRoute;