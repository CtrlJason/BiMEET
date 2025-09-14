// Types
import type { NavItem } from "../../../types/layout/navbar.ds";

// Icons - UI
import { Grid2x2Icon, HomeIcon } from "lucide-react";

// React Router
import { Link } from "react-router";

const navItems: NavItem[] = [
    {
        name: "Inicio",
        icon: <HomeIcon size={32} />,
        to: "/",
    },
    {
        name: "Proximamente...",
        icon: <Grid2x2Icon size={32} />,
        to: "#",
    },
];

const Navbar = () => {
    return (
        <div>
            <nav className="fixed gap-10 h-screen w-fit p-4 flex flex-col bg-primary">
                {/* <img
                    src="/logo.png"
                    alt="BiMEET"
                    className="w-[64px] h-[64px]"
                /> */}
                <p className="text-white text-2xl font-bold">BiMEET</p>
                {navItems.map((item, index) => (
                    <Link
                        className="flex items-center rounded-lg hover:shadow-md p-2 transition-all duration-150 gap-2 font-medium text-white text-2xl"
                        key={index}
                        to={item.to}
                    >
                        {item.icon}
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
