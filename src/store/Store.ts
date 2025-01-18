import {configureStore} from "@reduxjs/toolkit";
import StaffSlice from "../reducers/StaffSlice.ts";
import UserSlice from "../reducers/UserSlice.ts";
import CropSlice from "../reducers/CropSlice.ts";
import FieldSlice from "../reducers/FieldSlice.ts";
import MonitoringLogSlice from "../reducers/MonitoringLogSlice.ts";
import EquipmentSlice from "../reducers/EquipmentSlice.ts";
import VehicleSlice from "../reducers/VehicleSlice.ts";

export const store = configureStore({
    reducer: {
        users: UserSlice,
        staffs: StaffSlice,
        fields: FieldSlice,
        crops: CropSlice,
        monitoringLogs: MonitoringLogSlice,
        equipments: EquipmentSlice,
        vehicles: VehicleSlice
    }
});
// Export RootState type
export type RootState = ReturnType<typeof store.getState>;