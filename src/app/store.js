import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../features/posts/postSlice'
import userReducer from '../features/users/userSlice'
import { apiSlice } from '../features/api/apiSlice'

export default configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware().concat(apiSlice.middleware)
  },
})
