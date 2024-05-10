import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { RegestrationRequest } from '../apiRequest/apiRequest';
import BarLoader  from "react-spinners/BarLoader";
const Registration = () => {
    const [loader, setLoader] = useState(false);
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate(); 

    const onRegistration = async ()=>{
        const userName = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        let photo =""

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
            setLoader(true)
            const res = await RegestrationRequest(userName, email, password, photo);
            setLoader(false)
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
    {
        loader?(
            <BarLoader
            color="#26B7D4"
            height={4}
            width={2000}
            />
        ):(
            <div className="container">
        <div className="row">
            <div className="col-lg-12 p-0 justify-content-center">
                <div className="form text-center">
                    <h1>Sign Up</h1>
                    <p>Get your Share Media account now.</p>
                    <CiUser style={{marginRight:"8px", fontSize:"19px"}}/>
                    <input ref={usernameRef} type="text" placeholder='Enter username' /> <br />

                    <CiMail style={{marginRight:"8px",  fontSize:"19px"}}/>
                    <input ref={emailRef} type="text" placeholder='Enter your email' /> <br />

                    <CiLock style={{marginRight:"8px", fontSize:"19px"}}/>
                    <input ref={passwordRef} type="password" placeholder='Enter your password' /> <br />

                </div>
                <div className="btnSection">
                    <button onClick={onRegistration} className='btn mb-2'
                        style={{background:"#26B7D4", color:"white",fontFamily:"'Poppins', sans-serif",fontSize:"14px"}}>Sign
                        Up</button> <br />
                    <p style={{color:"#343A40", fontFamily:"'Poppins', sans-serif",fontSize:"14px"}}>Already have an
                        account ?
                       <Link to={"/login"} style={{textDecoration:"none"}}><span className='px-1'
                        style={{color:"#26B7D4", fontFamily:"'Poppins', sans-serif", fontSize:"14px"}}>Signin</span></Link>
                    </p>
                </div>
            </div>
        <Toaster 
          position="bottom-center"
          reverseOrder={false}
        />
        </div>
    </div>
        )
    }
</div>
);
};

export default Registration;