import { useState } from "react";
import { Link, NavLink } from "react-router";

import type { NavItem } from "../../../types/layout/navbar.ds";
import { HomeIcon, MailIcon, UsersIcon } from "lucide-react";

const navItems: NavItem[] = [
    {
        name: "Inicio",
        icon: <HomeIcon size={32} />,
        to: "/",
    },
    {
        name: "Quienes Somos",
        icon: <UsersIcon size={32} />,
        to: "/quienes-somos",
    },
    {
        name: "Contacto",
        icon: <MailIcon size={32} />,
        to: "/contacto",
    },
];

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <nav className="fixed flex justify-between items-center p-4 w-full h-16 bg-[var(--color-primary)]">
            <Link to="/">
                {/* <img src="/logo.png" alt="BiMEET" className="w-[64px] h-[64px]" /> */}
                <p className="text-3xl font-bold">BiMEET</p>
            </Link>
            <div className="flex flex-1 justify-center items-center gap-2">
                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        className={({ isActive }) =>
                            `flex items-center gap-2 group rounded-lg hover:shadow-md hover:translate-y-[-2px] active:translate-y-[0px] active:bg-[var(--color-primary-light)] p-2 transition-all duration-150 font-medium text-white text-2xl ${
                                isActive
                                    ? setIsActive(true)
                                    : setIsActive(false)
                            }`
                        }
                        to={item.to}
                    >
                        {item.icon}
                        {item.name}
                        <img
                            src="/huella-zapato.png"
                            alt="Huella Zapato"
                            className={`w-[42px] h-[42px] rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-150 group-active:opacity-100 ${
                                isActive ? "group-active:opacity-100" : ""
                            }`}
                        />
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
