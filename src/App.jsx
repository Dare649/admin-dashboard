import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard.jsx'
import Deliveries from './pages/Deliveries.jsx'
import Transactions from './pages/Transactions.jsx'
import Users from './pages/Users.jsx'
import Settings from './pages/Settings.jsx'
import Logout from './pages/Logout.jsx'
import SideBar from './SideBar.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/deliveries' element={<Deliveries/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </SideBar>
    </BrowserRouter>
  )
}

export default App


