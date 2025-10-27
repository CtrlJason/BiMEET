// Layout del módulo BiMeet
import BimeetLayout from "../modules/bimeet/layout/MainLayout";

// Páginas
import Dashboard from "../pages/bimeet/home/Dashboard";

const privateRoutes = [
    {
        element: <BimeetLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
];

export default privateRoutes;
