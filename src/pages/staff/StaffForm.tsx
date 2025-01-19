import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStaff, updateStaff } from "../../reducers/StaffSlice.ts";
import { Staff } from "../../models/Staff.ts";

interface StaffFormProps {
    staff: Staff | null;
    isViewMode: boolean;
    onClose: () => void;
}

export function StaffForm({ staff, isViewMode, onClose }: StaffFormProps) {
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [designation, setDesignation] = useState("");
    const [role, setRole] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [joinedDate, setJoinedDate] = useState("");
    const [addressName, setAddressName] = useState("");
    const [addressLane, setAddressLane] = useState("");
    const [addressCity, setAddressCity] = useState("");
    const [addressState, setAddressState] = useState("");
    const [addressCode, setAddressCode] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (staff) {
            setId(staff.id);
            setFirstName(staff.firstName);
            setLastName(staff.lastName);
            setDesignation(staff.designation);
            setRole(staff.role);
            setGender(staff.gender);
            setDob(staff.dob);
            setJoinedDate(staff.joinedDate);
            setAddressName(staff.addressName);
            setAddressLane(staff.addressLane);
            setAddressCity(staff.addressCity);
            setAddressState(staff.addressState);
            setAddressCode(staff.addressCode);
            setContactNo(staff.contactNo);
            setEmail(staff.email);
        }
    }, [staff]);

    const handleClear = () => {
        setId("");
        setFirstName("");
        setLastName("");
        setDesignation("");
        setRole("");
        setGender("");
        setDob("");
        setJoinedDate("");
        setAddressName("");
        setAddressLane("");
        setAddressCity("");
        setAddressState("");
        setAddressCode("");
        setContactNo("");
        setEmail("");
    };


    const handleSave = () => {
        if (staff) {
            const updatedStaff = { ...staff, firstName, lastName, designation, role, gender, dob, joinedDate, addressName, addressLane, addressCity, addressState, addressCode, contactNo, email };
            dispatch(updateStaff(updatedStaff));
        } else {
            const newStaff = { id, firstName, lastName, designation, role, gender, dob, joinedDate, addressName, addressLane, addressCity, addressState, addressCode, contactNo, email } as Staff;
            dispatch(addStaff(newStaff));
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
                    <h2 className="font-bold text-2xl">{isViewMode ? "View Staff" : staff ? "Update Staff" : "Add New Staff"}</h2>
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
                            <label className="block font-semibold text-primary">Staff ID</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">First Name</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="John"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Last Name</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="Doe"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">Designation</label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="Field Officer"
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">
                                Role
                            </label>
                            <select
                                className="w-full p-2 border border-accent rounded"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                                disabled={isViewMode}
                            >
                                <option value="">Select Role</option>
                                <option value="ADMINISTRATIVE">Administrative</option>
                                <option value="MANAGER">Manager</option>
                                <option value="SCIENTIST">Scientist</option>
                                <option value="OTHER">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">
                                Gender
                            </label>
                            <select
                                className="w-full p-2 border border-accent rounded"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                                disabled={isViewMode}
                            >
                                <option value="">Select Gender</option>
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                                <option value="OTHER">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block font-semibold text-primary">
                                Date of Birth
                            </label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">
                                Joined Date
                            </label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="date"
                                value={joinedDate}
                                onChange={(e) => setJoinedDate(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">
                                Address Name
                            </label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="123 Main St"
                                value={addressName}
                                onChange={(e) => setAddressName(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">
                                Address Lane
                            </label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="Lane 5"
                                value={addressLane}
                                onChange={(e) => setAddressLane(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">
                                Address City
                            </label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="New York"
                                value={addressCity}
                                onChange={(e) => setAddressCity(e.target.value)}
                                required
                                disabled={isViewMode}
                                                   />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">
                                Address State
                            </label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="New York"
                                value={addressState}
                                onChange={(e) => setAddressState(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">
                                Address Code
                            </label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="number"
                                placeholder="10001"
                                value={addressCode}
                                onChange={(e) => setAddressCode(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-primary">
                                Contact No
                            </label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="number"
                                placeholder="1234567890"
                                value={contactNo}
                                onChange={(e) => setContactNo(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <label className="block font-semibold text-primary">
                                Email
                            </label>
                            <input
                                className="w-full p-2 border border-accent rounded"
                                type="text"
                                placeholder="johndoe@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isViewMode}
                            />
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
                                    {staff ? "Update" : "Save"}
                                </button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}