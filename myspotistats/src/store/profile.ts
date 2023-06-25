import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = {
    profile: {}
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfileState,
    reducers: {
        setProfile(state, action){
            state.profile = action.payload;
        }
    }
})


export const profileActions = profileSlice.actions

export default profileSlice.reducer