import Swal from 'sweetalert2'
import React, { useEffect, useRef, useState } from 'react';
import { TbPhoto } from "react-icons/tb";
import { createCommentsRequest, deletePostRequest, getCommentsRequest, getProfilePostRequest, imagePostCreateRequest, likeAndDislikeRequest, postCreatRequest, updateProfileRequest} from '../apiRequest/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { setPost } from '../redux/state-slice/post-slice';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { setComment } from '../redux/state-slice/comment-slice';
import { getUserDetails } from '../helper/sessionHelper';
import { MdDelete } from "react-icons/md";
import Header from './Header';
import { Link, NavLink } from 'react-router-dom';
import BarLoader  from "react-spinners/BarLoader";
import moment from 'moment'
import { ImCamera } from "react-icons/im";

const Profile = () => {
    const dispatch = useDispatch();
    const getPost = useSelector((state) => state.getPost.post);
    const getComment = useSelector((state)=> state.getComment.comment);
    const myInfo = getUserDetails()
    const postRef = useRef();
    const [showCommentBox, setShowCommentBox] = useState({}); 
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        (async () => {
            setLoader(true)
            let result = await getProfilePostRequest(myInfo._id);
            setLoader(false)
            dispatch(setPost(result))
        })()
    }, [])

    const createPostHandler = async () => {
        const post = postRef.current.value;
        if (post.length !== 0) {
            setLoader(true)
            await postCreatRequest(myInfo._id, post);
            setLoader(false)
            location.reload()
        }

    }

    const postImgHandler = async (e) => {
        const post = postRef.current.value;
        const formData = new FormData();
        formData.append('senderId', myInfo._id);
        formData.append('post', post);
        formData.append('image', e.target.files[0]);
        setLoader(true)
        await imagePostCreateRequest(formData);
        setLoader(false)
        location.reload()

    }

    const LikeHandler = async (postId) => {
        await likeAndDislikeRequest(postId, myInfo._id);
        setLoader(true)
        let result = await getProfilePostRequest(myInfo._id);
        setLoader(false)
        dispatch(setPost(result))
    }

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

        const deletePostHandler = async(id)=>{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then(async(result) => {
                if (result.isConfirmed) {
                    
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                    setLoader(true)
                    await deletePostRequest(id, myInfo._id);
                    window.location.reload();
                    setLoader(false)
                }
              });
        }
        const photoRef = useRef();

        // profile changeing
        const updateHandler = async () => {
            let photo = photoRef.current.files[0];
        
        
              const formData = new FormData();
              formData.append('photo', photo);
              
              let result = await updateProfileRequest(formData);
             window.location.reload()
          }

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
                        <img  src={`/documents/${myInfo.photo}`}alt="" />
                    </div>
                    <div className="myInfo">
                        <h1>{myInfo.userName}</h1>
                            <h3> {myInfo.email}</h3>
                        <input ref={photoRef} onChange={updateHandler} type="file" id="myFile" name="filename"/>

                        <label htmlFor="myFile">
                        <ImCamera style={{marginBottom:"8px", marginLeft:"6px"}}/>
                        </label>
                    </div>
                </div>
                <div className="container pt-3">
       
            <div className="myProfile d-flex" style={{ cursor: "pointer", justifyContent:"space-between"}}>
                <img src={myInfo.photo} alt=""/>
                <textarea ref={postRef} type="text" placeholder='Whats on your mind?'
                    style={{ width: "450px", height: "39px", borderRadius: "10px", marginLeft: "13px", marginTop: "7px" }} />
                <div className="file customHover">
                    <input onChange={postImgHandler} type="file" id="myFile" name="filename" />
                    <label htmlFor="myFile">
                        <TbPhoto style={{ color: "#41B35D", fontSize: "37px", marginTop: "7px", marginLeft: "8px"}} /> </label>
                </div>
                <button onClick={createPostHandler} 
            style={{ width: "72px", height: "39px", marginTop: "8px", background:"#26B7D4", color:"white", borderRadius:"7px", border:"none"}}>Post</button>
            </div>

            {getPost.length > 0 ? (
                getPost.map((item, i) => {
                    const isLiked = item.like.includes(myInfo._id);
                    return (
                        <div key={i} className="postBody">
                            <div className="postHead d-flex mt-2">
                                <img style={{ width: "40px", height: "40px", borderRadius: "50%" }} src={item.senderInfo.photo} alt="" />
                                <p> {item.senderInfo.userName}</p>
                                <MdDelete style={{cursor:"pointer", fontSize:"19px", marginLeft:"15px", marginTop:"3px", color:"#E42645"}} onClick={()=> deletePostHandler(item._id)}/>
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
                                            <img style={{ width: "30px", height: "30px", borderRadius: "50%" }} src={item.senderInfo.photo} alt="" />
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

export default Profile;