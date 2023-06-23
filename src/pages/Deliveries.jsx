import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Modal } from '../components/Modal';
import DeliveriesModal from "../ModalPage/Deliveries"

const Deliveries = () => {
  const [deliver, setDeliver] = useState([]);
  const [column, setColumn] = useState([]);
  const [isModal, setIsModal] = useState(false)
  const [deliveryInfo, setDeliveryInfo] = useState(false)

  useEffect(() =>{
    axios.get('/delivery')
    .then(res =>{
      setColumn(Object.keys(res.data[0]))
      console.log(res.data[0]);
      setDeliver(res.data)
    })
  }, [])

 

  return (
    <>
    <DeliveriesModal isOpen={isModal} setIsOpen={setIsModal} deliveryInfo={deliveryInfo}/>
    <div className='w-auto'>

      <div className='flex'>
        {/* <SideBar/> */}

        {/* Body */}

        <div className='p-7 flex-1 h-screen overflow-scroll'>
          <h1 className=' font-bold text-3xl p-5'>Deliveries</h1>

           {/* Summary Box */}
      <div>

      </div>

      {/* Search row */}

      <div>

      </div>

      {/* Delivery table */}

      <div className='container w-full bg-white px-6 mt-20 rounded-3xl shadow-2xl border-gray-200 flex-1 '>
              <h1 className=' font-bold text-3xl p-5'>
                Recent Deliveries
              </h1>
            
              <div className='mt-5'>
                <table className='w-full cursor-pointer'>
                  <thead>
                    <tr className='font-bold'>
                      <td className='px-7 py-3 text-lg'>Date</td>
                      <td className='px-7 py-3 text-lg'>Customer Name</td>
                      <td className='px-7 py-3 text-lg'>Dispatcher</td>
                      <td className='px-7 py-3 text-lg'>Package</td>
                      <td className='px-7 py-3 text-lg'>Status</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      deliver.map((delivery, index) =>(
                        <tr key={index} onClick={() => {setIsModal(true); setDeliveryInfo(delivery)}} className='py-6 divide-y font-medium divide-slate-200  hover:bg-slate-200'>
                          <td className='py-2 px-8'>{delivery.date}</td>
                          <td className='py-2 px-8 text-delivery'>{delivery.name}</td>
                          <td className='py-2 px-8 text-delivery'>{delivery.dispatcher}</td>
                          <td className='py-2 px-8'>{delivery.package}</td>
                          <td className='py-2 px-8 capitalize'>{delivery.status}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>

            </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Deliveries
