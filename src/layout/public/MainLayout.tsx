import { Outlet } from "react-router";

// Components
import Navbar from "../../components/public/layout/navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="pt-16">
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
