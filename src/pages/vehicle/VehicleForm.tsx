import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVehicle, updateVehicle } from "../../reducers/VehicleSlice.ts";
import { Vehicle } from "../../models/Vehicle.ts";

interface VehicleFormProps {
    vehicle: Vehicle | null;
    isViewMode: boolean;
    onClose: () => void;
}

export function VehicleForm({ vehicle, isViewMode, onClose }: VehicleFormProps) {
    const [vehicleCode, setVehicleCode] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    const [vehicleCategory, setVehicleCategory] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [status, setStatus] = useState("");
    const [remarks, setRemarks] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (vehicle) {
            setVehicleCode(vehicle.vehicleCode);
            setPlateNumber(vehicle.plateNumber);
            setVehicleCategory(vehicle.vehicleCategory);
            setFuelType(vehicle.fuelType);
            setStatus(vehicle.status);
            setRemarks(vehicle.remarks);
        }
    }, [vehicle]);

    const handleClear = () => {
        setVehicleCode("");
        setPlateNumber("");
        setVehicleCategory("");
        setFuelType("");
        setStatus("");
        setRemarks("");
    };


    const handleSave = () => {
        if (vehicle) {
            const updatedVehicle = { ...vehicle, vehicleCode, plateNumber, vehicleCategory, fuelType, status, remarks };
            dispatch(updateVehicle(updatedVehicle));
        } else {
            const newVehicle = { vehicleCode, plateNumber, vehicleCategory, fuelType, status, remarks } as Vehicle;
            dispatch(addVehicle(newVehicle));
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
                    <h2 className="font-bold text-2xl">{isViewMode ? "View Vehicles" : vehicle ? "Update Vehicles" : "Add New Vehicles"}</h2>
                    <button
                        className="px-6 py-2 bg-primary text-white rounded"
                        type="button"
                        onClick={onClose}>
                        <i className="fa-regular fa-circle-xmark fa-2x"></i>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block font-semibold text-primary">Vehicle Code</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                value={vehicleCode}
                                onChange={(e) => setVehicleCode(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Plate Number</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                value={plateNumber}
                                onChange={(e) => setPlateNumber(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Vehicle Category</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                value={vehicleCategory}
                                onChange={(e) => setVehicleCategory(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Fuel Type</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                value={fuelType}
                                onChange={(e) => setFuelType(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">
                                Status
                            </label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">
                                Remarks
                            </label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        {!isViewMode && (
                            <>
                                <button
                                    className="px-6 py-2 bg-primary text-white rounded hover:bg-secondary"
                                    type="button"
                                    onClick={handleClear}>
                                    Clear
                                </button>
                                <button
                                    className="px-6 py-2 bg-primary text-white rounded hover:bg-secondary"
                                    type="submit">
                                    {vehicle ? "Update" : "Save"}
                                </button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}