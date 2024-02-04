import React from 'react';
import BoxRoute from "../../components/BoxRoute/BoxRoute";
import image from "../../dog.jpg";
import {Link} from "react-router-dom";
import BoxActions from "../../components/BoxActions/BoxActions";

const OrganizInfo = () => {
    return (
            <main className="main">

                <div className="row announcement">
                    <div className="col-4">

                        {/* предмет объявления*/}
                        <div className="box announcement-item">
                            <BoxRoute image={image} title={"Отдам собаку"}
                                      descr={"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"}/>
                            <Link to={"/myorgs/v-teplye-ruki/announcement-info/:id"}>
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
                                <Link to={"/myorgs/v-teplye-ruki/announcement-info/:id"}>
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
                                <Link to={"/myorgs/v-teplye-ruki/announcement-info/:id"}>
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
                                <Link to={"/myorgs/v-teplye-ruki/announcement-info/:id"}>
                                    <BoxActions/>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            </main>

    );
};

export default OrganizInfo;