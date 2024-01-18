import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import AxiosClent from './plugins/AxiosClent';

export default function ModalProduct({ open, toggle, itemId, addEdit }) {

    const addProd = (e) => {
        e.preventDefault();
        setTimeout(() => {
            window.location.reload();
        }, 1000)

        let payload = {
            name: e.target[0].value,
            brand: e.target[1].value,
            group: e.target[2].value,
            price: +e.target[3].value,
            arrival_price: +e.target[4].value,
            selling_price: +e.target[5].value,
            description: e.target[6].value,
        }
        if (itemId !== "") {
            AxiosClent.patch(`/products/update/${itemId}`, { ...payload })
        } else {
            AxiosClent.post("/products/add", { ...payload })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    return (
        <div>
            <Modal isOpen={open} toggle={toggle}>
                <ModalHeader>
                    <h1 className='text-[25px] text-center'>Add Product</h1>
                </ModalHeader>
                <ModalBody>
                    <form className='form-control' onSubmit={addProd} id="user">
                        <input type="text" placeholder='Name' defaultValue={addEdit.name} className='form-control my-1' />
                        <select defaultValue={addEdit.brand} className='form-control my-1'>
                            <option value="brand" hidden>Brand selection</option>
                            <option value="apple"  defaultValue={addEdit.brand} >Apple</option>
                            <option value="asus"  defaultValue={addEdit.brand} >Asus</option>
                            <option value="ares"  defaultValue={addEdit.brand} >Ares</option>
                        </select>
                        <select  defaultValue={addEdit.group} className='form-control my-1'>
                            <option value="group" hidden>Group selection</option>
                            <option value="mobile" defaultValue={addEdit.brand}  >Mobile</option>
                            <option value="tv"  defaultValue={addEdit.brand}  >TV</option>
                            <option value="ares"  defaultValue={addEdit.brand} >Ares</option>
                        </select>
                        <input type="number" placeholder='price' defaultValue={addEdit.price} className='form-control my-1' />
                        <input type="number" placeholder='arrival_price'  defaultValue={addEdit.arrival_price} className='form-control my-1' />
                        <input type="number" placeholder='selling_price'  defaultValue={addEdit.selling_price} className='form-control my-1' />
                        <textarea cols="30" rows="10"  defaultValue={addEdit.description} className='form-control my-1 resize-none h-[80px]'></textarea>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button form='user' type='submit' className='text-[18px] px-[15px] py-[5px] bg-[blue] text-[white] rounded-[10px] mx-[15px] '>add user</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
