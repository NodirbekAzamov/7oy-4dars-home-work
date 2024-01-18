import React, { useEffect, useState } from 'react'
import AxiosClent from './plugins/AxiosClent'
import ModalProduct from './ModalProduct'
import DeleteModal from './DeleteModal'

export default function AdminPage() {
    const [products, setProducts] = useState([])
    const [modalProducts, setModalProducts] = useState(false)
    const [deletemodal, setDeleteModal] = useState(false)
    const [itemId, setItemId] = useState("")
    const [addEdit, setAddEdit] = useState({})

    useEffect(() => {
        AxiosClent.get("/products").then((res) => {
            setProducts(res?.data?.products)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const addProducts = (e) => {
        e.preventDefault();
        setModalProducts(true)
    }

    const remove = (id) => {
        setItemId(id)
        setDeleteModal(true)
    }

    const edit = (id) => {
        setItemId(id)
        setModalProducts(true)
        AxiosClent.get(`/products/${id}`).then((res) => {
            setAddEdit(res.data.product)
        }).catch((err) => {
            console.log(err);
        })
    }

    const toggle = () => {
        setAddEdit("")
        setModalProducts(false)
    }

    return (
        <div className='px-[150px]'>
            <ModalProduct open={modalProducts} toggle={toggle} itemId={itemId} addEdit={addEdit} />
            <DeleteModal open={deletemodal} toggle={() => setDeleteModal(false)} itemId={itemId} />
            <button onClick={addProducts} className='text-[18px] px-[15px] py-[5px] bg-[#3838ff] text-[white] rounded-[10px] my-[20px]'>add products</button>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>T/R</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Group</th>
                        <th>Price</th>
                        <th>arrival_price</th>
                        <th>selling_price</th>
                        <th>description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((item, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.brand}</td>
                                <td>{item.group}</td>
                                <td>{item.price}</td>
                                <td>{item.arrival_price}</td>
                                <td>{item.selling_price}</td>
                                <td>{item.description}</td>
                                <td><button onClick={() => edit(item._id)} className='text-[18px] px-[15px] py-[5px] bg-[#3838ff] text-[white] rounded-[10px] my-[20px]'>Edit</button></td>
                                <td><button onClick={() => remove(item._id)} className='text-[18px] px-[15px] py-[5px] bg-[#ba1414] text-[white] rounded-[10px] my-[20px]'>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
