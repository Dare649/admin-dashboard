import React, { useState } from 'react'
import { BsArrowLeftCircle } from "react-icons/bs";
import { datas } from './data'
import { NavLink } from 'react-router-dom'

const SideBar = ({children}) => {
    const [open, setOpen] = useState(true);



  return (
    <div className='w-auto'>
      <div className='flex '>
        {/* Sidebar */}

      <div className={`${
        open ? "w-[20%]": "w-[8%]"
        } container duration-200 h-screen relative w-[20%] bg-delivery p-1 pt-8`}>
        <BsArrowLeftCircle className={`w-8 h-8 absolute cursor-pointer -right-4 bg-white rounded-full border-2 top-1 ${open && 'rotate-180'}`} onClick={() => setOpen(!open)}/>

          <div className='flex gap-x-4 pl-2 item center'>
            <img src="./src/images/admin-lady.jpg" alt="" className={`cursor-pointer duration-500 w-20 h-20 rounded-full border-2`} />

            <h1
              className={`text-white origin-left cursor-pointer hover:text-sky-300 font-medium text-3xl duration-300 ${!open && "scale-0"}`}
            >
              Adebisi Jaden
            </h1>
          </div>

          <div className='pt-6'>
            {
              datas.map((menu, index) => (
                <NavLink to={menu.path} key={index} className='text-white text-xl flex items-center gap-x-4 cursor-pointer p-5 hover:bg-sky-300 hover:text-black rounded-md font-semibold'>
                  <div className=''>{menu.icon}</div>
                  <div className={`${!open && "hidden"} origin-left duration-100 `}>{menu.title}</div>
                </NavLink>
              ))
            }
          </div>
      </div>
      <div className={`${
          open ? "w-[80%]": "w-[92%]"
          }`}>
          {children}
      </div>
      </div>
    </div>
  )
}

export default SideBar
