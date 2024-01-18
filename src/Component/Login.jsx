import React, { useState } from 'react'
import AxiosClent from './plugins/AxiosClent';
import LoginModal from './LoginModal';

export default function Login() {
  const [roles, setRole] = useState([])
  const [modal, setModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    let username = e.target[0].value
    let password = e.target[1].value
    AxiosClent.post("/admins/login", {
      username: username,
      password: password
    }).then((res) => {
      localStorage.setItem("token", res?.data?.token);
      setRole(res?.data?.roles)
      if (res.status === 202) {
        setModal(true);
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className='login'>
      <LoginModal open={modal} toggle={() => setModal(false)} roles={roles} />
      <p className='text-[25px] font-[600]'>Login</p>
      <form className=' flex flex-column gap-[20px]' onSubmit={handleSubmit}>
        <input type="text" placeholder='text' className='border w-[300px] p-[8px] rounded-[10px]' />
        <input type="password" placeholder='password' className='w-[300px] p-[8px] rounded-[10px] border' />
        <button type='submit' className='bg-[blue] text-[white]  rounded-[8px] w-[100px] h-[40px]'>Login</button>
      </form>
    </div>
  )
}
