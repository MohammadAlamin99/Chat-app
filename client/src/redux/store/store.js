import { configureStore } from '@reduxjs/toolkit';
import serFriendsReducer from '../state-slice/searchFriends-slice';
import getMessageSlice from '../state-slice/getMessage-slice';

const store = configureStore({
  reducer: {searching:serFriendsReducer, getMessage:getMessageSlice}
})

export default store