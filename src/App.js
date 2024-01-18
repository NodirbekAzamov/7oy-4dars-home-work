import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Works from './Component/Works'
import Blog from './Component/Blog'
import Login from './Component/Login'
import AdminPage from './Component/AdminPage'
import SuperAdmin from './Component/SuperAdmin'

export default function App() {
  return (
    <div>
      <header className=' flex justify-end py-[27px] px-[60px]'>
        <div className='flex gap-[75px] text-[20px] font-[500] font-[Heebo]'>
          <Link to="/">Home</Link>
          <Link to="/works">Works</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/login">Login</Link>
        </div>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='works' element={<Works />} />
        <Route path='blog' element={<Blog />} />
        <Route path='login' element={<Login />} />
        <Route path='admin' element={<AdminPage />} />
        <Route path='superadmin' element={<SuperAdmin />} />

      </Routes>
    </div>
  )
}



