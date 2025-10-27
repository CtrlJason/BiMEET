import { createBrowserRouter, RouterProvider } from "react-router";

// Routes
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";

const AppRoutes = () => {
    const routes = createBrowserRouter([...publicRoutes, ...privateRoutes]);
    return <RouterProvider router={routes} />;
};

export default AppRoutes;
