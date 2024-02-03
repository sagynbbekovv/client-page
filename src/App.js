import React from 'react';
// import Button from "./components/Button/Button";
import image from "./dog.jpg"
import BoxRoute from "./components/BoxRoute/BoxRoute";
import BoxActions from "./components/BoxActions/BoxActions";
import {Link, Route, Routes} from "react-router-dom";
import AnnouncementInfo from "./pages/AnnouncementInfo/AnnouncementInfo";

const App = () => {
    return (
        <div className="container">

            {/* section start */}
            {/*<section className="section info">*/}
            {/*    <div className="info-inner">*/}

            {/*        /!* Добавление своего объявления*!/*/}
            {/*        <div className="create-box">*/}
            {/*            <span>Создать объявление</span>*/}
            {/*            <Button txt="Создать" icon={<li className="fa-solid fa-pen"/>}/>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</section>*/}
            {/*  section end  */}


            {/* main start */}
            <main className="main">

                <div className="row announcement">
                    <div className="col-4">

                        {/* предмет объявления*/}
                        <div className="box announcement-item">
                            <BoxRoute image={image} title={"Отдам собаку"}
                                      descr={"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"}/>
                            <Link to={"/announcement-info"}>
                                <BoxActions/>
                            </Link>
                        </div>

                    </div>
                    <div className="col-4">
                        <div className="box">

                            {/* предмет объявления*/}
                            <div className="box announcement-item">
                                <BoxRoute image={image} title={"Отдам собаку"}
                                          descr={"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"}/>
                                <Link to={"/announcement-info"}>
                                    <BoxActions/>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-4">
                        <div className="box">

                            {/* предмет объявления*/}
                            <div className="box announcement-item">
                                <BoxRoute image={image}
                                          title={"Отдам собаку Отдам собаку Отдам собаку Отдам собаку Отдам собаку Отдам собаку"}
                                          descr={"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"}/>
                                <Link to={"/announcement-info"}>
                                    <BoxActions/>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-4">
                        <div className="box">

                            {/* предмет объявления*/}
                            <div className="box announcement-item">
                                <BoxRoute image={image}
                                          title={"Отдам собаку Отдам собаку Отдам собаку Отдам собаку Отдам собаку Отдам собаку"}
                                          descr={"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"}/>
                                <Link to={"/announcement-info"}>
                                    <BoxActions/>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            </main>
            {/* main end */}

            <Routes>
                <Route path={"/announcement-info"} element={<AnnouncementInfo/>}/>
            </Routes>
        </div>
    );
};

export default App;