import React from 'react';
import { IoIosLogOut } from "react-icons/io";
import { FiUser } from "react-icons/fi";
const NewsfeedLeft = (props) => {
    const{myInfo} = props;
    return (
        <div>
            <div className="myProfile d-flex" style={{cursor:"pointer"}}>
                    <img src={myInfo.photo} alt="" />
                    <p>{myInfo.userName}</p>
                </div>

                <div className="logOut d-flex"style={{cursor:"pointer", marginLeft:"52px"}}>
                <FiUser style={{fontSize:"25px", color:"#495057", cursor:"pointer", marginRight:"9px"}}/>
                    <p>Friends</p>
                </div>
                <div className="logOut d-flex"style={{cursor:"pointer", marginLeft:"52px"}}>
                <IoIosLogOut style={{fontSize:"25px", color:"#495057", cursor:"pointer", marginRight:"9px"}}/>
                    <p>Log out</p>
                </div>
        </div>
    );
};

export default NewsfeedLeft;