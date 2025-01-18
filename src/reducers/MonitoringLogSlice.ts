import {MonitoringLog} from "../models/MonitoringLog.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: MonitoringLog[] = [];

const monitoringLogSlice = createSlice({
    name: 'monitoringLog',
    initialState,
    reducers: {
        addMonitoringLog: (state, action) => {
            state.push(action.payload);
        },
        updateMonitoringLog: (state, action) => {
            return state.map((monitoringLog: MonitoringLog) => monitoringLog.logCode === action.payload.logCode
                ? action.payload
                : monitoringLog
            );
        },
        deleteMonitoringLog: (state, action) => {
            return state.filter((monitoringLog: MonitoringLog) => monitoringLog.logCode !== action.payload.logCode);
        }
    }
});

export const {addMonitoringLog, updateMonitoringLog, deleteMonitoringLog} = monitoringLogSlice.actions;
export default monitoringLogSlice.reducer;