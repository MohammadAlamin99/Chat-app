import React from 'react';
import img from '../assets/Images/Untitled.jpg'
const LeftSideFriends = () => {
return (
<div>
    <div className="row" style={{paddingTop:"20px",}}>
        <div className="AddScroling">
            <div className="col-lg-12 activeFrndSection d-flex">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <p>Mohammad Al amin</p>
                </div>
            </div>
            <div className="col-lg-12 activeFrndSection d-flex">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <p>Mohammad Al amin</p>
                </div>
            </div>
            <div className="col-lg-12 activeFrndSection d-flex">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <p>Mohammad Al amin</p>
                </div>
            </div>
            <div className="col-lg-12 activeFrndSection d-flex">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <p>Mohammad Al amin</p>
                </div>
            </div>
            <div className="col-lg-12 activeFrndSection d-flex">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <p>Mohammad Al amin</p>
                </div>
            </div>
        </div>

    </div>
</div>
);
};

export default LeftSideFriends;