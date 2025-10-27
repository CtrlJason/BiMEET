// React
import { useState } from "react";

// Icons
import { LayoutDashboard, Activity, Settings, ChevronRight, ChevronLeft } from "lucide-react";

// React Router
import { Link, useLocation } from "react-router";

type NavItem = {
    name: string;
    icon: React.ReactNode;
    to: string;
};

const navItems: NavItem[] = [
    {
        name: "Dashboard",
        icon: <LayoutDashboard className="w-5 h-5" />,
        to: "/dashboard",
    },
    {
        name: "Actividad",
        icon: <Activity className="w-5 h-5" />,
        to: "#",
    },
    {
        name: "Configuración",
        icon: <Settings className="w-5 h-5" />,
        to: "#",
    },
];

type NavbarProps = {
    isExpanded: boolean;
    setIsExpanded: (value: boolean) => void;
};

const Navbar = ({ isExpanded, setIsExpanded }: NavbarProps) => {
    const location = useLocation();

    return (
        <aside className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 flex flex-col shadow-lg transition-all duration-300 ${
            isExpanded ? "w-64" : "w-20"
        }`}>
            {/* Logo */}
            <div className="p-6 border-b border-gray-200 relative">
                <Link to="/dashboard" className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-white font-bold text-xl">B</span>
                    </div>
                    {isExpanded && (
                        <div>
                            <h1 className="text-gray-800 font-bold text-xl">BiMEET</h1>
                            <p className="text-green-600 text-xs font-medium">Baldosa Inteligente</p>
                        </div>
                    )}
                </Link>

                {/* Botón de toggle posicionado absolutamente */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
                    title={isExpanded ? "Colapsar menú" : "Expandir menú"}
                >
                    <ChevronLeft className={`w-4 h-4 transition-transform duration-300 ${
                        !isExpanded ? "rotate-180" : ""
                    }`} />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item, index) => {
                    const isActive = location.pathname === item.to;
                    return (
                        <Link
                            key={index}
                            to={item.to}
                            className={`flex items-center ${
                                isExpanded ? "justify-between" : "justify-center"
                            } px-4 py-3 rounded-lg transition-all duration-200 ${
                                isActive
                                    ? "bg-green-500 text-white shadow-md"
                                    : "text-gray-600 hover:bg-green-50 hover:text-green-600"
                            }`}
                            title={!isExpanded ? item.name : undefined}
                        >
                            <div className={`flex items-center ${isExpanded ? "gap-3" : ""}`}>
                                {item.icon}
                                {isExpanded && (
                                    <span className="font-medium">{item.name}</span>
                                )}
                            </div>
                            {isExpanded && isActive && (
                                <ChevronRight className="w-4 h-4" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            {isExpanded && (
                <div className="p-4 border-t border-gray-200">
                    <div className="text-xs text-gray-400 text-center">
                        © 2025 BiMEET
                    </div>
                </div>
            )}
        </aside>
    );
};

export default Navbar;
