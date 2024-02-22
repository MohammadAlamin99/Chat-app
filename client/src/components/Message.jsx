import React, { useState } from 'react';
import img from '../assets/Images/Untitled.jpg'
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { TbPhoto } from "react-icons/tb";
import EmojiPicker from 'emoji-picker-react';
const Message = () => {
    const [isEmoji , setIsemoji] = useState(false)
    const onEmoji = ()=>{
        setIsemoji(!isEmoji)
    }
return (
<div>
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
                    <FaVideo style={{color:"#fff", marginRight:"10px", fontSize:"20px", cursor:"pointer"}} />
                    <HiDotsCircleHorizontal 
                        style={{color:"#fff", marginRight:"10px", fontSize:"20px", cursor:"pointer"}} />
                </div>
            </div>

            <div className="msgInbox">
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
                            <div className="msg">
                                <p>Hello how are you?</p>
                            </div>
                            <div className="im">
                                <img src={img} alt="" />
                            </div>
                            <div className="date">
                                <label>2 Jan 2024</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mainConv">
                        <div className="img">
                            <img src={img} alt="" />
                        </div>
                        <div className="message">
                            <div className="msg">
                                <p>Hello how are you?</p>
                            </div>
                            <div className="im">
                               
                            </div>
                            <div className="date">
                                <label>2 Jan 2024</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mainConv">
                        <div className="img">
                            <img src={img} alt="" />
                        </div>
                        <div className="message">
                            <div className="msg">
                                <p>Hello how are you?</p>
                            </div>
                            <div className="im">
                                <img src={img} alt="" />
                            </div>
                            <div className="date">
                                <label>2 Jan 2024</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mainConv">
                        <div className="img">
                            <img src={img} alt="" />
                        </div>
                        <div className="message">
                            <div className="msg">
                                <p>Hello how are you?</p>
                            </div>
                            
                            <div className="date">
                                <label>2 Jan 2024</label>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 MymainConv">
                            <div className="mymessage">
                                <div className="mymsg">
                                    <p>I am Fine, good</p>
                                </div>
                                <div className="img">
                                  
                                </div>
                                <div className="date">
                                    <label>2 Jan 2024</label>
                                </div>
                            </div>
                            <div className="myimg">
                                <img src={img} alt="" />
                            </div>
                    </div>
                    <div className="col-12 MymainConv">
                            <div className="mymessage">
                                <div className="mymsg">
                                    <p>I am Fine, good</p>
                                </div>
                                <div className="img">
                                   
                                </div>
                                <div className="date">
                                    <label>2 Jan 2024</label>
                                </div>
                            </div>
                            <div className="myimg">
                                <img src={img} alt="" />
                            </div>
                    </div>

                </div>
            </div>
            <div className="row pt-3">
                <div className="col-12 d-flex full">
                    <div className="file customHover">
                        <input type="file" id="myFile" name="filename" />
                        <div className="picHover">
                            Add Image
                        </div>
                        <label htmlFor="myFile"> <TbPhoto style={{marginBottom:"11px"}}/> </label>   
                    </div>


                   <div className="texArea">
                        <input type="text" placeholder='Aa' name="" id="" />
                   </div>

                   <div className="emoji" onClick={onEmoji}>
                    🙂
                   </div>
                 
                   <div className="sendFile">
                    ❤
                   </div>
                  <div className="mainEmoji">
                  <div className="emoji-section">
                   {isEmoji && <EmojiPicker className='emojiPicker'/>}
                   </div>
                  </div>
                </div>
            </div>

        </div>
    </div>
</div>
);
};

export default Message;