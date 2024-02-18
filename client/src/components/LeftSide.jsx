import React, { useEffect, useState } from 'react';
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';
import img from '../assets/Images/Untitled.jpg'
import { SearchingFriends } from '../apiRequest/apiRequest';
const LeftSide = () => {
const[data, setData] = useState([]);

useEffect(()=>{
    (async()=>{
        let result = await SearchingFriends();
        setData(result)
    })()
},[0])

return (
<div>
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
                <input type="text" className="form-control px-5" id="exampleFormControlInput1" placeholder="Search"
                    style={{color:"#fff", background:"#192131", border:"none"}} />
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


            <div className="row leftScroll" style={{paddingTop:"20px", height:"450px", overflowY:"scroll"}}>
                <div className="AddScroling">
                    {
                    data.length>0?(
                    data.map((item, i)=>{
                    return(
                    <div key={i} className="col-lg-12 activeFrndSection d-flex">
                        <div className="img">
                            <img src={item.photo} alt="" />
                        </div>
                        <div className="text">
                            <p>{item['userName']}</p>
                        </div>
                    </div>
                    )
                    })
                    ):( <p>No Friends</p>)
                    }



                </div>

            </div>
        </div>
    </div>
</div>
);
};

export default LeftSide;