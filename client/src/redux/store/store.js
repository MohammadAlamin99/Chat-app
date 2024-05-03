import { configureStore } from '@reduxjs/toolkit';
import serFriendsReducer from '../state-slice/searchFriends-slice';
import getMessageSlice from '../state-slice/getMessage-slice';
import postSlice from '../state-slice/post-slice';
import commentSlice from '../state-slice/comment-slice';


const store = configureStore({
  reducer: {searching:serFriendsReducer, getMessage:getMessageSlice, 
    getPost:postSlice,getComment:commentSlice}
})

export default store