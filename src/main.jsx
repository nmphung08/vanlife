import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Login from "./pages/Login"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Dashboard, { loader as dashboardLoader } from "./pages/Host/Dashboard"
import HostVanDetail, {
    loader as hostVanLoader,
} from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans"
import Income from "./pages/Host/Income"
import Photos from "./pages/Host/Photos"
import Pricing from "./pages/Host/Pricing"
import Reviews from "./pages/Host/Reviews"
import VanDetail, { loader as vanLoader } from "./pages/Vans/VanDetail"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import HostLayout from "./components/HostLayout"
import Layout from "./components/Layout"
import Error from "./components/Error"
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import "./server"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<Error />}>
            <Route index element={<Home />} errorElement={<Error />} />
            <Route path="login" element={<Login />} errorElement={<Error />} />
            <Route path="about" element={<About />} errorElement={<Error />} />
            <Route
                path="vans"
                element={<Vans />}
                errorElement={<Error />}
                loader={vansLoader}
            />
            <Route
                path="vans/:id"
                element={<VanDetail />}
                loader={vanLoader}
                errorElement={<Error />}
            />
            <Route
                path="host"
                element={<HostLayout />}
                errorElement={<Error />}
            >
                <Route
                    index
                    element={<Dashboard />}
                    loader={dashboardLoader}
                    errorElement={<Error />}
                />
                <Route
                    path="income"
                    element={<Income />}
                    errorElement={<Error />}
                />
                <Route
                    path="reviews"
                    element={<Reviews />}
                    errorElement={<Error />}
                />
                <Route
                    path="vans"
                    element={<HostVans />}
                    loader={hostVansLoader}
                    errorElement={<Error />}
                />
                <Route
                    path="vans/:id"
                    element={<HostVanDetail />}
                    loader={hostVanLoader}
                    errorElement={<Error />}
                >
                    <Route
                        index
                        element={<HostVanInfo />}
                        errorElement={<Error />}
                    />
                    <Route
                        path="pricing"
                        element={<Pricing />}
                        errorElement={<Error />}
                    />
                    <Route
                        path="photos"
                        element={<Photos />}
                        errorElement={<Error />}
                    />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
