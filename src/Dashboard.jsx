import React, { useEffect, useState } from "react";
import { deliveries } from "./chartData";
import BarChart from "./components/BarChart";
import axios from "axios";

const Dashboard = () => {
  const [columns, setColumns] = useState([]);
  const [columns1, setColumns1] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [delChart, setDelChart] = useState({
    labels: deliveries.map((data) => data.month),
    datasets: [
      {
        label: "Total Deliveries",
        data: deliveries.map((data) => data.total),
      },
    ],
  });

  useEffect(() => {
    axios.get("/delivery").then((res) => {
      setColumns(Object.keys(res.data[0]));
      console.log(res.data[0]);
      setDelivery(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/transaction").then((res) => {
      setColumns1(Object.keys(res.data[0]));
      console.log(res.data[0]);
      setTransaction(res.data);
    });
  }, []);

  return (
    <div className="w-auto">
      <div className="flex">
        {/* SideBar */}

        {/* <SideBar/> */}
        {/* Body section */}

        <div className="p-7 flex-1 h-screen overflow-scroll">
          <h1 className="font-bold text-3xl">Dashboard</h1>

          {/* Chart section */}

          <div className="shadow-2xl rounded-3xl mt-12 cursor-pointer hover:bg-slate-50">
            <h1 className=" font-bold text-3xl p-5">Charts</h1>
            <div className="columns-2 mt-10 flex p-5 gap-x-4">
              <div className="w-full h-40 container">
                <BarChart chartData={delChart} />
              </div>
              <div className="w-full h-40 container">
                <BarChart chartData={delChart} />
              </div>
            </div>
          </div>

          {/* Recent deliveries */}

          <div className="container w-full bg-white px-6 mt-20 rounded-3xl shadow-2xl border-gray-200 flex-1">
            <h1 className=" font-bold text-3xl p-5">Recent Deliveries</h1>

            <div className="mt-5">
              <table className="w-full cursor-pointer">
                <thead>
                  <tr className="font-bold">
                    {/* <td className='px-6 py-3'>Delivery ID</td> */}
                    <td className="px-4 py-3 text-lg">Date</td>
                    <td className="px-4 py-3 text-lg">Customer Name</td>
                    <td className="px-4 py-3 text-lg">Dispatcher</td>
                    <td className="px-4 py-3 text-lg">Package</td>
                    <td className="px-4 py-3 text-lg">Amount</td>
                  </tr>
                </thead>
                <tbody>
                  {delivery.map((delivery, index) => (
                    <tr
                      key={index}
                      className="py-6 divide-y font-medium divide-slate-200  hover:bg-slate-200"
                    >
                      {/* <td className='py-2 px-5'>{delivery.id}</td> */}
                      <td className="py-2 px-5">{delivery.date}</td>
                      <td className="py-2 px-5 text-delivery">
                        {delivery.name}
                      </td>
                      <td className="py-2 px-5 text-delivery">
                        {delivery.dispatcher}
                      </td>
                      <td className="py-2 px-5">{delivery.package}</td>
                      <td className="py-2 px-5">{delivery.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Recent Transactions */}

          <div className="container  bg-white px-6 mt-20 rounded-3xl shadow-2xl border-gray-200 flex-1">
            <h1 className=" font-bold text-3xl p-5">Recent Transactions</h1>

            <div className="mt-5">
              <table className="w-full cursor-pointer">
                <thead>
                  <tr className="font-bold">
                    {/* <td className='px-6 py-3'>Delivery ID</td> */}
                    <td className="px-4 py-3 text-lg">Date</td>
                    <td className="px-4 py-3 text-lg">Customer Name</td>
                    <td className="px-4 py-3 text-lg">Amount</td>
                    <td className="px-4 py-3 text-lg">Status</td>
                  </tr>
                </thead>
                <tbody>
                  {transaction.map((transaction, i) => (
                    <tr
                      key={i}
                      className="py-6 divide-y  font-medium divide-slate-200 hover:bg-slate-200"
                    >
                      {/* <td className='py-2 px-5'>{delivery.id}</td> */}
                      <td className="py-2 px-5">{transaction.date}</td>
                      <td className="py-2 px-5 text-delivery">
                        {transaction.customer}
                      </td>
                      <td className="py-2 px-5 text-delivery">
                        {transaction.amount}
                      </td>
                      <td className="py-2 px-5 capitalize">
                        {transaction.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
