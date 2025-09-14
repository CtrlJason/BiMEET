// Layout
import MainLayout from "../layout/public/MainLayout";

// Pages
import Home from "../pages/public/home/Home";
import Login from "../pages/public/login/Login";
import ErrorPage from "../pages/public/error/ErrorPage";

const publicRoutes = [
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
];

export default publicRoutes;
