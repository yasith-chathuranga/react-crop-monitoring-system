import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEquipment, updateEquipment } from "../../reducers/EquipmentSlice.ts";
import { Equipment } from "../../models/Equipment.ts";

interface EquipmentFormProps {
    equipment: Equipment | null;
    isViewMode: boolean;
    onClose: () => void;
}

export function EquipmentForm({ equipment, isViewMode, onClose }: EquipmentFormProps) {
    const [equipmentId, setEquipmentId] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (equipment) {
            setEquipmentId(equipment.equipmentId);
            setName(equipment.name);
            setType(equipment.type);
            setStatus(equipment.status);
        }
    }, [equipment]);

    const handleClear = () => {
        setEquipmentId("");
        setName("");
        setType("");
        setStatus("");
    };


    const handleSave = () => {
        if (equipment) {
            const updatedEquipment = { ...equipment, equipmentId, name, type, status };
            dispatch(updateEquipment(updatedEquipment));
        } else {
            const newEquipment = { equipmentId, name, type, status } as Equipment;
            dispatch(addEquipment(newEquipment));
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
                    <h2 className="font-bold text-2xl">{isViewMode ? "View Equipment" : equipment ? "Update Equipment" : "Add New Equipment"}</h2>
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
                            <label className="block font-semibold text-primary">Equipment ID</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                value={equipmentId}
                                onChange={(e) => setEquipmentId(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Equipment Name</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="Tractor Model X"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Equipment Type</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="Tractor"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">
                                Status
                            </label>
                            <select
                                className="w-full p-2 border border-accent rounded"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                                disabled={isViewMode}
                            >
                                <option value="">Select Status</option>
                                <option value="ACTIVE">Active</option>
                                <option value="INACTIVE">Inactive</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        {!isViewMode && (
                            <>
                                <button
                                    className="px-6 py-2 w-32 bg-primary text-white rounded hover:bg-secondary"
                                    type="button"
                                    onClick={handleClear}>
                                    Clear
                                </button>
                                <button
                                    className="px-6 py-2 w-32 bg-primary text-white rounded hover:bg-secondary"
                                    type="submit">
                                    {equipment ? "Update" : "Save"}
                                </button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}