import React from "react"
import {useOutletContext} from "react-router-dom"

export default function Photos() {
    const van = useOutletContext()
    return (
        <img src={van.imageUrl} className="mt-6 rounded-md w-[6.5rem]"/>
        )
}
