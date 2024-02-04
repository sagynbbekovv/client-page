import React, {useState} from 'react';
import Button from "../../components/Button/Button";
// import image from '../../dog.jpg'
import './AnnouncementInfo.css'
import {Link} from "react-router-dom";
import ImgSlider from "../../components/ImgSlider/ImgSlider";

const AnnouncementInfo = () => {
    const [show, setShow] = useState(false)

    const slides = [
        {url: "https://cdn.britannica.com/92/212692-050-D53981F5/labradoodle-dog-stick-running-grass.jpg", title: "black dog"},
        {url: "http://localhost:3000/static/media/dog.8715bddd4ee643e96fe2.jpg", title: "white dog"},
    ]

    return (
        <div className="announcement-info">
            <div className="row">
                <div className="col-6 first-order">
                    <Link to="/myorgs/v-teplye-ruki" className="arrow"><li className="fa-solid fa-long-arrow-left"></li></Link>
                    <div className="box announcement-info-item pading">
                        {/* TITLE */}
                        <h1 className="announcement-title">Отдам в добрые руки! Мать восточная овчарка, отец немецкой породы</h1>

                        <div className="announcement-detailed-info">

                            {/* TYPE OF PET*/}
                            <div className="pet-type">
                                Тип:
                                <p>Питомец</p>
                            </div>

                            {/* DESCRIPTRION */}
                            <div className="announcement-description">
                                Описание:
                                <p>Отдам в добрые руки! Мать восточная овчарка, отец немецкой породы. Девочка. По всем интересующим вопросам пишите по указанному номеру</p>
                            </div>

                        </div>


                        {/* CONTACTS */}
                        <div onClick={() => setShow(!show)} className="announcement-contact">
                            <Button txt={"Контакты"} icon={<li className="fa-solid fa-phone"></li>}/>
                        </div>

                        {
                            show ? <div className="announcement-contact-inner">
                                <div className="announcement-contact-inner-box">
                                    <li onClick={() => setShow(!show)} className="xmark fa-solid fa-xmark"></li>
                                    <img src="" alt="" className="author-avatar"/>
                                    <span className="author-name">rinat</span>
                                    <span className="author-phone">+996 500 500 500</span>
                                </div>
                            </div> : null
                        }

                    </div>
                </div>
                <div className="col-6 second-order">
                    <div className="box announcement-image-box">

                        {/* IMAGE */}
                        <div className="image-slider">
                            <ImgSlider slides={slides}/>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default AnnouncementInfo;