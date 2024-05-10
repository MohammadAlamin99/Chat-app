import { configureStore } from '@reduxjs/toolkit';
import serFriendsReducer from '../state-slice/searchFriends-slice';
import getMessageSlice from '../state-slice/getMessage-slice';
import postSlice from '../state-slice/post-slice';
import commentSlice from '../state-slice/comment-slice';
import userDetailsSlice from '../state-slice/userDetails-slice';


const store = configureStore({
  reducer: {searching:serFriendsReducer, getMessage:getMessageSlice, 
    getPost:postSlice,getComment:commentSlice, getDetails: userDetailsSlice }
})

export default store