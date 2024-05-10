import React, { useEffect } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaSearch } from 'react-icons/fa';
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { userDetailsRequest } from '../apiRequest/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { setDetails } from '../redux/state-slice/userDetails-slice';
const Header = () => {
    const dispatch = useDispatch();
    const getDetails = useSelector((state)=> state.getDetails.details);
    useEffect(()=>{
        (async()=>{
            let result = await userDetailsRequest();
            dispatch(setDetails(result[0]))
        })()
    },[0])
    return (
        <div>
            <div className="container-fluid" style={{position:"fixed", zIndex:"9999", background:"#fff"}}>
           <div className="row mainHeader" style={{paddingTop:"8px"}}>
                <div className="col-lg-3">
                    <div className="news_img d-flex">
                       <Link to={"/"}> <img src={"https://img.freepik.com/free-icon/share_318-197141.jpg"} alt="" /></Link>

                        <div className="col-lg-12 searchSection">
                <FaSearch className='serch' />
                <input type="text" className="form-control px-5" id="exampleFormControlInput1" placeholder="Search"
                    style={{color:"#495057", background:"#fff",width:"255px"}} />
            </div>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="news_logo">
                        <a href="/"><IoHome className='home' /></a>
                        <a href="/profile"><FaUserCircle className='home'/></a>
                        <a href="/message"><IoChatbubblesSharp className='home'/></a>
                    </div>
                </div>
                <div className="col-lg-3">
                    <Link to={"/profile"} style={{textDecoration:"none"}}>
                    <div className="myProfile d-flex" style={{cursor:"pointer"}}>
                    <img src={`/documents/${getDetails['photo']}`} alt="" />
                    <p style={{textDecoration:"none"}}>{getDetails['userName']}</p>
                    <div className="myActive"></div>
                    </div>
                    </Link>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Header;