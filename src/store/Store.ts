import {configureStore} from "@reduxjs/toolkit";
import StaffSlice from "../reducers/StaffSlice.ts";

export const store = configureStore({
    reducer: {
        staffs: StaffSlice
    }
});