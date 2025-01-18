import React, { useState } from "react";

interface StaffFormModalProps {
    onSave: (data: StaffData) => void;
    onUpdate?: (data: StaffData) => void;
    isUpdateMode?: boolean;
    existingData?: Partial<StaffData>;
}

interface StaffData {
    id: string;
    firstName: string;
    lastName: string;
    designation: string;
    role: string;
    gender: string;
    dob: string;
    joinedDate: string;
    addressName: string;
    addressLane: string;
    addressCity: string;
    addressState: string;
    addressCode: string;
    contactNo: string;
    email: string;
}

const StaffFormModal: React.FC<StaffFormModalProps> = ({
                                                           onSave,
                                                           onUpdate,
                                                           isUpdateMode = false,
                                                           existingData = {},
                                                       }) => {
    const [formData, setFormData] = useState<StaffData>({
        id: existingData.id || "",
        firstName: existingData.firstName || "",
        lastName: existingData.lastName || "",
        designation: existingData.designation || "",
        role: existingData.role || "",
        gender: existingData.gender || "",
        dob: existingData.dob || "",
        joinedDate: existingData.joinedDate || "",
        addressName: existingData.addressName || "",
        addressLane: existingData.addressLane || "",
        addressCity: existingData.addressCity || "",
        addressState: existingData.addressState || "",
        addressCode: existingData.addressCode || "",
        contactNo: existingData.contactNo || "",
        email: existingData.email || "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isUpdateMode && onUpdate) {
            onUpdate(formData);
        } else {
            onSave(formData);
        }
    };

    const handleClear = () => {
        setFormData({
            id: "",
            firstName: "",
            lastName: "",
            designation: "",
            role: "",
            gender: "",
            dob: "",
            joinedDate: "",
            addressName: "",
            addressLane: "",
            addressCity: "",
            addressState: "",
            addressCode: "",
            contactNo: "",
            email: "",
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-4xl">
                <div className="bg-primary text-white rounded-t-lg p-4 flex justify-between items-center">
                    <h4 className="font-bold text-2xl">
                        Staff {isUpdateMode ? "Update" : "Add"} Form
                    </h4>
                    <button
                        className="text-white focus:outline-none"
                        onClick={handleClear}
                    >
                        &times;
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="id" className="block font-semibold text-primary">
                                Staff ID
                            </label>
                            <input
                                type="text"
                                id="id"
                                value={formData.id}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-accent rounded"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="firstName"
                                className="block font-semibold text-primary"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-accent rounded"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="lastName"
                                className="block font-semibold text-primary"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-accent rounded"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="designation"
                                className="block font-semibold text-primary"
                            >
                                Designation
                            </label>
                            <input
                                type="text"
                                id="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-accent rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="role" className="block font-semibold text-primary">
                                Role
                            </label>
                            <select
                                id="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-accent rounded"
                            >
                                <option value="">Select Role</option>
                                <option value="ADMINISTRATIVE">Administrative</option>
                                <option value="MANAGER">Manager</option>
                                <option value="SCIENTIST">Scientist</option>
                                <option value="OTHER">Other</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="gender"
                                className="block font-semibold text-primary"
                            >
                                Gender
                            </label>
                            <select
                                id="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-accent rounded"
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
                            <label
                                htmlFor="dob"
                                className="block font-semibold text-primary"
                            >
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-accent rounded"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="joinedDate"
                                className="block font-semibold text-primary"
                            >
                                Joined Date
                            </label>
                            <input
                                type="date"
                                id="joinedDate"
                                value={formData.joinedDate}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-accent rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="addressName" className="block font-semibold text-primary">
                                Address Name
                            </label>
                            <input
                                type="text"
                                id="addressName"
                                value={formData.addressName}
                                onChange={handleChange}
                                className="w-full p-2 border border-accent rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="addressLane" className="block font-semibold text-primary">
                                Address Lane
                            </label>
                            <input
                                type="text"
                                id="addressLane"
                                value={formData.addressLane}
                                onChange={handleChange}
                                className="w-full p-2 border border-accent rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="addressCity" className="block font-semibold text-primary">
                                Address City
                            </label>
                            <input
                                type="text"
                                id="addressCity"
                                value={formData.addressCity}
                                onChange={handleChange}
                                className="w-full p-2 border border-accent rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="addressState" className="block font-semibold text-primary">
                                Address State
                            </label>
                            <input
                                type="text"
                                id="addressState"
                                value={formData.addressState}
                                onChange={handleChange}
                                className="w-full p-2 border border-accent rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="addressCode" className="block font-semibold text-primary">
                                Address Code
                            </label>
                            <input
                                type="number"
                                id="addressCode"
                                value={formData.addressCode}
                                onChange={handleChange}
                                className="w-full p-2 border border-accent rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="contactNo" className="block font-semibold text-primary">
                                Contact No
                            </label>
                            <input
                                type="number"
                                id="contactNo"
                                value={formData.contactNo}
                                onChange={handleChange}
                                className="w-full p-2 border border-accent rounded"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                            <label htmlFor="email" className="block font-semibold text-primary">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-accent rounded"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={handleClear}
                            className="px-6 py-2 bg-primary text-white rounded hover:bg-secondary"
                        >
                            Clear
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-primary text-white rounded hover:bg-secondary"
                        >
                        {isUpdateMode ? "Update" : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StaffFormModal;