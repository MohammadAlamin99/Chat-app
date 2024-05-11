
import Swal from 'sweetalert2'
import React, { useEffect, useRef, useState } from 'react';
import { TbPhoto } from "react-icons/tb";
import { createCommentsRequest, deletePostRequest, friendsProfileRequest, getCommentsRequest, getProfilePostRequest, imagePostCreateRequest, likeAndDislikeRequest, postCreatRequest, updateProfileRequest} from '../apiRequest/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { setPost } from '../redux/state-slice/post-slice';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { setComment } from '../redux/state-slice/comment-slice';
import { getUserDetails } from '../helper/sessionHelper';
import Header from './Header';
import BarLoader  from "react-spinners/BarLoader";
import moment from 'moment'
import { useParams } from 'react-router-dom';

const FriendsProfile = () => {
    const dispatch = useDispatch();
    const getPost = useSelector((state) => state.getPost.post);
    const getComment = useSelector((state)=> state.getComment.comment);
    const getDetails = useSelector((state)=> state.getDetails.details);
    const myInfo = getUserDetails()
    const [showCommentBox, setShowCommentBox] = useState({}); 
    const [loader, setLoader] = useState(false);

   const {id} = useParams();

    useEffect(() => {
        (async () => {
            setLoader(true)
            let result = await getProfilePostRequest(id);
            setLoader(false)
            dispatch(setPost(result))
        })()
    }, [])

    const [friendInf, setFriendInf] = useState([])

    useEffect(()=>{
        (async()=>{
            let result = await friendsProfileRequest(id);
            setFriendInf(result[0])
        })()
    },[0])



    const LikeHandler = async (postId) => {
        await likeAndDislikeRequest(postId, myInfo._id);
        let result = await getProfilePostRequest(id);
        dispatch(setPost(result));
    };
    
    const toggleCommentBox = async (postId) => {
        setShowCommentBox(prevState => ({
            ...prevState,
            [postId]: !prevState[postId] 
        }));
    
        try {
            const result = await getCommentsRequest(postId);
            dispatch(setComment(result))
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };
    

// create comment
    const commentRef = useRef();

        const commentHandler = async (postId)=>{
            const comment = commentRef.current.value;
            await createCommentsRequest(myInfo._id, postId, comment);
            // get comment request
            let info = await getCommentsRequest(postId);
                dispatch(setComment(info))
        };

      
  
    return (
        <>
            {
                loader?(
                    <BarLoader
                    color="#26B7D4"
                    height={4}
                    width={2000}
                    />
                ):(
                    <div>
            <Header/>
            <div className="container-fluid" style={{paddingTop:"80px"}}>
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                    <div className="container">
            <div className="row">
                <div className="col-lg-12 d-flex">
                    <div className="profileSection d-flex">
                        <img  src={`/documents/${friendInf['photo']}`}alt="" />
                    </div>
                    <div className="myInfo">
                        <h1>{friendInf.userName}</h1>
                            <h3> {friendInf.email}</h3>
                    </div>
                </div>
                <div className="container pt-5">
       
           

            {getPost.length > 0 ? (
                getPost.map((item, i) => {
                    const isLiked = item.like.includes(myInfo._id);
                    return (
                        <div key={i} className="postBody">
                            <div className="postHead d-flex mt-2">
                                <img style={{ width: "40px", height: "40px", borderRadius: "50%" }} src={`/documents/${item.senderInfo.photo}`} alt="" />
                                <p> {item.senderInfo.userName}</p>
                            </div>
                            <div className="createpost">
                                <p>{item.post}</p>
                            </div>
                            <span>{moment(item.createdDate).format('LL')}</span>
                                {/* delete post */}

                            <img style={{ width: "100%", borderRadius: "5px", marginTop: "2px", cursor: "pointer", marginLeft: "5px", height: "auto", marginBottom: "7px" }} src={`/documents/${item.image}`} alt="" />
                            <div className="likeComment d-flex" style={{ marginTop: "8px" }}>
                                <div onClick={() => LikeHandler(item._id)} className="like d-flex" style={{ cursor: "pointer", marginRight: "13px" }}>
                                    {isLiked ? <IoIosHeart style={{ color: "red", fontSize: "25px" }} /> : <IoIosHeartEmpty style={{ color: "#495057", fontSize: "25px" }} />}
                                    <p>Like {item.like.length}</p>
                                </div>
                                <div onClick={() => toggleCommentBox(item._id)} className="like d-flex" style={{ cursor: "pointer" }}>
                                    <AiOutlineMessage style={{ color: "#495057", fontSize: "23px" }} />
                                    <p>Comment</p>
                                </div> 
                            </div>
                            {showCommentBox[item._id] && (
                                    <div className="commentBox">
                                        {
                                            getComment.length>0?(
                                                getComment.map((item, i)=>{
                                                    return(
                                                      < div key={i}>
                                                      <div className="postHead d-flex mt-2">
                                            <img style={{ width: "30px", height: "30px", borderRadius: "50%" }} src={`/documents/${item.senderInfo.photo}`} alt="" />
                                           <div className="namandTime">
                                           <p className='mb-0'>{item.senderInfo.userName}</p>
                                            <h6>{moment(item.createdDate).format('LL')}</h6>
                                           </div>
                                        </div>
                                        <div className="comment mt-1 mb-2">
                                            <h6>{item.comment}</h6>
                                        </div>
                                                      </div>  
                                                    )
                                                })
                                            ):("no comment")
                                        }
                                        <div className="comment">
                                        <input ref={commentRef} type="text" placeholder='Write a comment...'/>
                                            <IoMdSend onClick={()=> commentHandler(item._id)} 
                                            style={{cursor:"pointer", fontSize:"23px", marginLeft:"10px", marginBottom:"6px"}}/>
                                        </div>
                                    </div>
                                )}
                        </div>
                    )
                })
            ) : ("No post available")}
        
          </div>
            </div>
           </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
          

          
        </div>
                )
            }
        </>
    );
};

export default FriendsProfile;