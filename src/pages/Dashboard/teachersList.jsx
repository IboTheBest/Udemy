import React, { useContext, useState } from 'react'
import { SearchIcon, ShowAllIcon, SupportIcon } from '../../assets/icons/index'
import noTeachersImg from '../../assets/images/noTeachersImg.png'
import CustomizedTables from '../../components/Table'
import { Context } from '../../context/Context'
import LoadingBtn from '../../components/LoadingBtn'
const teachersList = () => {
    const { teachers } = useContext(Context)
    const [search, setSearch] = useState("")
    const filterdata = teachers.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            <div className='flex py-[14px] items-center justify-between'>
                <h2 className='font-medium text-[20px] text-[#4F4F4F]'>Teachers</h2>
                <LoadingBtn title={"Add Teachers"} />
            </div>
            <label className='bg-[#FCFAFA] flex items-center mt-[14px] gap-[16px] w-full p-[16px] rounded-lg'>
                <SearchIcon />
                <input onChange={(e) => setSearch(e.target.value)} className='placeholder:text-[#8A8A8A] outline-none w-full font-medium text-[14px] text-[#4F4F4F]' name='search' type="text" placeholder='Search for a student by name or email' />
            </label>
            {teachers.length == 0 ?
                <img className='mx-auto mt-[30px] object-contain w-full' src={noTeachersImg} alt="There is no teachers" />
                :
                <div>
                    <CustomizedTables teachers={filterdata} />
                </div>
            }
            <button className='absolute flex items-center justify-between px-[24px] bottom-[50px] bg-[#152259] w-[181px] py-[21px] right-[120px] font-semibold rounded-[30px] text-[14px] text-white'>
                <div className='flex items-center gap-2'>
                    <SupportIcon />
                    <span>Support</span>
                </div>
                <ShowAllIcon />
            </button>
        </>
    )
}

export default teachersList