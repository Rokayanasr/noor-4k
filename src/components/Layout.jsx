import { Outlet } from "react-router-dom";
import Navi from "./Navi";

function Layout() {
    return (
        <>
            <Navi />
            <Outlet/>
        </>
    );
}

export default Layout;
