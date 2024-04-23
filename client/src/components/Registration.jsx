import React, { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { RegestrationRequest } from '../apiRequest/apiRequest';
const Registration = () => {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate(); 

    const onRegistration = async ()=>{
        const userName = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        let photo ="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg"

        if(userName.length===0){
            toast.error("User Name Required !");
        }
        else if(email.length===0){
            toast.error("Email Required !");
        }
        else if(password.length===0){
            toast.error("Password Required !")
        }
        else{
            const res = await RegestrationRequest(userName, email, password, photo);
            console.log(res)
            if(res.data.status==="success"){
                toast.success(res['data']['message']);
                navigate("/login")
            }
            else(
                toast.error(res['data']['message'])
            )
        }
    }
    
return (
<div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12 p-0 justify-content-center">
                <div className="form text-center">
                    <h1>Sign Up</h1>
                    <p>Get your Chat App account now.</p>
                    <CiUser style={{marginRight:"8px", fontSize:"19px"}}/>
                    <input ref={usernameRef} type="text" placeholder='Enter username' /> <br />

                    <CiMail style={{marginRight:"8px",  fontSize:"19px"}}/>
                    <input ref={emailRef} type="text" placeholder='Enter your email' /> <br />

                    <CiLock style={{marginRight:"8px", fontSize:"19px"}}/>
                    <input ref={passwordRef} type="password" placeholder='Enter your password' /> <br />

                </div>
                <div className="btnSection">
                    <button onClick={onRegistration} className='btn mb-2'
                        style={{background:"#4eac6d", color:"white",fontFamily:"'Poppins', sans-serif",fontSize:"14px"}}>Sign
                        Up</button> <br />
                    <p style={{color:"#343A40", fontFamily:"'Poppins', sans-serif",fontSize:"14px"}}>Already have an
                        account ?
                        <span className='px-1'
                        style={{color:"#4eac6d", fontFamily:"'Poppins', sans-serif", fontSize:"14px"}}>Signin</span>
                    </p>
                </div>
            </div>
        <Toaster 
          position="bottom-center"
          reverseOrder={false}
        />
        </div>
    </div>
</div>
);
};

export default Registration;