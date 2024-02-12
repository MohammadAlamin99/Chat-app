import React from 'react';
import { CiUser } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { BsChatText } from "react-icons/bs";
const Registration = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-0 justify-content-center">  
                   <div className="logo">
                        <h1 className='text-center'><p style={{color:"#343A40"}}> <BsChatText /></p>Chat App</h1>
                   </div>
                   <div className="form text-center">
                        <h1>Sign Up</h1>
                        <p>Get your Chat App account now.</p>
                        <CiUser />
                       <input type="text" placeholder='Enter username' /> <br />
                            <AiOutlineMail />
                            <input type="text" placeholder='Enter your email' /> <br />
                            <MdLockOutline />
                            <input type="password" placeholder='Enter your password' /> <br />
                        </div>
                            <div className="btnSection">
                                
                        <button className='btn mb-2' style={{background:"#7269EF", color:"white",fontFamily:"'Poppins', sans-serif",fontSize:"14px"}}>Sign Up</button> <br />
                            <p style={{color:"#343A40", fontFamily:"'Poppins', sans-serif",fontSize:"14px"}}>Already have an account ? 
                            <span className='px-1' style={{color:"#7269EF", fontFamily:"'Poppins', sans-serif", fontSize:"14px"}}>Signin</span></p>
                     
                            </div>

                        </div>
                       </div>
                    </div>
                </div>
           
    );
};

export default Registration;