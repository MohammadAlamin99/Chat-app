import React from 'react';
import { CiUser } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { BsChatText } from "react-icons/bs";
const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-0 justify-content-center">  
                   <div className="form text-center">
                        <h1>Sign In</h1>
                        <p>Sign in to continue to Chat App.</p>
                            <AiOutlineMail />
                            <input type="text" placeholder='Enter your email' /> <br />
                            <MdLockOutline />
                            <input type="password" placeholder='Enter your password' /> <br />
                        </div>
                            <div className="btnSection">
                                
                        <button className='btn mb-2' style={{background:"#7269EF", color:"white",fontFamily:"'Poppins', sans-serif",fontSize:"14px",width:"68%"}}>Sign Up</button> <br />
                            <p style={{color:"#343A40", fontFamily:"'Poppins', sans-serif",fontSize:"14px"}}>Don't have an account ? 
                            <span className='px-1' style={{color:"#7269EF", fontFamily:"'Poppins', sans-serif", fontSize:"14px"}}>Signup now</span></p>
                     
                            </div>

                        </div>
                       </div>
                    </div>
                </div>
           
    );
};

export default Login;