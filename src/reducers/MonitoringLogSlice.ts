import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MonitoringLog } from "../models/MonitoringLog";

interface MonitoringLogState {
    logs: MonitoringLog[];
}

const initialState: MonitoringLogState = {
    logs: [],
};

const monitoringLogSlice = createSlice({
    name: "monitoringLogs",
    initialState,
    reducers: {
        addMonitoringLog(state, action: PayloadAction<MonitoringLog>) {
            state.logs.push(action.payload);
        },
        updateMonitoringLog(state, action: PayloadAction<MonitoringLog>) {
            const index = state.logs.findIndex((log) => log.logCode === action.payload.logCode);
            if (index !== -1) {
                state.logs[index] = action.payload;
            }
        },
        deleteMonitoringLog(state, action: PayloadAction<{ logCode: string }>) {
            state.logs = state.logs.filter((log) => log.logCode !== action.payload.logCode);
        },
    },
});

export const { addMonitoringLog, updateMonitoringLog, deleteMonitoringLog } = monitoringLogSlice.actions;
export default monitoringLogSlice.reducer;