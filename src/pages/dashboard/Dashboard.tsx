import {SearchBar} from "../../components/common/SearchBar.tsx";
import {useSelector} from "react-redux";
import {Staff} from "../../models/Staff.ts";
import {DashboardStats} from "../../components/dashboard/DashboardStats.tsx";
import {Field} from "../../models/Field.ts";
import {Crop} from "../../models/Crop.ts";
import {Vehicle} from "../../models/Vehicle.ts";

export function Dashboard() {
    const staffs = useSelector((state: { staffs: Staff[] }) => state.staffs);
    const fields = useSelector((state: { fields: Field[] }) => state.fields);
    const crops = useSelector((state: { crops: Crop[] }) => state.crops);
    const vehicles = useSelector((state: { vehicles: Vehicle[] }) => state.vehicles);

    return (
        <>
            <div className="ml-[250px] p-5 transition-all ease-in-out duration-300 bg-background h-lvh">
                <SearchBar/>
                    <div className="flex justify-between w-full overflow-x-auto bg-accent rounded-[15px] p-6 mt-6 shadow-md">
                        <DashboardStats label="Total Staffs" value={staffs.length}/>
                        <DashboardStats label="Total Fields" value={fields.length}/>
                        <DashboardStats label="Total Crops" value={crops.length}/>
                        <DashboardStats label="Total Vehicles" value={vehicles.length}/>
                    </div>
            </div>
        </>
    );
}