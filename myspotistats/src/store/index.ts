import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './profile'

const store = configureStore({
    reducer: {
        profile: profileReducer
    }
})

export default store;