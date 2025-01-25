import { PATH } from "./usePath"
import React from "react"
import Login from "../pages/Login/Login"
import Register from "../pages/Login/Register"
import { Billing, Dashboard, Exams, Settings_and_profile, Students, Teachers } from "../pages/Dashboard"

export const dashboardList = [
    {
        id: 1,
        element: <Dashboard />,
        path: PATH.dashboard
    },
    {
        id: 2,
        element: <Teachers />,
        path: PATH.teachers
    },
    {
        id: 3,
        element: <Students />,
        path: PATH.students
    },
    {
        id: 4,
        element: <Billing />,
        path: PATH.billing
    },
    {
        id: 5,
        element: <Settings_and_profile />,
        path: PATH.settings
    },
    {
        id: 6,
        element: <Exams />,
        path: PATH.exams
    },
]

export const loginList = [
    {
        id:1,
        path: PATH.login,
        element: <Login/>
    },
    {
        id:2,
        path: PATH.register,
        element: <Register/>
    }
]