import React from 'react';
import './Button.css'

const Button = ({ icon , txt }) => {
    return (
        <span>
            <button className="button">
            {icon}
                {txt}
            </button>
        </span>
    );
};

export default Button;