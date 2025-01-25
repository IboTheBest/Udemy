import React from 'react'
import Icon from '../assets/images/UdemiIcon.png'
import { BillingIcon, DashboardIcon, ExamsIcon, FeaturesIcon, SettingsIcon, StudentsIcon } from '../assets/icons'
import { PATH } from '../hooks/usePath'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const NavList = [
        {
            id:1,
            title: "Dashboard",
            icon: <DashboardIcon/>,
            path: PATH.dashboard
        },
        {
            id:2,
            title: "Teachers",
            icon: <DashboardIcon/>,
            path: PATH.teachers
        },
        {
            id:3,
            title: "Students",
            icon: <StudentsIcon/>,
            path: PATH.students
        },
        {
            id:4,
            title: "Billing",
            icon: <BillingIcon/>,
            path: PATH.billing
        },
        {
            id:5,
            title: "Settings and profile",
            icon: <SettingsIcon/>,
            path: PATH.settings
        },
        {
            id:6,
            title: "Exams",
            icon: <ExamsIcon/>,
            path: PATH.exams
        },
    ]
  return (
    <nav className='bg-[#152259] h-[100vh] overflow-y-auto w-[20%]'>
        <img src={Icon} width={65} className='mx-auto mt-[26px]' height={65} alt="Site logo" />
            <h3 className='text-center text-white mt-[22px] text-[14px] mb-[27px] font-semibold'>Udemy Inter. school</h3>
        <div className='flex gap-[9px] pt-[16px] border-t-[1px] border-gray-100 flex-col mx-auto'>
           {NavList.map(item=>(
                <NavLink className={"flex w-[232px] duration-400 rounded-md mx-auto items-center gap-[16px] px-[16px] py-[12px] text-white text-[14px] font-semibold"} key={item.id} to={item.path}>{item.icon} {item.title}</NavLink>
           ))}
           <NavLink className={"flex w-[232px] duration-400 mt-[114px] rounded-md mx-auto items-center gap-[16px] px-[16px] py-[12px] text-white text-[14px] font-semibold"} to={PATH.features}><FeaturesIcon/> <span>Features</span></NavLink>
        </div>
    </nav>
  )
}

export default Navbar