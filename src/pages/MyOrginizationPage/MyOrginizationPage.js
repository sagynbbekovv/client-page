import React from 'react';
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";

const MyOrginizationPage = () => {
    return (
        <div>
            <Link to={"/myorgs/v-teplye-ruki"}>
                <Button txt={'open'}></Button>
            </Link>
        </div>
    );
};

export default MyOrginizationPage;