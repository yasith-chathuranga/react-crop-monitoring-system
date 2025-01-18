import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMonitoringLog, updateMonitoringLog } from "../../reducers/MonitoringLogSlice";
import { MonitoringLog } from "../../models/MonitoringLog";

interface MonitoringLogFormProps {
    monitoringLog: MonitoringLog | null;
    isViewMode: boolean;
    onClose: () => void;
}

export function MonitoringLogForm({ monitoringLog, isViewMode, onClose }: MonitoringLogFormProps) {
    const [logCode, setLogCode] = useState("");
    const [logDate, setLogDate] = useState("");
    const [logDetails, setLogDetails] = useState("");
    const [, setObservedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (monitoringLog) {
            setLogCode(monitoringLog.logCode);
            setLogDate(monitoringLog.logDate);
            setLogDetails(monitoringLog.logDetails);
            setImagePreview(monitoringLog.observedImage); // Use existing image URL for preview
        }
    }, [monitoringLog]);

    const handleClear = () => {
        setLogCode("");
        setLogDate("");
        setLogDetails("");
        setObservedImage(null);
        setImagePreview(null);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setObservedImage(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file); // Create a preview of the uploaded image
        }
    };

    const handleSave = () => {
        const updatedLog = {
            ...monitoringLog,
            logCode,
            logDate,
            logDetails,
            observedImage: imagePreview, // Save as Base64 or upload path
        } as MonitoringLog;

        if (monitoringLog) {
            dispatch(updateMonitoringLog(updatedLog));
        } else {
            dispatch(addMonitoringLog(updatedLog));
        }
        onClose();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSave();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-4xl">
                <div className="bg-primary text-white rounded-t-lg p-4 flex justify-between items-center">
                    <h2 className="font-bold text-2xl">
                        {isViewMode ? "View Monitoring Log" : monitoringLog ? "Update Monitoring Log" : "Add New Monitoring Log"}
                    </h2>
                    <button
                        className="px-6 py-2 bg-primary text-white rounded"
                        type="button"
                        onClick={onClose}
                    >
                        <i className="fa-regular fa-circle-xmark fa-2x"></i>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block font-semibold text-primary">Log Code</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                value={logCode}
                                onChange={(e) => setLogCode(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Log Date</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="date"
                                value={logDate}
                                onChange={(e) => setLogDate(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Log Details</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="e.g. Planted new root crops"
                                value={logDetails}
                                onChange={(e) => setLogDetails(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Observed Image</label>
                            {!isViewMode && (
                                <input
                                    className="w-full p-2 border border-accent rounded"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            )}
                            {imagePreview && (
                                <div className="mt-4">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        {!isViewMode && (
                            <>
                                <button
                                    className="px-6 py-2 bg-primary text-white rounded hover:bg-secondary"
                                    type="button"
                                    onClick={handleClear}
                                >
                                    Clear
                                </button>
                                <button
                                    className="px-6 py-2 bg-primary text-white rounded hover:bg-secondary"
                                    type="submit"
                                >
                                    {monitoringLog ? "Update" : "Save"}
                                </button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}