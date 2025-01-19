import { Outlet, useLocation } from "react-router-dom";
import { SideBar } from "./SideBar.tsx";

export function RootLayout() {
    const location = useLocation();
    const hideSidebarRoutes = ["/","/signup"];

    const shouldShowSidebar = !hideSidebarRoutes.includes(location.pathname);

    return (
        <div className="flex h-screen">
            {shouldShowSidebar && <SideBar />}
            <div className={shouldShowSidebar ? "flex-grow" : "w-full"}>
                <Outlet />
            </div>
        </div>
    );
}
