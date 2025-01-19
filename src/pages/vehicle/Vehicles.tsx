import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/Store.ts";
import {Vehicle} from "../../models/Vehicle.ts";
import {deleteVehicle} from "../../reducers/VehicleSlice.ts";
import {VehicleForm} from "./VehicleForm.tsx";
import {SearchBar} from "../../components/SearchBar.tsx";
import {AddBtnModel} from "../../components/AddBtnModel.tsx";

export function Vehicles() {
    const vehicleList = useSelector((state: RootState) => state.vehicles);
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewMode, setIsViewMode] = useState(false); // Track whether it's view or edit mode
    const dispatch = useDispatch();

    const openModalForAdd = () => {
        setSelectedVehicle(null);
        setIsViewMode(false);
        setIsModalOpen(true);
    };

    const openModalForView = (vehicle: Vehicle) => {
        setSelectedVehicle(vehicle);
        setIsViewMode(true);
        setIsModalOpen(true);
    };

    const openModalForEdit = (vehicle: Vehicle) => {
        setSelectedVehicle(vehicle);
        setIsViewMode(false);
        setIsModalOpen(true);
    };

    const handleDelete = (vehicle: Vehicle) => {
        dispatch(deleteVehicle({ vehicleCode: vehicle.vehicleCode }));
    };

    return (
        <>
            <div className="ml-[250px] p-5 transition-all ease-in-out duration-300 bg-background h-lvh">
                <div>
                    <SearchBar/>
                </div>
                <div className="flex justify-end">
                    <AddBtnModel onClick={openModalForAdd}>Add New Vehicle</AddBtnModel>
                </div>
                <div className="custom-table w-full overflow-x-auto bg-white rounded-[15px] p-6 mt-6 shadow-md">
                    <h1 className="text-2xl font-medium mb-4">Vehicle Records</h1>
                    <div className="overflow-y-auto max-h-[450px] scrollbar-thin">
                        <table className="w-full border-separate border-spacing-0">
                            <thead className="sticky top-0 bg-neutral-700 text-white pl-2 font-medium z-10 h-10">
                            <tr>
                                <th>Vehicle Code</th>
                                <th>Plate Number</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Remarks</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody className="max-h-[400px] overflow-y-auto table-row-group w-full">
                            {vehicleList.map(vehicle => (
                                <tr key={vehicle.vehicleCode} className="hover:bg-gray-100 cursor-pointer items-center">
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2">{vehicle.vehicleCode}</td>
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2">{vehicle.plateNumber}</td>
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2">{vehicle.vehicleCategory}</td>
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2">{vehicle.status}</td>
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2">{vehicle.remarks}</td>
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 flex justify-center align-middle gap-5 p-2">
                                        <button onClick={() => openModalForView(vehicle)} className="text-blue-500"><i
                                            className="fas fa-eye"></i>
                                        </button>
                                        <button onClick={() => openModalForEdit(vehicle)} className="text-primary"><i
                                            className="fas fa-edit"></i>
                                        </button>
                                        <button onClick={() => handleDelete(vehicle)} className="text-red-500"><i
                                            className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {isModalOpen && (
                    <VehicleForm
                        vehicle={selectedVehicle}
                        isViewMode={isViewMode}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        </>
    );
}