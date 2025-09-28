// Layout
import MainLayout from "../layout/public/MainLayout";

// Pages
import Home from "../pages/public/home/Home";
import Login from "../pages/public/login/Login";
import ErrorPage from "../pages/public/error/ErrorPage";
import AboutUs from "../pages/public/about-us/AboutUs";
import Contact from "../pages/public/contact/Contact";

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
            {
                path: "/quienes-somos",
                element: <AboutUs />,
            },
            {
                path: "/contacto",
                element: <Contact />,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
];

export default publicRoutes;
