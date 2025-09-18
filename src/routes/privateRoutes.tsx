import MainLayout from "../layout/bimeet/MainLayout";
import Dashboard from "../pages/bimeet/home/Dashboard";

const privateRoutes = [
    {
        element: <MainLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
];

export default privateRoutes;
