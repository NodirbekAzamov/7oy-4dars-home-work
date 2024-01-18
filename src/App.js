import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Works from './Component/Works'
import Blog from './Component/Blog'
import Login from './Component/Login'
import AdminPage from './Component/AdminPage'
import SuperAdmin from './Component/SuperAdmin'
import "./Component/style.scss"

export default function App() {

  const [list, setList] = useState([
    { id: 1, title: "Home", path: "/", },
    { id: 2, title: "Works", path: "/works", },
    { id: 3, title: "Blog", path: "/blog", },
    { id: 4, title: "Login", path: "/login", },
  ])

  const [active, setActive] = useState(1)

  const active_btn = (id) => {
    setActive(id)
    localStorage.setItem("active", id);
  }

  useEffect(() => {
    let value = +localStorage.getItem("active")
    if (value) {
      setActive(value)
    } else {
      setActive(1)
    }
  }, [])

  return (
    <div>
      <header className=' flex justify-end py-[27px] px-[60px]'>
        <div className='menu_box' >
          <ul >
            {
              list.map((item, index) => {
                return <li>
                  <Link to={item.path} onClick={() => active_btn(item.id)} className={active === item.id ? "link_btn" : ""}>{item.title}</Link>
                </li>
              })
            }
          </ul>
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



