import axios from "axios";

let BaseURL = "http://localhost:5000";

// Friends section
export  async function SearchingFriends() {
    try {
        let result = await axios.get(BaseURL+'/api/v1/userFriends');
        return result;
    }
    catch (e) {
        return false
    }
 }
