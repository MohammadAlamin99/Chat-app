import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoChevronUpOutline } from "react-icons/io5";
const RighSilde = (props) => {

    const{currentFriend, getMessage} = props;
    const [open, setOpen] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [img, setImg] = useState(false);
    const onImageHandler = ()=>{
        setImg(!img)
    }
    const onPrivacy = ()=>{
        setPrivacy(!privacy)
    }
    const onClickHandler = ()=>{
        setOpen(!open)
    }
    return (
        <div>
            <div className="row vh-100">
                <div className="col-12">
                        <div className="Right-img">
                            <img src={currentFriend.photo} alt="" />
                        </div>              

                        <div className="rightName">
                            <p>{currentFriend.userName}</p>
                        </div>

                        <div className="customChat" >
                            <div className="mainChat d-flex justify-content-between" onClick={onClickHandler}>
                                <p>Custom Chat</p>
                               {
                                open?(<span><IoChevronUpOutline style={{fontSize:"13px"}}/></span>)
                                :(<span><MdOutlineKeyboardArrowDown style={{fontSize:"18px"}}/></span>)
                               }
                            </div>
                            {open && <h6 className='text-black'>....</h6>}
                        </div>

                        <div className="customChat" >
                            <div className="mainChat d-flex justify-content-between" onClick={onPrivacy}>
                                <p>Privacy and Support</p>
                                {
                                privacy?(<span><IoChevronUpOutline style={{fontSize:"13px"}}/></span>)
                                :(<span><MdOutlineKeyboardArrowDown style={{fontSize:"18px"}}/></span>)
                               }
                            </div>
                            {privacy && <h6 className='text-black'>....</h6>}
                        </div>


                        <div className="customChat shareMedia" >
                            <div className="mainChat d-flex justify-content-between" onClick={onImageHandler}>
                                <p>Shared Media</p>
                                {
                                img?(<span><IoChevronUpOutline style={{fontSize:"13px"}}/></span>)
                                :(<span><MdOutlineKeyboardArrowDown style={{fontSize:"18px"}}/></span>)
                               }
                            </div>
                            {img && 
                                <div className="sharedImg">
                                  {
                                    getMessage.length>0?(
                                        getMessage.map((item, i)=>{
                                            return(
                                                <img key={i} src={`/documents/${item.image}`} alt="" />
                                            )
                                        })
                                    ):(<p style={{textAlign:"center", fontFamily:"'Poppins', sans-serif", fontSize:"13px", color:"#495057"}}>No Image</p>)
                                  }
                                </div>
                            }
                        </div>

                </div>
            </div>
        </div>
    );
};

export default RighSilde;