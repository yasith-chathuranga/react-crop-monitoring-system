import { NavLink } from "react-router-dom";
import mainLogo from "../../assets/main-logo.png";

export function SideBar() {
    const navItems = [
        { path: "/dashboard", label: "Dashboard", icon: "fas fa-home" },
        { path: "/staffs", label: "Staffs", icon: "fa-solid fa-users" },
        { path: "/fields", label: "Fields", icon: "fa-solid fa-location-dot" },
        { path: "/crops", label: "Crops", icon: "fa-solid fa-leaf" },
        { path: "/logs", label: "Monitoring Log", icon: "fa-brands fa-watchman-monitoring" },
        { path: "/equipments", label: "Equipments", icon: "fa-solid fa-screwdriver-wrench" },
        { path: "/vehicles", label: "Vehicles", icon: "fa-solid fa-tractor" },
    ];

    return (
        <>
            <div className="w-64 h-screen bg-primary text-white fixed flex flex-col font-poppins">
                <div className="flex flex-col items-center py-6 bg-background">
                    <img
                        src={mainLogo}
                        alt="Profile"
                        className="w-48 h-36"
                    />
                </div>
                <div className="flex-1 mt-6">
                    <nav>
                        <ul className="flex flex-col">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive ? "bg-secondary text-white" : ""
                                    }
                                >
                                    <li
                                        className={`flex items-center gap-4 px-6 py-3 hover:bg-secondary transition rounded ${
                                            window.location.pathname === item.path ? "" : ""
                                        }`}
                                    >
                                        <i className={`${item.icon} w-6 text-center`}></i>
                                        <span className="flex-1">{item.label}</span>
                                    </li>
                                </NavLink>
                            ))}
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "" : ""
                                }
                            >
                                <li className="flex items-center gap-4 px-6 py-3 hover:bg-secondary transition rounded mt-16">
                                    <i className="fas fa-sign-out-alt w-6 text-center"></i>
                                    <span className="flex-1">Logout</span>
                                </li>
                            </NavLink>
                        </ul>
                    </nav>
                </div>
                <div className="p-4 bg-background text-center mt-auto">
                    <small className="text-primary">© 2025 Green Shadow (Pvt) Ltd</small>
                </div>
            </div>
        </>
    );
}