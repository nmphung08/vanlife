import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="h-24 flex flex-row justify-between items-center px-4">
            <Link to="/" className="hover:underline text-2xl font-extrabold ">
                #VANLIFE
            </Link>
            <nav className="flex items-center">
                <NavLink
                    to="host"
                    className={({ isActive }) =>
                        `px-4 text-[#474747] font-semibold hover:underline hover:text-gray-900 ${
                            isActive && "underline text-black"
                        }`
                    }
                >
                    Host
                </NavLink>
                <NavLink
                    to="about"
                    className={({ isActive }) =>
                        `px-4 text-[#474747] font-semibold hover:underline hover:text-gray-900 ${
                            isActive && "underline text-black"
                        }`
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="vans"
                    className={({ isActive }) =>
                        `px-4 text-[#474747] font-semibold hover:underline hover:text-gray-900 ${
                            isActive && "underline text-black"
                        }`
                    }
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}
