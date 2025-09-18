import { Outlet } from "react-router";

// Components
import Navbar from "../../components/bimeet/layout/navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="h-screen ml-66">
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
