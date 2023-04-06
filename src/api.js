async function getVans() {
    const res = await fetch("/api/vans")
    if (!res.ok) throw {
        status: res.status,
        statusText: res.statusText,
        message: JSON.parse(res._bodyText).message
    }
    
    const data = await res.json()   
    return data.vans
}

async function getHostVans() {
    const res = await fetch("/api/host/vans")
    if (!res.ok) throw {
        status: res.status,
        statusText: res.statusText,
        message: JSON.parse(res._bodyText).message
    }
    const data = await res.json()   
    return data.vans
}

async function getVan(id) {
    const res = await fetch(`/api/vans/${id}`)
    if (!res.ok) throw {
        status: res.status,
        statusText: res.statusText,
        message: JSON.parse(res._bodyText).message
    }
    const data = await res.json()   
    return data.vans
}

async function getHostVan(id) {
    const res = await fetch(`/api/host/vans/${id}`)
    if (!res.ok) throw {
        status: res.status,
        statusText: res.statusText,
        message: JSON.parse(res._bodyText).message
    }
    
    const data = await res.json()   
    return data.vans
}

export { getVans, getHostVans, getVan, getHostVan }
