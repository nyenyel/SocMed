import React, { useState } from 'react'

export default function AddModal({onClose, onAdd, allData}) {
    const [temp, setTemp] = useState()
    const id = Math.max(...allData.map(item => item.id)) + 1
    const handleChange = (e) => {
    const {name, value} = e.target
        setTemp((prev) => ({
            ...prev,
            [name]: value,
            id: id
        }))
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 flex-1">New Post</h2>
            <p>This is for creating new post.</p>
            <div className='flex flex-col mt-2'>
                <label className='text-sm'>Pen Name</label>
                <input onChange={handleChange} className='py-2 px-2 border-b-2 mb-2 bg-slate-100' type='text' name='name' placeholder='Ex. John'/>
                <label className='text-sm'>Post Description</label>
                <textarea onChange={handleChange} rows={5} className='py-2 px-2 border-b-2 bg-slate-100' name='post' placeholder='Ex. John'/>
                <button onClick={()=>onAdd(temp)} className="mt-4 bg-green-500 text-white px-4 py-2 rounded cursor-pointer">Post</button>
                <button onClick={()=>onClose()} className="mt-2 bg-red-500 text-white px-4 py-2 rounded cursor-pointer">Close</button>
            </div>
            </div>
        </div>
    )
}
