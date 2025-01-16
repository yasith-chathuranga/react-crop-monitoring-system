import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addStaff} from "../reducers/StaffSlice.ts";
import {SearchBar} from "../components/SearchBar.tsx";
import {TableModel} from "../components/TableModel.tsx";
import {AddBtnModel} from "../components/AddBtnModel.tsx";

export function Staffs() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [designation, setDesignation] = useState('');
    const [role, setRole] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [joinedDate, setJoinedDate] = useState('');
    const [addressName, setAddressName] = useState('');
    const [addressLane, setAddressLane] = useState('');
    const [addressCity, setAddressCity] = useState('');
    const [addressState, setAddressState] = useState('');
    const [addressCode, setAddressCode] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');

    const columns = ["id", "firstName", "designation", "role"];

    const staffData = [
        { id: "S1", firstName: "Alice", designation: "Manager", role: "Admin" },
        { id: "S2", firstName: "Bob", designation: "Scientist", role: "Researcher" },
    ];

    const handleAddStaff = () => {
        const newStaff = {id: Math.random().toString(), firstName, lastName, designation, role, gender, dob, joinedDate, addressName, addressLane, addressCity, addressState, addressCode, contactNo, email};
        dispatch(addStaff(newStaff));
        navigate('/');
    }


    return (
        <>
            <div className="ml-[250px] p-5 transition-all ease-in-out duration-300 bg-background h-lvh">
                <div>
                    <SearchBar></SearchBar>
                </div>
                <div className="flex justify-end">
                    <AddBtnModel onClick={handleAddStaff}>Add New Staff</AddBtnModel>
                </div>
                <div className="bg-white rounded-[15px] p-6 mt-8 shadow-md">
                    <h1 className="text-2xl font-medium mb-4">Staff Records</h1>
                    <TableModel columns={columns} data={staffData}/>
                </div>
            </div>

        </>
    );
}