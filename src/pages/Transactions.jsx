import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Transactions = () => {
  const [transaction, setTransaction] = useState([]);
  const [column, setColumn] = useState([]);

  useEffect(() =>{
    axios.get('/transaction')
    .then(res =>{
      setColumn(Object.keys(res.data[0]))
      console.log(res.data[0]);
      setTransaction(res.data)
    })
  }, [])

  return (
    <div className='w-auto'>

      <div className='flex'>
        {/* <SideBar/> */}

        {/* Body */}

        <div className='p-7 flex-1 h-screen '>
          <h1 className=' font-bold text-3xl p-5'>Transactions</h1>

           {/* Summary Box */}
      <div>

      </div>

      {/* Search row */}

      <div>

      </div>

      {/* Transaction table */}

      <div className='container w-full bg-white px-6 mt-20 rounded-3xl shadow-2xl border-gray-200 flex-1 '>
              <h1 className=' font-bold text-3xl p-5'>
                Recent Transactions
              </h1>
            
              <div className='mt-5'>
                <table className='w-full sm:w-4/5 cursor-pointer'>
                  <thead>
                    <tr className='font-bold'>
                      <td className='px-7 py-3 text-lg'>Date</td>
                      <td className='px-7 py-3 text-lg'>Customer Name</td>
                      <td className='px-7 py-3 text-lg'>Amount</td>
                      <td className='px-7 py-3 text-lg'>Status</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      transaction.map((transactions, index) =>(
                        <tr key={index} className='py-6 divide-y font-medium divide-slate-200  hover:bg-slate-200'>
                          <td className='py-2 px-8'>{transactions.date}</td>
                          <td className='py-2 px-8 text-delivery'>{transactions.customer}</td>
                          <td className='py-2 px-8 text-delivery'>{transactions.amount}</td>
                          <td className='py-2 px-8 capitalize'>{transactions.status}</td>
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
  )
}

export default Transactions
