import { configureStore } from '@reduxjs/toolkit'
import resourceReducer from './Redux/resourcesSlice'
import authReducer  from './Redux/authSlice'

export const store = configureStore({
  reducer: {
    resources : resourceReducer ,
    auth : authReducer ,
  },
})