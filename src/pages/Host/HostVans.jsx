import React from "react"
import { Link, Await, defer, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"

export async function loader() {
    return defer({ hostVans: getHostVans() })
}

export default function HostVans() {
    const hostVansPromise = useLoaderData().hostVans
    function renderHostVansElement(vans) {
        const hostVansElement = vans.map((van) => {
            return (
                <Link to={van.id} key={van.id} className="flex flex-row justify-between items-center bg-white py-4 px-6 rounded-md">
                    <div className="flex flex-row items-center">
                        <img className="h-[70px] rounded-md" src={van.imageUrl}/>
                        <div className="flex flex-col justify-evenly ml-4">
                            <span className="text-lg font-semibold">{van.name}</span>
                            <span className="font-thin">${van.price}/day</span>
                        </div>
                    </div>
                </Link>
            )
        })
    
        return (
            <div className="grid grid-cols-1 gap-4 mt-6">
                {hostVansElement}
            </div>
        )
    }
    return (
        <div className="px-6">
            <span className="text-2xl font-bold mt-6 block">Your listed vans</span>
            <React.Suspense
                fallback={
                    <div className="text-lg font-medium">
                           Loading host vans...
                    </div>
                }
            >
                <Await resolve={hostVansPromise}>{renderHostVansElement}</Await>
            </React.Suspense>
        </div>
    )
}
