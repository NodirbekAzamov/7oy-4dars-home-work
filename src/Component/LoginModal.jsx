import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default function LoginModal({ open, toggle, roles }) {
    const navigate = useNavigate()
    const handleRole = (e) => {
        e.preventDefault();
        let role = e.target[0].value
        if (role === 'admin') {
            navigate("/admin")
        } else if (role === "superadmin") {
            navigate("/superadmin")
        }
    }

    return (
        <div>
            <Modal isOpen={open} toggle={toggle}>
                <ModalHeader>
                    <h1 className='text-[25px]'>Select your role</h1>
                </ModalHeader>
                <ModalBody>


                    <form onSubmit={handleRole} id='role'>
                        <select className='form-control'>
                            <option value="" hidden >Select your role</option>
                            {
                                roles.map((item, index) => {
                                    return <option value={item} key={index}>{item}</option>
                                })
                            }
                        </select>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button type='submit' form='role' className='bg-[blue] text-[white]  rounded-[8px] w-[90px] h-[40px]'>save</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
