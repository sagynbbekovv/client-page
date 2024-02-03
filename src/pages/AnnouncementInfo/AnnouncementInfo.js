import React, {useState} from 'react';
import image from '../../dog.jpg'
import Button from "../../components/Button/Button";
import './AnnouncementInfo.css'
import {Link, Route, Routes} from "react-router-dom";

const AnnouncementInfo = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="announcement-info">
            <div className="row">
                <div className="col-6">
                    <Link to="/"><li className="fa-solid fa-long-arrow-left"></li></Link>
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
                <div className="col-6">
                    <div className="box">

                        {/* IMAGE */}
                        <img className="announcement-image" src={image} alt=""/>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default AnnouncementInfo;