import {User} from "../models/User.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: User[] = [];

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            return state.map((user: User) => user.email === action.payload.email
                ? action.payload
                : user
            );
        },
        deleteUser: (state, action) => {
            return state.filter((user: User) => user.email !== action.payload.email);
        }
    }
});

export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;