import React, { useState } from 'react';
import { getUserDetails } from '../helper/sessionHelper';
import NewsfeedLeft from './NewsfeedLeft';
import NewsfeedHome from './NewsfeedHome';
import NewsfeedRight from './NewsfeedRight';
import Header from './Header';

const Newsfeed = () => {
    let myInfo = getUserDetails();

 

    return (
        <div>
            <Header/>
          <div className="bodysection">
            <div className="container-fluid">
                <div className="row" style={{paddingTop:"75px"}}>
                    <div className="col-lg-3">
                       <NewsfeedLeft myInfo={myInfo}/>
                    </div>
                    <div className="col-lg-6 addScrolling">
                       <NewsfeedHome myInfo={myInfo}/>
                    </div>
                    <div className="col-lg-3">
                        <NewsfeedRight/>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Newsfeed;