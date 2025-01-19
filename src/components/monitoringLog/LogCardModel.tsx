import { MonitoringLog } from "../../models/MonitoringLog.ts";

interface LogCardProps {
    monitoringLog: MonitoringLog;
    onView?: (monitoringLog: MonitoringLog) => void;
    onUpdate?: (monitoringLog: MonitoringLog) => void;
    onDelete?: (monitoringLog: MonitoringLog) => void;
}

export function LogCardModel({ monitoringLog, onView, onUpdate, onDelete }: LogCardProps) {
    const defaultImage = "";

    return (
        <div className="card p-5 bg-white shadow-md rounded-lg hover:shadow-lg max-w-xs border-2">
            <h2 className="text-xl font-bold mb-2">{monitoringLog.logCode}</h2>
            <div className="flex justify-center items-center relative w-48 h-48 bg-gray-200 overflow-hidden mx-auto">
                <img
                    src={monitoringLog.observedImage || defaultImage}
                    alt={monitoringLog.logDetails || "Monitoring Log"}
                    className="object-cover w-full h-full"
                />
            </div>
            <h3 className="pt-2 text-justify">{monitoringLog.logDetails}</h3>
            <p className="pt-2 text-gray-600"><i className="fa-regular fa-calendar"></i> - {new Date(monitoringLog.logDate).toLocaleDateString()}
            </p>
            <div className="flex justify-around gap-4 pt-4">
                {onView && (
                    <button
                        onClick={() => onView(monitoringLog)}
                        className="bg-blue-500 px-4 py-2 text-white rounded flex items-center justify-center hover:bg-blue-400"
                    >
                        <i className="fas fa-eye"></i>
                    </button>
                )}
                {onUpdate && (
                    <button
                        onClick={() => onUpdate(monitoringLog)}
                        className="bg-primary px-4 py-2 text-white rounded flex items-end justify-center hover:bg-secondary"
                    >
                        <i className="fas fa-edit"></i>
                    </button>
                )}
                {onDelete && (
                    <button
                        onClick={() => onDelete(monitoringLog)}
                        className="bg-red-500 px-4 py-2 text-white rounded flex items-center justify-center hover:bg-red-400"
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                )}
            </div>
        </div>
    );
}