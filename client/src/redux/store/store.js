import { configureStore } from '@reduxjs/toolkit'
import serFriendsReducer from '../state-slice/searchFriends-slice'

const store = configureStore({
  reducer: {searching:serFriendsReducer}
})

export default store