import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { MonitoringLog as MonitoringLogModel } from "../../models/MonitoringLog";
import { deleteMonitoringLog } from "../../reducers/MonitoringLogSlice";
import { MonitoringLogForm } from "./MonitoringLogForm";
import { SearchBar } from "../../components/common/SearchBar.tsx";
import { AddBtnModel } from "../../components/common/AddBtnModel.tsx";
import { LogCardModel } from "../../components/monitoringLog/LogCardModel.tsx";

export function MonitoringLogs() {
    const logList = useSelector((state: RootState) => state.monitoringLogs.logs) || [];
    const [selectedLog, setSelectedLog] = useState<MonitoringLogModel | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewMode, setIsViewMode] = useState(false);
    const dispatch = useDispatch();

    const openModalForAdd = () => {
        setSelectedLog(null);
        setIsViewMode(false);
        setIsModalOpen(true);
    };

    const openModalForView = (monitoringLog: MonitoringLogModel) => {
        setSelectedLog(monitoringLog);
        setIsViewMode(true);
        setIsModalOpen(true);
    };

    const openModalForEdit = (monitoringLog: MonitoringLogModel) => {
        setSelectedLog(monitoringLog);
        setIsViewMode(false);
        setIsModalOpen(true);
    };

    const handleDelete = (monitoringLog: MonitoringLogModel) => {
        dispatch(deleteMonitoringLog({ logCode: monitoringLog.logCode }));
    };

    return (
        <>
            <div className="ml-[250px] p-5 transition-all ease-in-out duration-300 bg-background h-lvh">
                <div>
                    <SearchBar />
                </div>
                <div className="flex justify-end">
                    <AddBtnModel onClick={openModalForAdd}>Add New Log</AddBtnModel>
                </div>
                <div className="custom-table w-full overflow-x-auto bg-white rounded-[15px] p-6 mt-6 shadow-md scrollbar-thin">
                    <h1 className="text-2xl font-medium mb-4">Monitoring Log Records</h1>
                    <div className="overflow-y-auto max-h-[450px] scrollbar-thin p-2">
                        <div className="grid lg:grid-cols-5 gap-6">
                            {logList.length > 0 ? (
                                logList.map((log) => (
                                    <LogCardModel
                                        key={log.logCode}
                                        monitoringLog={log}
                                        onView={openModalForView}
                                        onUpdate={openModalForEdit}
                                        onDelete={handleDelete}
                                    />
                                ))
                            ) : (
                                <p>No logs available.</p>
                            )}
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <MonitoringLogForm
                        monitoringLog={selectedLog}
                        isViewMode={isViewMode}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        </>
    );
}
