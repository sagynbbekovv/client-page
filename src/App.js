import React from 'react';
import BoxRoute from "./components/BoxRoute/BoxRoute";
import image from './dog.jpg'
import BoxActions from "./components/BoxActions/BoxActions";
import {Link, Route, Routes} from "react-router-dom";
import AnnouncementInfo from "./pages/AnnouncementInfo/AnnouncementInfo";
import MyOrginizationPage from "./pages/MyOrginizationPage/MyOrginizationPage";
import OrganizInfo from "./pages/OrganizInfo/OrganizInfo";

const App = () => {
    return (
        <div className="container">
            <Routes>
                <Route path={"/"} element={<MyOrginizationPage></MyOrginizationPage>}></Route>
                <Route path={"/myorgs/v-teplye-ruki"} element={<OrganizInfo></OrganizInfo>}></Route>
                <Route path={"/myorgs/v-teplye-ruki/announcement-info/:id"} element={<AnnouncementInfo></AnnouncementInfo>} />
            </Routes>
        </div>
    );
};

export default App;