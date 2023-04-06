import React from "react"
import {
    defer,
    useLoaderData,
    Link,
    Await,
    NavLink,
    Outlet,
} from "react-router-dom"
import { getHostVan } from "../../api"

export function loader({ request, params }) {
    const id = params.id
    return defer({ hostVan: getHostVan(id) })
}

export default function HostVanDetail() {
    function renderHostVan(van) {
        return (
            <div className="flex flex-row items-center">
                <img src={van.imageUrl} className="w-[10rem] rounded-lg" />
                <div className="ml-4">
                    <span className="py-2 px-4 bg-orange-100 rounded-md font-medium text-zinc-600">{van.type}</span>
                    <div className="mt-6 text-2xl font-bold">{van.name}</div>
                    <div className="text-xl font-semibold">${van.price}/day</div>
                </div>
            </div>
        )
    }

    function render(van) {
        return (
            <div className="mt-8 p-6 bg-white rounded-sm">
                {renderHostVan(van)}
                <nav className="flex items-center mt-6">
                    <NavLink
                        to="."
                        end
                        className={({ isActive }) =>
                            `font-medium mr-8 text-gray-700 hover:text-black hover:underline ${
                                isActive &&
                                "underline !text-black !font-semibold"
                            }`
                        }
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        className={({ isActive }) =>
                            `font-medium mr-8 text-gray-700 hover:text-black hover:underline ${
                                isActive &&
                                "underline !text-black !font-semibold"
                            }`
                        }
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        className={({ isActive }) =>
                            `font-medium mr-8 text-gray-700 hover:text-black hover:underline ${
                                isActive &&
                                "underline !text-black !font-semibold"
                            }`
                        }
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={van} />
            </div>
        )
    }
    const hostVanPromise = useLoaderData().hostVan

    return (
        <div className="px-6 mb-12">
            <Link to="/host/vans" className="block mt-6 ml-4">
                ← <span className="hover:underline">Back to all vans</span>
            </Link>
            <React.Suspense
                fallback={
                    <div className="text-lg font-medium mt-4">
                        Loading host van...
                    </div>
                }
            >
                <Await resolve={hostVanPromise}>{render}</Await>
            </React.Suspense>
        </div>
    )
}
