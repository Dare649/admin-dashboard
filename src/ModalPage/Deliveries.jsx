import React, { useEffect, useState } from 'react'
import { Modal } from '../components/Modal';
import axios from "axios"


const Deliveries = ({isOpen, setIsOpen, deliveryInfo, children}) => {
    const [isDetails, setIsDetails] = useState([]);
    const [isColumn, setColumn] = useState([]);

    useEffect(() =>{
        axios.get('/delivery')
        .then(res =>{
            setColumn(Object.keys(res.data[0]))
            console.log(res.data[0]);
            setIsDetails(res.data)
        })
    }, [])

  return (
    <>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
        <div className='w-full my-5'>
            <div className='flex-row'>
                <h1 className='text-2xl font-bold'>{deliveryInfo.id}</h1>

                <div className='columns-2 float-right'>
                    <button 
                    type="button"
                      className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-sm font-medium text-black hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2">
                        Edit
                    </button>

                    <button 
                    type="button"
                      className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-black hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">
                        Delete
                    </button>
                </div>
            </div>

            <div className='pt-16'>
                <h2 className='pb-4 font-medium text-xl'>Customer Name: {deliveryInfo.name}</h2>
                <h2 className='pb-4 font-medium text-xl'>Pick-up Location: {deliveryInfo.pickUp}</h2>
                <h2 className='pb-4 font-medium text-xl'>Drop-off Location: {deliveryInfo.dropOff}</h2>
                <h2 className='pb-4 font-medium text-xl'>Package: {deliveryInfo.package}</h2>
                <h2 className='pb-4 font-medium text-xl'>Weight: {deliveryInfo.weight}</h2>
                <h2 className='pb-4 font-medium text-xl'>Dispatcher: {deliveryInfo.dispatcher}</h2>
                <h2 className='pb-4 font-medium text-xl'>Status: {deliveryInfo.status}</h2>
            </div>
        </div>
    </Modal>
    </>
  )
}

export default Deliveries
