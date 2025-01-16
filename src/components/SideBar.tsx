import { NavLink } from "react-router-dom";
import mainLogo from "../assets/main-logo.png";

export function SideBar() {
    return (
        <>
            <div className="w-64 h-screen bg-primary text-white fixed flex flex-col font-poppins">
                <div className="flex flex-col items-center py-6 bg-secondary">
                    <img
                        src={mainLogo}
                        alt="Profile"
                        className="w-12 h-12 rounded-full"
                    />
                </div>

                <div className="flex-1 mt-6">
                    <nav>
                        <ul className="flex flex-col">
                            <li className="flex items-center gap-4 px-6 py-3 hover:bg-secondary transition rounded">
                                <i className="fas fa-home w-6 text-center"></i>
                                <NavLink className="flex-1" to="/">
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="flex items-center gap-4 px-6 py-3 hover:bg-secondary transition rounded">
                                <i className="fa-solid fa-users w-6 text-center"></i>
                                <NavLink className="flex-1" to="/staffs">
                                    Staffs
                                </NavLink>
                            </li>
                            <li className="flex items-center gap-4 px-6 py-3 hover:bg-secondary transition rounded">
                                <i className="fa-solid fa-location-dot w-6 text-center"></i>
                                <NavLink className="flex-1" to="/fields">
                                    Fields
                                </NavLink>
                            </li>
                            <li className="flex items-center gap-4 px-6 py-3 hover:bg-secondary transition rounded">
                                <i className="fa-solid fa-leaf w-6 text-center"></i>
                                <NavLink className="flex-1" to="/crops">
                                    Crops
                                </NavLink>
                            </li>
                            <li className="flex items-center gap-4 px-6 py-3 hover:bg-secondary transition rounded">
                                <i className="fa-solid fa-screwdriver-wrench w-6 text-center"></i>
                                <NavLink className="flex-1" to="/log">
                                    Monitoring Log
                                </NavLink>
                            </li>
                            <li className="flex items-center gap-4 px-6 py-3 hover:bg-secondary transition rounded">
                                <i className="fa-solid fa-screwdriver-wrench w-6 text-center"></i>
                                <NavLink className="flex-1" to="/equipments">
                                    Equipments
                                </NavLink>
                            </li>
                            <li className="flex items-center gap-4 px-6 py-3 hover:bg-secondary transition rounded">
                                <i className="fa-solid fa-tractor w-6 text-center"></i>
                                <NavLink className="flex-1" to="/vehicles">
                                    Vehicles
                                </NavLink>
                            </li>
                            <li className="flex items-center gap-4 px-6 py-3 hover:bg-secondary transition rounded mt-16">
                                <i className="fas fa-sign-out-alt w-6 text-center"></i>
                                <NavLink className="flex-1" to="">
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="p-4 bg-secondary text-center mt-auto">
                    <small className="text-white">© 2025 Green Shadow (Pvt) Ltd</small>
                </div>
            </div>
        </>
    );
}
