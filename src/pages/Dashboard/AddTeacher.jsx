import React, {  useState } from 'react'
import LoadingBtn from '../../components/LoadingBtn'
import noImg from '../../assets/images/noImg.jpg'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { PATH } from '../../hooks/usePath'
const AddTeacher = () => {
  const [image, setImage] = useState()
  const navigate = useNavigate()
  const subjectList = [
    { id: 1, name: "Mathematics" },
    { id: 2, name: "Science" },
    { id: 3, name: "English" },
    { id: 4, name: "History" },
    { id: 5, name: "Geography" },
    { id: 6, name: "Physics" },
    { id: 7, name: "Chemistry" },
    { id: 8, name: "Biology" },
    { id: 9, name: "Social Studies" },
    { id: 10, name: "Art" },
    { id: 11, name: "Computer Science" },
    { id: 12, name: "Physical Education" },
    { id: 13, name: "Music" },
    { id: 14, name: "Economics" },
    { id: 15, name: "Psychology" },
    { id: 16, name: "Political Science" },
  ]
  const classes = [
    "J SS 1", "J SS 2", "J SS 3", "J SS 4", "J SS 5",
    "SS 1", "SS 2", "SS 3", "SS 4"
  ];
  function handleSubmitAddForm(e) {
    e.preventDefault()
    const data = {
      name: e.target.teacher.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      about: e.target.aboutTeacher.value,
      class: e.target.classes.value,
      gender: e.target.gender.value,
      age: e.target.age.value,
      avatar:image
    }
    axios.post("http://localhost:3000/teachers", data)
    setTimeout(() => {
      navigate(PATH.teachers)
    }, 1000);
    setTimeout(() => {
      window.location.reload();
    }, 1000);    
  }
  return (
    <div className='pl-[38px] pr-[104px]'>
      <form onSubmit={handleSubmitAddForm}>
        <div className='flex py-[14px] mb-[41px] items-center justify-between'>
          <h2 className='font-medium text-[20px] text-[#4F4F4F]'>Teachers</h2>
          <LoadingBtn title={"Save"} />
        </div>
        <div className='flex justify-between items-start'>
          <div className='flex flex-col gap-[36px]'>
            <label>
              <span className='text-[#8A8A8A] block font-medium text-[14px]'>Full Name</span>
              <input name='teacher' required className='w-[407px] border-[0.5px] px-[10px] mt-[5px] border-[#A7A7A7] outline-none rounded-[4px] placeholder:text-[#8A8A8A] py-[13px] font-medium text-[14px]' type="text" placeholder='Full Name' />
            </label>
            <label>
              <span className='text-[#8A8A8A] block font-medium text-[14px]'>Email address</span>
              <input required name='email' className='w-[407px] border-[0.5px] px-[10px] mt-[5px] border-[#A7A7A7] outline-none rounded-[4px] placeholder:text-[#8A8A8A] py-[13px] font-medium text-[14px]' type="email" placeholder='Email address' />
            </label>
            <label>
              <span className='text-[#8A8A8A] block font-medium text-[14px]'>Subject</span>
              <select required className='w-[407px] border-[0.5px] px-[10px] mt-[5px] border-[#A7A7A7] outline-none rounded-[4px] py-[13px] font-medium text-[14px]' name="subject">
                {subjectList.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
              </select>
            </label>
            <label>
              <span className='text-[#8A8A8A] block font-medium text-[14px]'>About</span>
              <textarea required className='w-[407px] h-[172px] resize-none border-[0.5px] px-[10px] mt-[5px] border-[#A7A7A7] outline-none rounded-[4px] placeholder:text-[#8A8A8A] py-[13px] font-medium text-[14px]' placeholder='About' name="aboutTeacher"></textarea>
            </label>
          </div>
          <div className='flex flex-col gap-[36px]'>

            <label>
              <span className='text-[#8A8A8A] block font-medium text-[14px]'>Class</span>
              <select required className='w-[407px] border-[0.5px] px-[10px] mt-[5px] border-[#A7A7A7] outline-none rounded-[4px] py-[13px] font-medium text-[14px]' name="classes">
                {classes.map((item, index) => <option key={index} value={item}>{item}</option>)}
              </select>
            </label>
            <label>
              <span className='text-[#8A8A8A] block font-medium text-[14px]'>Class</span>
              <select required className='w-[407px] border-[0.5px] px-[10px] mt-[5px] border-[#A7A7A7] outline-none rounded-[4px] py-[13px] font-medium text-[14px]' name="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
            <label>
              <span className='text-[#8A8A8A] block font-medium text-[14px]'>Full Name</span>
              <input required className='w-[407px] border-[0.5px] px-[10px] mt-[5px] border-[#A7A7A7] outline-none rounded-[4px] placeholder:text-[#8A8A8A] py-[13px] font-medium text-[14px]' name='age' type="number" placeholder='Age' />
            </label>
            <label>
              <span className='text-[18px] text-[#4F4F4F] font-medium'>Import Img</span>
              <input className='hidden' onChange={(e)=> setImage(URL.createObjectURL(e.target.files[0]))} type="file" />
              <img src={image ? image : 
                noImg
              } alt="profileIMg" width={200} height={100} />
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddTeacher