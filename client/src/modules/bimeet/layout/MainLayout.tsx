import { useState } from "react";
import { Outlet } from "react-router";

// Components
import Navbar from "../components/layout/navbar";

const MainLayout = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Navbar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            <main className={`flex-1 transition-all duration-300 ${
                isExpanded ? "ml-64" : "ml-20"
            }`}>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
