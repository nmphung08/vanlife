import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const van = useOutletContext()
    return (
        <div>
            <div className="text-sm mt-10 font-medium">
                <span className="font-bold">Name: </span>
                {van.name}
            </div>
            <div className="text-sm mt-6 font-medium">
                <span className="font-bold">Category: </span>
                {van.type}
            </div>
            <div className="text-sm mt-6 font-medium">
                <span className="font-bold">Description: </span>
                {van.description}
            </div>
            <div className="text-sm mt-6 font-medium">
                <span className="font-bold">Visibility: </span>Public
            </div>
        </div>
    )
}
