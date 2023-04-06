import React from "react"
import {useOutletContext} from "react-router-dom"

export default function Pricing() {
    const van = useOutletContext()
    return (
        <div className="mt-8 text-zinc-600 font-medium"><span className="text-2xl font-semibold text-zinc-800">${van.price}</span>/day</div>
        )
}
