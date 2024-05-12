

import axios from "axios";
import { getToken } from "../helper/sessionHelper";

let BaseURL = "http://localhost:5000";
// https://share-media-application.onrender.com/
const Headers ={headers:{"token":getToken()}};

// Friends section
export  async function SearchingFriends() {
    try {
        let result = await axios.get(BaseURL+'/api/v1/userFriends',Headers);
        let data = result.data['data']
        return data;
    }
    catch (e) {
        return false
    }
 }
// sending Massage api request
export async function MessageSend(senderId,senderName,receverId,message,image){
    try {
        let reqBody = {senderId:senderId,senderName:senderName,receverId:receverId,message:message}
        let result = await axios.post(BaseURL+'/api/v1/message',reqBody,Headers);
        let data = result.data['data']
        return data;
    } catch (e) {
        return false 
    }
}
// sending imgae api request
export async function imageMessageSendRequest(formData){
    try {
        let result = await axios.post(BaseURL+'/api/v1/sendImage',formData,Headers);
        return result;
    } catch (e) {
        return false 
    }
}

// creat post api reqest
export async function postCreatRequest(senderId,post,image){
    try {
        let reqBody = {senderId:senderId,post:post,image:image}
        let result = await axios.post(BaseURL+'/api/v1/postCreate',reqBody,Headers);
        let data = result.data['data']
        return data;
    } catch (e) {
        return false 
    }
}
export async function imagePostCreateRequest(formData){
    try {
        let result = await axios.post(BaseURL+'/api/v1/creatImagePost',formData,Headers);
        return result;
    } catch (e) {
        return false 
    }
}


export async function getPostRequest(){
    try {
        let result = await axios.get(BaseURL+'/api/v1/findPost',Headers);
        let data = result.data['message']
        return data;
    } catch (e) {
        return false 
    }
}
// prolife post get request
export async function getProfilePostRequest(id){
    try {
        let result = await axios.get(BaseURL+'/api/v1/profilePostRead/'+id,Headers);
        let data = result.data['message']
        return data;
    } catch (e) {
        return false 
    }
}
// Update post request

export async function postUpdateRequest(id, senderId, post){
    try {
        let reqBody = {senderId:senderId, post:post}
        let result = await axios.get(BaseURL+'/api/v1/postUpdate/'+id,reqBody,Headers);
        return result;
    } catch (e) {
        return false 
    }
}
// Post delete request

export async function deletePostRequest(id, senderId){
    try {
        let result = await axios.delete(BaseURL+'/api/v1/postDelete/'+id+'/'+senderId,Headers);
        return data;
    } catch (e) {
        return false 
    }
}

// update profile
export async function updateProfileRequest(formData){
    try {
        let result = await axios.post(BaseURL+'/api/v1/profileUpdate',formData,Headers);
        return result;
    } catch (e) {
        return false 
    }
}
// get user details
export async function userDetailsRequest(){
    try {
        let result = await axios.get(BaseURL+'/api/v1/userDetails',Headers);
        let data = result.data['data']
        return data;
    } catch (e) {
        return false 
    }
}
// profile for friends details
export async function friendsProfileRequest(id){
    try {
        let result = await axios.get(BaseURL+'/api/v1/friendProfileDetails/'+id,Headers);
        let data = result.data['data']
        return data;
    } catch (e) {
        return false 
    }
}


// like and dislike api call
export async function likeAndDislikeRequest(id, senderId){
    try {
        let reqBody = {senderId:senderId}
        let result = await axios.put(BaseURL+'/api/v1/postLike/'+id,reqBody,Headers);
        let data = result.data['message']
        return data;
    } catch (e) {
        return false 
    }
}
// comments create api request
export async function createCommentsRequest(senderId,postId,comment){
    try {
        let reqBody = {senderId:senderId,postId:postId,comment:comment}
        let result = await axios.post(BaseURL+'/api/v1/comment',reqBody,Headers);
        let data = result.data['message']
        return data;
    } catch (e) {
        return false 
    }
}

// comments get api request

export async function getCommentsRequest(id){
    try {
        let result = await axios.get(BaseURL+'/api/v1/readComment/'+id,Headers);
        let data = result.data['message']
        return data;
    } catch (e) {
        return false 
    }
}


// get Massage api request
export async function getMessageRequiest(id){
    try {
        let result = await axios.get(BaseURL+'/api/v1/getMessage/'+id,Headers);
        let data = result.data['message'];
        return data;
    } catch (e) {
        return false 
    }
}

 export async function RegestrationRequest(userName,email,password,photo){
    try {
        let reqBody = {userName:userName, email:email, password:password,photo:photo};
        let result = await axios.post(BaseURL+'/v1/registration', reqBody);
        return result;
    } catch (e) {
        return false;
    }
 }

 export async function LoginRequest(email, password){
    try {
        let reqBody = {email:email, password:password};
        let result = await axios.post(BaseURL+'/api/v1/login', reqBody);
        return result
    } catch (e) {
        return false;
    }
 }
