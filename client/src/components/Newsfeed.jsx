import React from 'react';
import { TiMessages } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from 'react-icons/fa';
import { LiaHomeSolid } from "react-icons/lia";
import { getUserDetails } from '../helper/sessionHelper';
import NewsfeedLeft from './NewsfeedLeft';
import NewsfeedHome from './NewsfeedHome';
import NewsfeedRight from './NewsfeedRight';
const Newsfeed = () => {
    let myInfo = getUserDetails();
    return (
        <div>
          <div className="container-fluid">
            <div className="row" style={{paddingTop:"8px"}}>
                <div className="col-lg-3">
                    <div className="news_img d-flex">
                        <img src={"https://img.freepik.com/free-icon/share_318-197141.jpg"} alt="" />

                        <div className="col-lg-12 searchSection">
                <FaSearch className='serch' />
                <input type="text" className="form-control px-5" id="exampleFormControlInput1" placeholder="Search"
                    style={{color:"#495057", background:"#fff",width:"255px"}} />
            </div>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="news_logo">
                        <LiaHomeSolid style={{fontSize:"32px", color:"#495057", cursor:"pointer", marginRight:"60px"}}/>
                        <TiMessages style={{fontSize:"32px", color:"#495057", cursor:"pointer", marginRight:"60px"}}/>
                        <IoMdNotificationsOutline style={{fontSize:"32px", color:"#495057", cursor:"pointer", marginRight:"60px"}}/>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="myProfile">
                    <img src={myInfo.photo} alt="" />
                    <div className="myActive"></div>

                    </div>
                </div>
            </div>
          </div>

          <div className="bodysection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                       <NewsfeedLeft myInfo={myInfo}/>
                    </div>
                    <div className="col-lg-6">
                       <NewsfeedHome myInfo={myInfo}/>
                    </div>
                    <div className="col-lg-3">
                        <NewsfeedRight/>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Newsfeed;