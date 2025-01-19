import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store.ts";
import { Equipment } from "../../models/Equipment.ts";
import { deleteEquipment } from "../../reducers/EquipmentSlice.ts";
import { EquipmentForm } from "./EquipmentForm.tsx";
import { SearchBar } from "../../components/SearchBar.tsx";
import { AddBtnModel } from "../../components/AddBtnModel.tsx";

export function Equipments() {
    const equipmentList = useSelector((state: RootState) => state.equipments);
    const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewMode, setIsViewMode] = useState(false); // Track whether it's view or edit mode
    const dispatch = useDispatch();

    const openModalForAdd = () => {
        setSelectedEquipment(null);
        setIsViewMode(false);
        setIsModalOpen(true);
    };

    const openModalForView = (equipment: Equipment) => {
        setSelectedEquipment(equipment);
        setIsViewMode(true);
        setIsModalOpen(true);
    };

    const openModalForEdit = (equipment: Equipment) => {
        setSelectedEquipment(equipment);
        setIsViewMode(false);
        setIsModalOpen(true);
    };

    const handleDelete = (equipment: Equipment) => {
        dispatch(deleteEquipment({ equipmentId: equipment.equipmentId }));
    };

    return (
        <>
            <div className="ml-[250px] p-5 transition-all ease-in-out duration-300 bg-background h-lvh">
                <div>
                    <SearchBar />
                </div>
                <div className="flex justify-end">
                    <AddBtnModel onClick={openModalForAdd}>Add New Equipment</AddBtnModel>
                </div>
                <div className="custom-table w-full overflow-x-auto bg-white rounded-[15px] p-6 mt-6 shadow-md">
                    <h1 className="text-2xl font-medium mb-4">Equipment Records</h1>
                    <div className="overflow-y-auto max-h-[450px] scrollbar-thin">
                        <table className="w-full border-separate border-spacing-0">
                            <thead className="sticky top-0 bg-neutral-700 text-white font-medium z-10 h-10">
                            <tr>
                                <th>Equipment ID</th>
                                <th>Equipment Name</th>
                                <th>Equipment Type</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody className="max-h-[400px] overflow-y-auto table-row-group w-full">
                            {equipmentList.map((equipment) => (
                                <tr key={equipment.equipmentId} className="hover:bg-gray-100 cursor-pointer items-center">
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2">{equipment.equipmentId}</td>
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2">{equipment.name}</td>
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2">{equipment.type}</td>
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2">{equipment.status}</td>
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 flex justify-center align-middle gap-5 p-2">
                                        <button onClick={() => openModalForView(equipment)} className="text-blue-500"><i className="fas fa-eye"></i>
                                        </button>
                                        <button onClick={() => openModalForEdit(equipment)} className="text-primary"><i className="fas fa-edit"></i>
                                        </button>
                                        <button onClick={() => handleDelete(equipment)} className="text-red-500"><i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {isModalOpen && (
                    <EquipmentForm
                        equipment={selectedEquipment}
                        isViewMode={isViewMode}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        </>
    );
}
