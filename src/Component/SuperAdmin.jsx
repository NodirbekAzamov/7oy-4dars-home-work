import React, { useEffect, useState } from 'react'
import AxiosClent from './plugins/AxiosClent'
import ModalUser from './ModalUser'
import ModalDelete from './ModalDelete'

export default function SuperAdmin() {
    const [user, setUsers] = useState([])
    const [modalUser, setModalUser] = useState(false)
    const [userDelete, setUserDelete] = useState(false)
    const [userId, setUserId] = useState("")
    const [editUser, setEditUser] = useState("")

    useEffect(() => {
        AxiosClent.get("/users").then((res) => {
            setUsers(res?.data?.users)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const addedit = (id) => {
        setEditUser(id)
        setModalUser(true)
        AxiosClent.get(`/users/${id}`).then((res) => {
            setEditUser(res?.data?.user)
        }).catch((err) => {
            console.log(err);
        })
    }

    const remove = (id) => {
        setUserId(id)
        setUserDelete(true)
    }

    const addUser = (e) => {
        e.preventDefault();
        setModalUser(true)
    }

    const modalToggle =()=> {
        setModalUser(false)
        setUserId("")
    }

    return (
        <div className='px-[150px]'>
            <ModalUser open={modalUser} modalToggle={modalToggle} userId={userId} editUser={editUser} />
            <ModalDelete open={userDelete} toggle={()=>setUserDelete(false)} userId={userId} />
            <button onClick={addUser} className='text-[18px] px-[15px] py-[5px] bg-[#3838ff] text-[white] rounded-[10px] my-[20px]'>add user</button>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>T/R</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>is_diploma</th>
                        <th>address</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user?.map((item, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                                <td>{item.age}</td>
                                <td>{item.is_diploma ? "true" : "false"}</td>
                                <td>{item.address}</td>
                                <td><button onClick={() => addedit(item._id)} className='btn btn-info'>edit</button></td>
                                <td><button onClick={() => remove(item._id)} className='btn btn-danger'>delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
