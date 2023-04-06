import React from "react"
import { getVan } from "../../api"
import {
    Link,
    defer,
    Await,
    useLoaderData,
    useLocation,
} from "react-router-dom"

export async function loader({ request, params }) {
    return defer({ van: getVan(params.id) })
}

export default function VanDetail() {
    function renderVan(van) {
        return (
            <div className="mt-8">
                <img className="rounded-md mx-auto" src={van.imageUrl} />
                <span className={`inline-block mt-8 px-6 py-2 text-orange-50 ${`bg-${van.type}`} rounded-md`}>{van.type}</span>
                <div className="mt-6 text-3xl font-semibold">{van.name}</div>
                <span className="inline-block mt-4 text-xl font-semibold">${van.price}<span className="font-normal">/day</span></span>
                <p className="mt-6">{van.description}</p>
                <div className="mt-4 block cursor-pointer text-center text-white text-lg font-bold bg-orange-400 rounded-md py-2 hover:translate-x-[1px] hover:translate-y-[1px]">Rent this van</div>
            </div>
        )
    }
    const vanPromise = useLoaderData().van
    const data = useLocation()
    const type = data.state? data.state.type : undefined
    return (
        <div className="container mx-auto mb-12">
            <Link to={`${!type ? ".." : `..?type=${type}`}`} relative="path">
                ← <span className="hover:underline font-thin">Back to {type ? type : "all"} vans</span>
            </Link>
            <React.Suspense fallback={<div className="mt-4 ml-8 font-medium text-lg">Loading van...</div>}>
                <Await resolve={vanPromise}>{renderVan}</Await>
            </React.Suspense>
        </div>
    )
}
