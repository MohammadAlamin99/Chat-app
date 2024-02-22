import React from 'react';
import LeftSide from './LeftSide';
import Message from './Message';
import RighSilde from './RighSilde';
const Home = () => {
   
return (
<div>
    <div className="leftSiteSection">
        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-lg-3" style={{background:"#1D2737", height:"auto",boxShadow: "3px 3px 6px 0px #192131", zIndex:"999"}}>
                    <LeftSide/>
                </div>

               
                <div className="col-9 p-0"style={{boxShadow: "3px 3px 6px 0px #192131",zIndex:'1'}}>
                    <Message/>
                </div>

                
                <div className="col-lg-3" style={{ background:"#1D2737"}}>
                    <RighSilde/>
                </div>
            </div>
        </div>
    </div>
</div>
);
};

export default Home;