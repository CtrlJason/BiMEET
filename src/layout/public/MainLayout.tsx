import { Outlet } from "react-router";

// Components
import Navbar from "../../components/layout/public/navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default MainLayout;
