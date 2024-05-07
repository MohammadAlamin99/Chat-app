import React, { useEffect } from 'react';
import { SearchingFriends } from '../apiRequest/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { setFriends } from '../redux/state-slice/searchFriends-slice';
import { getUserDetails } from '../helper/sessionHelper';

const NewsfeedRight = () => {

    let data = getUserDetails();
    let senderId = data._id;
    let senderName = data.userName;


    useEffect(()=>{
        (async()=>{
            let result = await SearchingFriends()
            dispatch(setFriends(result))
        })()
    },[0])
    const SearchFriends = useSelector((state)=>state.searching.friends);
    const dispatch = useDispatch();
    return (
        <>
                <div className="contact"style={{position:"fixed"}}>
                <h3>Contact</h3>
                    {
                        SearchFriends.length>0?(
                            SearchFriends.filter(f=>f._id!==senderId).map((item, i)=>{
                        return(
                            <div key={i} className="friendArea d-flex mb-2">
                                    <div className="img">
                                        <img src={item.photo} alt="" />
                                    </div>
                                    <div className="text">
                                        <h6>{item['userName']}</h6>
                                    </div>
                            </div>  
                                )
                        })
                        ):( <p style={{textAlign:"center", fontFamily:"'Poppins', sans-serif", fontSize:"13px", color:"#495057"}}>No Friends</p>)
                    }
                </div>
        </>
    );
};

export default NewsfeedRight;