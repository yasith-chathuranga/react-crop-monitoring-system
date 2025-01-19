import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/Store.ts";
import {Staff} from "../../models/Staff.ts";
import {deleteStaff} from "../../reducers/StaffSlice.ts";
import {StaffForm} from "./StaffForm.tsx";
import {SearchBar} from "../../components/common/SearchBar.tsx";
import {AddBtnModel} from "../../components/common/AddBtnModel.tsx";

export function Staffs() {
    const staffList = useSelector((state: RootState) => state.staffs);
    const staffs = useSelector((state: { staffs: Staff[] }) => state.staffs);
    const [searchId, setSearchId] = useState('');
    const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewMode, setIsViewMode] = useState(false); // Track whether it's view or edit mode
    const dispatch = useDispatch();

    const openModalForAdd = () => {
        setSelectedStaff(null);
        setIsViewMode(false);
        setIsModalOpen(true);
    };

    const openModalForView = (staff: Staff) => {
        setSelectedStaff(staff);
        setIsViewMode(true);
        setIsModalOpen(true);
    };

    const openModalForEdit = (staff: Staff) => {
        setSelectedStaff(staff);
        setIsViewMode(false);
        setIsModalOpen(true);
    };

    const handleDelete = (staff: Staff) => {
        dispatch(deleteStaff({ id: staff.id }));
    };

    const handleSearchStaff = () => {
        const staff: Staff | undefined = staffs.find((s: Staff) => s.id === searchId);
        if (staff) {
            setSelectedStaff(staff);
            setIsModalOpen(true);
            setIsViewMode(true);
        } else {
            alert('Staff not found');
            setSelectedStaff(null);
        }
    };

    return (
        <>
            <div className="ml-[250px] p-5 transition-all ease-in-out duration-300 bg-background h-lvh">
                <div>
                    <SearchBar
                        placeholder="Search By Staff ID"
                        value={searchId}
                        onChange={setSearchId}
                        onSearch={handleSearchStaff}/>
                </div>
                <div className="flex justify-end">
                    <AddBtnModel onClick={openModalForAdd}>Add New Staff</AddBtnModel>
                </div>
                <div className="custom-table w-full overflow-x-auto bg-white rounded-[15px] p-6 mt-6 shadow-md">
                    <h1 className="text-2xl font-medium mb-4">Staff Records</h1>
                    <div className="overflow-y-auto max-h-[450px] scrollbar-thin">
                        <table className="w-full border-separate border-spacing-0">
                            <thead className="sticky top-0 bg-neutral-700 text-white pl-2 font-medium z-10 h-10">
                            <tr>
                                <th>Staff ID</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Contact No</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody className="max-h-[400px] overflow-y-auto table-row-group w-full">
                            {staffList.map(staff => (
                                <tr key={staff.id} className="hover:bg-gray-100 cursor-pointer items-center">
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2">{staff.id}</td>
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2">{staff.firstName} {staff.lastName}</td>
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2">{staff.role}</td>
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2">{staff.contactNo}</td>
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 text-center align-middle p-2">{staff.email}</td>
                                    <td className="bg-gray-200 text-black pl-2 font-normal border-b border-gray-400 flex justify-center align-middle gap-5 p-2">
                                        <button onClick={() => openModalForView(staff)} className="text-blue-500"><i
                                            className="fas fa-eye"></i>
                                        </button>
                                        <button onClick={() => openModalForEdit(staff)} className="text-primary"><i
                                            className="fas fa-edit"></i>
                                        </button>
                                        <button onClick={() => handleDelete(staff)} className="text-red-500"><i
                                            className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {isModalOpen && (
                    <StaffForm
                        staff={selectedStaff}
                        isViewMode={isViewMode}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        </>
    );
}