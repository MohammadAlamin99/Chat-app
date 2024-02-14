import React from 'react';
import img from '../assets/Images/Untitled.jpg'
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';
import Conversation from './Conversation';
import LeftSideFriends from './LeftSideFriends';
const Home = () => {
return (
<div>
    <div className="leftSiteSection">
        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-lg-3" style={{background:"#1D2737"}}>
                    <div className="profileSecton">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="img d-flex">
                                    <img src={img} alt="" />
                                    <p>Mohammad Al Amin</p>
                                </div>
                            </div>
                            <div className="col-lg-3" style={{color:"#fff", fontSize:"20px"}}>
                                <PiDotsThreeCircleFill style={{cursor:"pointer", marginRight:"7px"}} />
                                <FaEdit style={{cursor:"pointer"}} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 searchSection">
                                <FaSearch className='serch' />
                                <input type="text" className="form-control px-5" id="exampleFormControlInput1"
                                    placeholder="Search" style={{color:"#fff", background:"#192131", border:"none"}} />
                            </div>

                            <div className="row">
                                <div className="col-lg-12 activeFriends">
                                    <div className="mainfriend d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                            <div className="activeFrnd"></div>
                                        </div>
                                        <div className="img">
                                            <img src={img} alt="" />
                                            <div className="activeFrnd"></div>
                                        </div>
                                        <div className="img">
                                            <img src={img} alt="" />
                                            <div className="activeFrnd"></div>
                                        </div>
                                        <div className="img">
                                            <img src={img} alt="" />
                                            <div className="activeFrnd"></div>
                                        </div>
                                        <div className="img">
                                            <img src={img} alt="" />
                                            <div className="activeFrnd"></div>
                                        </div>
                                        <div className="img">
                                            <img src={img} alt="" />
                                            <div className="activeFrnd"></div>
                                        </div>
                                        <div className="img">
                                            <img src={img} alt="" />
                                            <div className="activeFrnd"></div>
                                        </div>
                                        <div className="img">
                                            <img src={img} alt="" />
                                            <div className="activeFrnd"></div>
                                        </div>
                                        <div className="img">
                                            <img src={img} alt="" />
                                            <div className="activeFrnd"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <LeftSideFriends />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <Conversation />
                </div>
                <div className="col-lg-3">
                    <h1>right info section</h1>
                </div>
            </div>
        </div>
    </div>
</div>
);
};

export default Home;