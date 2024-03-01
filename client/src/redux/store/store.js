import { configureStore } from '@reduxjs/toolkit';
import serFriendsReducer from '../state-slice/searchFriends-slice';
import sendMessageReducer from '../state-slice/sendMessage-slice';

const store = configureStore({
  reducer: {searching:serFriendsReducer, message:sendMessageReducer}
})

export default store