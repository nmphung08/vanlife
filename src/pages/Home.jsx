import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="relative h-[500px] bg-home-hero bg-cover bg-center bg-no-repeat">
            <div className="w-full h-full bg-gradient-to-r from-black/40 to-black/40 absolute flex flex-col justify-around items-center">
                <div className="container">
                    <div className="text-white text-3xl font-bold">
                        You got the travel plans, we got the travel vans.
                    </div>
                    <div className="text-white mt-4">
                        Add adventure to your life by joining the #vanlife
                        movement. Rent the perfect van to make your perfect road
                        trip.
                    </div>
                    <Link
                        to="vans"
                        className="block py-2 bg-orange-400 w-full text-center text-white font-bold rounded-md mt-20 hover:translate-x-[.5px] hover:translate-y-[.5px] hover:opacity-95"
                    >
                        Find your vans
                    </Link>
                </div>
            </div>
        </div>
    )
}
