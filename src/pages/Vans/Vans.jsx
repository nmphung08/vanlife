import React from "react"
import {
    Link,
    useLoaderData,
    defer,
    Await,
    useSearchParams,
} from "react-router-dom"
import { getVans } from "../../api"

export function loader({ request }) {
    return defer({ vans: getVans() })
}

function typeColor(type) {
    switch (type) {
        case "simple":
            return "bg-simple"
        case "rugged":
            return "bg-rugged"
        case "luxury":
            return "bg-luxury"
    }
}


export default function Vans() {
    function renderVansElement(vans) {
        const [searchParams, setSearchParams] = useSearchParams()
        const type = searchParams.get("type")
        function setType(e) {
            
            const type = e ? e.target.innerHTML.toLowerCase() : undefined
            setSearchParams((prevParams) => {
                if (type) {
                    prevParams.set("type", type)
                } else {
                    prevParams.delete("type")
                }
                return prevParams
            })
        }
        let filteredVans
        filteredVans = type ? vans.filter((van) => van.type == type) : vans
        const renderedVans = filteredVans.map((van) => {
            return (
                <Link to={`${van.id}`} className="h-full w-full" key={van.id} state={{type}}>
                    <img src={van.imageUrl} className="rounded-md" />
                    <div className="font-bold text-lg mt-4">{van.name}</div>
                    <div className="mt-6">{`$${van.price}/day`}</div>
                    <div
                        className={`mt-2 py-2 px-6 text-orange-100 font-medium inline-block ${typeColor(
                            van.type
                        )} rounded-md`}
                    >
                        {van.type}
                    </div>
                </Link>
            )
        })
        return (
            <div>
                <div className="flex items-center mt-4">
                    <span
                        className="mr-6 py-2 px-4 bg-orange-100 rounded-md text-gray-600 font-medium hover:bg-simple hover:text-orange-100 hover:cursor-pointer shadow-md"
                        onClick={() => setType(event)}
                    >
                        Simple
                    </span>
                    <span
                        className="mr-6 py-2 px-4 bg-orange-100 rounded-md text-gray-600 font-medium hover:bg-rugged hover:text-orange-100 hover:cursor-pointer shadow-md"
                        onClick={() => setType(event)}
                    >
                        Luxury
                    </span>
                    <span
                        className="mr-6 py-2 px-4 bg-orange-100 rounded-md text-gray-600 font-medium hover:bg-luxury hover:text-orange-100 hover:cursor-pointer shadow-md"
                        onClick={() => setType(event)}
                    >
                        Rugged
                    </span>
                    {type && <span onClick={() => setType()} className="underline cursor-pointer font-medium text-gray-800">Clear filter</span>}
                </div>
                <div className="grid grid-cols-2 gap-6 mt-16">{renderedVans}</div>
            </div>
        )
    }
    

    const vansPromise = useLoaderData().vans

    return (
        <div className="container mx-auto my-4">
            <div className="text-3xl font-bold ">Explore our van options</div>
            <React.Suspense
                fallback={
                    <div className="text-2xl font-semibold mt-6">
                        Loading vans...
                    </div>
                }
            >
                <Await resolve={vansPromise}>{renderVansElement}</Await>
            </React.Suspense>
        </div>
    )
}
