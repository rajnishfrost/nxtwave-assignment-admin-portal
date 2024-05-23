import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute({ isAuthenticated }) {
    if (!isAuthenticated)
        return <Navigate to={"/log-in"} />
    return <Outlet />
}
