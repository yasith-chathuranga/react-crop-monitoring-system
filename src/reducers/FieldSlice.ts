import {Field} from "../models/Field.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Field[] = [];

const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        addField: (state, action) => {
            state.push(action.payload);
        },
        updateField: (state, action) => {
            return state.map((field: Field) => field.fieldCode === action.payload.fieldCode
                ? action.payload
                : field
            );
        },
        deleteField: (state, action) => {
            return state.filter((field: Field) => field.fieldCode !== action.payload.fieldCode);
        }
    }
});

export const {addField, updateField, deleteField} = fieldSlice.actions;
export default fieldSlice.reducer;