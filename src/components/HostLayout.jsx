import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    return (
        <div>
            <nav className="flex items-center">
                <NavLink
                    to="."
                    end
                    className={({ isActive }) =>
                        `font-medium ml-8 text-gray-700 hover:text-black hover:underline ${
                            isActive && "underline !text-black !font-semibold"
                        }`
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="income"
                    className={({ isActive }) =>
                        `font-medium ml-8 text-gray-700 hover:text-black hover:underline ${
                            isActive && "underline !text-black !font-semibold"
                        }`
                    }
                >
                    Income
                </NavLink>
                <NavLink
                    to="vans"
                    className={({ isActive }) =>
                        `font-medium ml-8 text-gray-700 hover:text-black hover:underline ${
                            isActive && "underline !text-black !font-semibold"
                        }`
                    }
                >
                    Vans
                </NavLink>
                <NavLink
                    to="reviews"
                    className={({ isActive }) =>
                        `font-medium ml-8 text-gray-700 hover:text-black hover:underline ${
                            isActive && "underline !text-black !font-semibold"
                        }`
                    }
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
