import { MonitoringLog } from "../models/MonitoringLog";

interface LogCardProps {
    monitoringLog: MonitoringLog;
    onView?: (monitoringLog: MonitoringLog) => void;
    onUpdate?: (monitoringLog: MonitoringLog) => void;
    onDelete?: (monitoringLog: MonitoringLog) => void;
}

export function LogCardModel({ monitoringLog, onView, onUpdate, onDelete }: LogCardProps) {
    const defaultImage = "https://via.placeholder.com/300x200";

    return (
        <div className="card p-6 bg-white shadow-md rounded-lg">
            <div className="relative w-full h-48 bg-gray-200 rounded-md overflow-hidden">
                <img
                    src={monitoringLog.observedImage || defaultImage}
                    alt={monitoringLog.logDetails || "Monitoring Log"}
                    className="object-cover w-full h-full"
                />
            </div>
            <h2 className="text-xl font-bold">{monitoringLog.logCode}</h2>
            <h3>{monitoringLog.logDetails}</h3>
            <p>{new Date(monitoringLog.logDate).toLocaleDateString()}</p>
            <div className="flex justify-between space-x-2">
                {onView && (
                    <button onClick={() => onView(monitoringLog)} className="bg-blue-500 px-4 py-2 text-white rounded">View</button>
                )}
                {onUpdate && (
                    <button onClick={() => onUpdate(monitoringLog)} className="bg-green-500 px-4 py-2 text-white rounded">Update</button>
                )}
                {onDelete && (
                    <button onClick={() => onDelete(monitoringLog)} className="bg-red-500 px-4 py-2 text-white rounded">Delete</button>
                )}
            </div>
        </div>
    );
}