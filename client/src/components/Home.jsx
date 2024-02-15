import React from 'react';
import img from '../assets/Images/Untitled.jpg'
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { HiDotsCircleHorizontal } from "react-icons/hi";
const Home = () => {
return (
<div>
    <div className="leftSiteSection">
        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-lg-3" style={{background:"#1D2737", height:"auto"}}>
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

                            {/* ============== */}

                            <div className="row"
                                style={{paddingTop:"20px", height:"450px", overflow:"hidden", overflowY:"scroll"}}>
                                <div className="AddScroling">
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 activeFrndSection d-flex">
                                        <div className="img">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>Mohammad Al amin</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* chat converstation */}
                <div className="col-6 p-0">
                    <div className="container-fluid vh-100" style={{paddingTop:"20px", background:"#1D2737"}}>
                        <div className="row px-3">
                            <div className="borderAdding d-flex">
                            <div className="col-10 p-0 profileSecton abc d-flex">
                                <div className="img">
                                    <img src={img} alt="" />
                                    <div className="activeChat"></div>
                                </div>
                                <div className="text">
                                    <p>Mohammad Al amin</p>
                                </div>
                            </div>
                            <div className="col-2 p-0">
                                <IoCall style={{color:"#fff", marginRight:"10px", fontSize:"20px", cursor:"pointer"}} />
                                <FaVideo
                                    style={{color:"#fff", marginRight:"10px", fontSize:"20px", cursor:"pointer"}} />
                                <HiDotsCircleHorizontal
                                    style={{color:"#fff", marginRight:"10px", fontSize:"20px", cursor:"pointer"}} />
                            </div>
                            </div>

                            <div className="row">
                                <div className="col-12 msg">
                                    <div className="MsgImg">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="textSection">
                                        <p>Mohammad Al Amin</p>
                                        <p>Mohammad Al Amin is Connected</p>
                                        <p>3 days ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mainConv">
                                    <div className="img">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="message">
                                        <p>Hello how are you?</p>
                                    </div>
                                </div>

                                <div className="col-12 MymainConv">
                                    <div className="mayMainMsg d-flex">
                                        <div className="mymessage">
                                            <p>I am Fine good</p>
                                        </div>
                                        <div className="myimg">
                                            <img src={img} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mainConv">
                                    <div className="img">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="message">
                                        <p>Where are you from?</p>
                                    </div>
                                </div>
                                <div className="col-12 MymainConv">
                                    <div className="mayMainMsg d-flex">
                                        <div className="mymessage">
                                            <p>I am Fine good</p>
                                        </div>
                                        <div className="myimg">
                                            <img src={img} alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row pt-5">
                                <div className="col">
                                    <input style={{width:"80%", borderRadius:"20px"}} type="text" placeholder='Aa' name="" id="" />
                                </div>
                            </div>

                        </div>
                    </div>
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