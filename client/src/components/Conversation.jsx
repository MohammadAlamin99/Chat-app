import React from 'react';
import img from '../assets/Images/Untitled.jpg'
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { HiDotsCircleHorizontal } from "react-icons/hi";
const Conversation = () => {
return (
<div>
    <div className="container vh-100"  style={{paddingTop:"20px", background:"#1D273C"}}>
    <div className="row px-3">
        <div className="col-lg-10 p-0 profileSecton abc d-flex">
            <div className="img">
                <img src={img} alt="" />
                <div className="activeChat"></div>
            </div>
            <div className="text">
                <p>Mohammad Al amin</p>
            </div>
        </div>
        <div className="col-lg-2 p-0">
        <IoCall style={{color:"#fff", marginRight:"10px", fontSize:"20px", cursor:"pointer"}}/>
        <FaVideo style={{color:"#fff", marginRight:"10px", fontSize:"20px", cursor:"pointer"}}/>
        <HiDotsCircleHorizontal style={{color:"#fff", marginRight:"10px", fontSize:"20px", cursor:"pointer"}}/>
        </div>

        <div className="row">
        <div className="col-lg-12 msg">
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
        <div className="col-lg-12 mainConv">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="message">
                <p>Hello how are you?</p>
            </div>
        </div>

        <div className="col-lg-12 MymainConv">
           <div className="mayMainMsg d-flex">
           <div className="mymessage">
                <p>I am Fine good</p>
            </div>
            <div className="myimg">
                <img src={img} alt="" />
            </div>
           </div>
        </div>
        <div className="col-lg-12 mainConv">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="message">
                <p>Where are you from?</p>
            </div>
        </div>
        <div className="col-lg-12 MymainConv">
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

    </div>
    </div>  
</div>
);
};

export default Conversation;