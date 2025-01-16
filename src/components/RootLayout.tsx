import {Outlet} from "react-router-dom";
import {SideBar} from "./SideBar.tsx";

export function RootLayout() {
    return (
        <>
            <SideBar></SideBar>
            <Outlet></Outlet>
        </>
    );
}