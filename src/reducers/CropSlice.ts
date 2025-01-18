import {Crop} from "../models/Crop.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Crop[] = [];

const cropSlice = createSlice({
    name: 'crop',
    initialState,
    reducers: {
        addCrop: (state, action) => {
            state.push(action.payload);
        },
        updateCrop: (state, action) => {
            return state.map((crop: Crop) => crop.cropCode === action.payload.cropCode
                ? action.payload
                : crop
            );
        },
        deleteCrop: (state, action) => {
            return state.filter((crop: Crop) => crop.cropCode !== action.payload.cropCode);
        }
    }
});

export const {addCrop, updateCrop, deleteCrop} = cropSlice.actions;
export default cropSlice.reducer;