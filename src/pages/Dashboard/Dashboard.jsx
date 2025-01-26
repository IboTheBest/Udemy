import React from 'react'
import { AddAdminIcon, AddClassesIcon, AddStudentsIcon, NotificationIcon } from '../../assets/icons'
import LogginOutBtn from '../../components/LogginOutBtn'
const Dashboard = () => {
  return (
    <div >
      <div className='px-[125px] flex items-center justify-between bg-[#FCFAFA]'>
        <div className='pt-[34px] pb-[21px] flex flex-col'>
          <span className='text-[#424242] font-medium text-[16px]'>Learn  how to launch faster</span>
          <span className='text-[16px] text-[#424242] font-normal'>watch our webinar for tips from our experts and get a limited time offer.</span>
        </div>
        <div className='flex gap-[48px] items-center'>
          <NotificationIcon />
          <LogginOutBtn title={"Log out"} />
        </div>
      </div>
      <h2 className='text-[#4F4F4F] font-semibold text-[32px] mt-[53px] text-center'>Welcome to your dashboard, Udemy school</h2>
      <p className='text-[#4F4F4F] text-[24px] font-semibold mt-[23px] text-center ml-[-100px] mb-[68px]'>Uyo/school/@teachable.com</p>
      <ul className='flex gap-[51px] flex-col items-center'>
        <li className='flex items-start gap-[20px] '>
          <div className='bg-[#EFF3FA] p-[6px] rounded-[8px] inline-block'><AddAdminIcon/></div>
          <div className='w-[583px]'>
            <h3 className='font-medium mb-[16px] text-[24px] text-[#4F4F4F]'>Add other admins </h3>
            <p className='text-[#4F4F4F] font-normal text-[14px]'>Create rich course content and coaching products for your students.
              When you give them a pricing plan, they’ll appear on your site!</p>
          </div>
        </li>
        <li className='flex items-start gap-[20px] '>
          <div className='bg-[#EFF3FA] p-[6px] rounded-[8px] inline-block'><AddClassesIcon/></div>
          <div className='w-[583px]'>
            <h3 className='font-medium mb-[16px] text-[24px] text-[#4F4F4F]'>Add classes  </h3>
            <p className='text-[#4F4F4F] font-normal text-[14px]'>Create rich course content and coaching products for your students.
            When you give them a pricing plan, they’ll appear on your site!</p>
          </div>
        </li>
        <li className='flex items-start gap-[20px] '>
          <div className='bg-[#EFF3FA] p-[6px] rounded-[8px] inline-block'><AddStudentsIcon/></div>
          <div className='w-[583px]'>
            <h3 className='font-medium mb-[16px] text-[24px] text-[#4F4F4F]'>Add students </h3>
            <p className='text-[#4F4F4F] font-normal text-[14px]'>Create rich course content and coaching products for your students.
            When you give them a pricing plan, they’ll appear on your site!</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Dashboard