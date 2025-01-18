import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStaff } from "../reducers/StaffSlice";
import { SearchBar } from "../components/SearchBar";
import { TableModel } from "../components/TableModel";
import { AddBtnModel } from "../components/AddBtnModel";
import StaffFormModel from "../components/StaffFormModel";

export function Staffs() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    const columns = ["id", "firstName", "designation", "role"];

    const staffData = [
        { id: "S1", firstName: "Alice", designation: "Manager", role: "Admin" },
        { id: "S2", firstName: "Bob", designation: "Scientist", role: "Researcher" },
    ];

    const handleAddStaff = () => {
        const newStaff = {
            id: Math.random().toString(),
            firstName,
            lastName,
            designation,
            role,
            gender,
            dob,
            joinedDate,
            addressName,
            addressLane,
            addressCity,
            addressState,
            addressCode,
            contactNo,
            email,
        };
        dispatch(addStaff(newStaff));
        navigate("/staffs");
    };

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const showPopup = () => {
        setIsPopupVisible(true);
    };

    const hidePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <>
            <div className="ml-[250px] p-5 transition-all ease-in-out duration-300 bg-background h-lvh">
                <div>
                    <SearchBar />
                </div>
                <div className="flex justify-end">
                    <AddBtnModel onClick={showPopup}>Add New Staff</AddBtnModel>
                    {isPopupVisible && (
                        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-semibold">Add Staff</h2>
                                    <button
                                        onClick={hidePopup}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        &times;
                                    </button>
                                </div>
                                <StaffFormModel
                                    id={id}
                                    setId={setId}
                                    firstName={firstName}
                                    setFirstName={setFirstName}
                                    lastName={lastName}
                                    setLastName={setLastName}
                                    designation={designation}
                                    setDesignation={setDesignation}
                                    role={role}
                                    setRole={setRole}
                                    gender={gender}
                                    setGender={setGender}
                                    dob={dob}
                                    setDob={setDob}
                                    joinedDate={joinedDate}
                                    setJoinedDate={setJoinedDate}
                                    addressName={addressName}
                                    setAddressName={setAddressName}
                                    addressLane={addressLane}
                                    setAddressLane={setAddressLane}
                                    addressCity={addressCity}
                                    setAddressCity={setAddressCity}
                                    addressState={addressState}
                                    setAddressState={setAddressState}
                                    addressCode={addressCode}
                                    setAddressCode={setAddressCode}
                                    contactNo={contactNo}
                                    setContactNo={setContactNo}
                                    email={email}
                                    setEmail={setEmail}
                                    handleSaveStaff={handleAddStaff}
                                    onClose={hidePopup}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className="bg-white rounded-[15px] p-6 mt-8 shadow-md">
                    <h1 className="text-2xl font-medium mb-4">Staff Records</h1>
                    <TableModel columns={columns} data={staffData} />
                </div>
            </div>
        </>
    );
}