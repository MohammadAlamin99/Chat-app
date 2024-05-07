import React, { useEffect, useRef, useState } from 'react';
import { getUserDetails, setUserDetails } from '../helper/sessionHelper';
import { updateProfileRequest, userDetailsRequest } from '../apiRequest/apiRequest';
import Header from './Header';
const EditProfile = () => {
  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const photoRef = useRef();

  const userInfo = getUserDetails();

  const [previewImage, setPreviewImage] = useState(null); 
  const updateHandler = async () => {
    const userName = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    let photo = userInfo.photo;

    if (photoRef.current.files.length > 0) {
      photo = await convertToBase64(photoRef.current.files[0]);
    }

    let result = await updateProfileRequest(email, userName, password, photo);
    setUserDetails({ ...userInfo, userName, email, photo });
    window.location.href="/profile"
  }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const [data, setData] = useState({});

  useEffect(()=>{
    (async()=>{
      let result = await userDetailsRequest();
      setData(result[0])
    })()
  },[])

  const handleChangeImg = (e) => {
    const file = e.target.files[0];

    if (file) {
      convertToBase64(file)
        .then((result) => {
          setPreviewImage(result); 
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <div>
        <Header/>
      <div className="container" style={{paddingTop:"90px"}}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="container-fluid">
                  <div className="row profileInside">
                    <img style={{ width: "148px" }} className="icon-nav-img-lg" src={previewImage || data.photo} alt="" />
                    <hr />
                    <div className="col-4 p-2">
                      <label>Profile Picture</label>
                      <input ref={photoRef} onChange={handleChangeImg} defaultValue={data.photo} placeholder="User Email" className="form-control animated fadeInUp" type="file" />
                    </div>
                    <div className="col-4 p-2">
                      <label>Email Address</label>
                      <input ref={emailRef} placeholder="User Email" readOnly defaultValue={data.email} className="form-control animated fadeInUp" type="email" />
                    </div>
                    <div className="col-4 p-2">
                      <label>user Name</label>
                      <input ref={userNameRef} placeholder="First Name" defaultValue={data.userName} className="form-control animated fadeInUp" type="text" />
                    </div>
                    <div className="col-4 p-2">
                      <label>Password</label>
                      <input ref={passwordRef} defaultValue={data.password} placeholder="User Password" className="form-control animated fadeInUp" type="password" />
                    </div>
                    <div className="col-4 p-2 ProfileUpdateBtn">
                      <button onClick={updateHandler} className="w-100 float-end animated fadeInUp rounded">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;


