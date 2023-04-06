import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout() {
    return (
        <div>
            <Header />
            <main className="flex flex-col min-h-screen mx-auto">
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}
