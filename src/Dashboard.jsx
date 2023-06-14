import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircle } from "react-icons/bs";
import { datas } from './data'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [columns, setColumns] = useState([]);
  const [delivery, setdelivery] = useState([]);

  useEffect(() =>{
    axios.get('/delivery')
    .then(res =>{
      setColumns(Object.keys(res.data[0]))
      setdelivery(res.data)
    })
  }, [])


  return (
    <div className='flex'>

      {/* Sidebar */}

      <div className={`${
        open ? "w-72": "w-24"
        } duration-200 h-screen relative bg-sky-300 p-1 pt-8`}>
        <BsArrowLeftCircle className={`w-8 h-8 absolute cursor-pointer -right-4 bg-white rounded-full border-2 top-1 ${open && 'rotate-180'}`} onClick={() => setOpen(!open)}/>

          <div className='flex gap-x-4 pl-2 item center'>
            <img src="./src/images/admin-lady.jpg" alt="" className={`cursor-pointer duration-500 w-20 h-20 rounded-full`} />

            <h1
              className={`origin-left font-medium text-3xl duration-300 ${!open && "scale-0"}`}
            >
              Adebisi Jaden
            </h1>
          </div>

          <div className='pt-6'>
            {
              datas.map((menu, index) => (
                <NavLink to={menu.path} key={index} className='text-xl flex items-center gap-x-4 cursor-pointer p-5 hover:bg-sky-600 rounded-md font-semibold'>
                  <div>{menu.icon}</div>
                  <div className={`${!open && "hidden"} origin-left duration-100 `}>{menu.title}</div>
                </NavLink>
              ))
            }
          </div>
      </div>

      {/* Body section */}

      <div className='p-7 flex-1 h-screen'>
        <h1 className='font-bold text-3xl'>Dashboard</h1>

         {/* Table section */}

        <table className='container '>
          <thead className=''>
            <tr className=''>
              <th className='pr-24 pt-24'>Date</th>
              <th className='pr-24 pt-24'>Delivery ID</th>
              <th className='pr-24 pt-24'>Customer Name</th>
              <th className='pr-24 pt-24'>Dispatcher</th>
              <th className='pr-24 pt-24'>Package</th>
              <th className='pr-24 pt-24'>Fee</th>
              <th className='pr-24 pt-24'>Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {
              delivery.map((deliveries, index) =>(
                <tr key={index} >
                  <td>{deliveries.date}</td>
                  <td>{deliveries.id}</td>
                  <td>{deliveries.name}</td>
                  <td>{deliveries.dispatcher}</td>
                  <td>{deliveries.package}</td>
                  <td>{deliveries.fee}</td>
                  <td className=''>
                    <button className='bg-sky-500 w-20 h-10 rounded-lg'>
                      Action
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>

  )
}

export default Dashboard
