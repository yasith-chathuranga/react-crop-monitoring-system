import {Equipment} from "../models/Equipment.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Equipment[] = [];

const equipmentSlice = createSlice({
    name: 'equipment',
    initialState,
    reducers: {
        addEquipment: (state, action) => {
            state.push(action.payload);
        },
        updateEquipment: (state, action) => {
            return state.map((equipment: Equipment) => equipment.equipmentId === action.payload.equipmentId
                ? action.payload
                : equipment
            );
        },
        deleteEquipment: (state, action) => {
            return state.filter((equipment: Equipment) => equipment.equipmentId !== action.payload.equipmentId);
        }
    }
});

export const {addEquipment, updateEquipment, deleteEquipment} = equipmentSlice.actions;
export default equipmentSlice.reducer;