import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import AxiosClent from './plugins/AxiosClent';

export default function ModalDelete({ open, toggle, userId}) {
    const remove3 = (e) => {
        e.preventDefault();
        AxiosClent.delete(`/users/${userId}`)
        setTimeout(()=> {
            window.location.reload();
        }, 1500)
    }

    return (
        <div>
            <Modal isOpen={open} toggle={toggle}>
                <ModalHeader>
                    <h6 className='text-[25px]'>Are you sure you want to delete?</h6>
                </ModalHeader>
                <ModalBody>
                    <button onClick={remove3} className='text-[18px] px-[15px] py-[5px] bg-[#ba1414] text-[white] rounded-[10px]  my-[20px]'>Yes</button>
                    <button onClick={toggle} className='text-[18px] px-[15px] py-[5px] bg-[#4f58d2] text-[white] rounded-[10px] mx-[15px] my-[20px]'>No</button>
                </ModalBody>
            </Modal>
        </div>
    )
}
