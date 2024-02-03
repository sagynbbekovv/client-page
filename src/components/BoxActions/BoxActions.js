import './BoxActions.css'
import Button from "../Button/Button";
import React from "react";


const BoxActions = () => {

    return (
        <span className="box-actions">
            <Button icon={<li className="fa-solid fa-eye"></li>} txt={"Посмотреть"}/>
        </span>
    );
};

export default BoxActions;