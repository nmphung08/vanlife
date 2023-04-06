import React from "react"
import { BsStarFill } from "react-icons/bs"
import { Await, Link, defer, useLoaderData } from "react-router-dom"
import {getHostVans} from "../../api"

export async function loader() {
    return defer({hostVans: getHostVans()})
}



export default function Dashboard() {
    const hostVansPromise = useLoaderData().hostVans

    function renderHostVansElement(vans) {
        const hostVansElement = vans.map((van) => {
            return (
                <div key={van.id} className="flex flex-row justify-between items-center bg-white py-4 px-6">
                    <div className="flex flex-row items-center">
                        <img className="h-[70px] rounded-md" src={van.imageUrl}/>
                        <div className="flex flex-col justify-evenly ml-4">
                            <span className="text-lg font-semibold">{van.name}</span>
                            <span className="font-thin">${van.price}/day</span>
                        </div>
                    </div>
                    <Link to={`vans/${van.id}`}>View</Link>
                </div>
            )
        })
    
        return (
            <div className="grid grid-cols-1 gap-4 mt-6">
                {hostVansElement}
            </div>
        )
    }
    return (
        <div className="my-8">
            <div className="flex flex-row justify-between px-8 py-6 items-center bg-orange-100">
                <div className="flex flex-col justify-evenly">
                    <span className="text-3xl font-bold">Welcome!</span>
                    <span className="text-gray-600 font-thin mt-4">Income last <span className="underline font-semibold">30 days</span></span>
                    <span className="text-3xl font-black mt-4">$2,260</span>
                </div>
                <Link to="income" className="cursor-pointer">Details</Link>
            </div>
            <div className="flex flex-row items-center justify-between py-6 px-8 bg-orange-200">
                <div className="flex flex-row items-center">
                    <span className="text-xl font-bold">Review score</span>
                    <span className="flex flex-row items-center ml-8"><BsStarFill className="text-orange-400 text-2xl"/><span className="ml-2 font-bold">5.0/</span>5</span>
                </div>
                <Link to="reviews">Details</Link>
            </div>
            <div className="mt-8 px-8">
                <div className="flex flex-row items-center justify-between">
                    <span className="text-2xl font-bold">Your listed vans</span>
                    <Link to="vans">View all</Link>
                </div>
                <React.Suspense fallback={<div className="text-lg font-medium">Loading host vans...</div>}>
                    <Await resolve={hostVansPromise}>{renderHostVansElement}</Await>
                </React.Suspense>

            </div>
        </div>
    )
}

