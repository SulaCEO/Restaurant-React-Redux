import { createSlice } from "@reduxjs/toolkit";

const homeReducer = createSlice({
    name: 'homeReducer',
    initialState: {
        user: {
            email: '',
            password: ''
        }
    },
    reducers: {
        sendEmail: (state, action)=>{
            state.user.email = action.payload;
        },
        sendPassword: (state, action)=>{
            state.user.password = action.payload;
        },
        resetUser: (state)=>{
            state.user.email = '';
            state.user.password = '';
        }
    },
    extraReducers: {

    }
})

export default homeReducer.reducer;
export const {sendEmail, sendPassword, resetUser} = homeReducer.actions;