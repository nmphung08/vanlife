import React from "react"
import { useRouteError } from "react-router-dom"
export default function Error() {
    const error = useRouteError()
    return (
        <div className="font-medium text-xl text-center mt-8">{error.status} - {error.statusText} - {error.message}</div>
    )
}