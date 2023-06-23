import { RxDashboard } from 'react-icons/rx'
import { TbTruckDelivery } from 'react-icons/tb'
import { BiMoney } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { RiSettings4Fill } from 'react-icons/ri'
import { MdNotifications } from 'react-icons/md'
import { LuLogOut } from 'react-icons/lu'


export const datas = [
    {
        id: 1,
        path:  "/",
        icon: <RxDashboard/>,
        title: "Dashboard"
    },
    {
        id: 2,
        path:  "/deliveries",
        icon: <TbTruckDelivery/>,
        title: "Deliveries"
    },
    {
        id: 3,
        path:  "/transactions",
        icon: <BiMoney/>,
        title: "Transactions"
    },
    {
        id: 4,
        path:  "/users",
        icon: <FiUsers/>,
        title: "Users"
    },
    {
        id: 5,
        path:  "settings",
        icon: <RiSettings4Fill/>,
        title: "Settings"
    },
    {
        id: 6,
        path:  "/notification",
        icon: <MdNotifications/>,
        title: "Notification"
    },
    {
        id: 7,
        path:  "logout",
        icon: <LuLogOut/>,
        title: "Logout"
    }
]