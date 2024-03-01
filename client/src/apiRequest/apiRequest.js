import axios from "axios";
import { getToken } from "../helper/sessionHelper";

let BaseURL = "http://localhost:5000";
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
export async function MessageSend(senderId,senderName,receverId,massage){
    try {
        let reqBody = {senderId:senderId,senderName:senderName,receverId:receverId,massage:massage}
        let result = await axios.post(BaseURL+'/api/v1/message',reqBody,Headers);
        let data = result.data['data']
        return data;
    } catch (e) {
        return false 
    }
}

 export async function RegestrationRequest(userName,email,password,photo){
    try {
        let reqBody = {userName:userName, email:email, password:password,photo:photo};
        let result = await axios.post(BaseURL+'/api/v1/registration', reqBody);
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
