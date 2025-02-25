import React, { useState } from 'react'

export default function SelectModal({onUpdate, onClose ,data, onDelete}) {
  const [temp, setTemp] = useState(data)

  const handleChange = (e) => {
    const {name, value} = e.target
    setTemp((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  console.log(data)
  return (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <div className='flex'>
        <h2 className="text-xl font-bold mb-4 flex-1">Post Selected</h2>
        <div onClick={()=>onDelete(data.id)} className='mt-2 text-red-400 underline cursor-pointer hover:scale-105'>delete</div>
      </div>
      <p>This is your selected post.</p>
      <div className='flex flex-col mt-2'>
        <label className='text-sm'>Posted By</label>
        <input onChange={handleChange} className='py-2 px-2 border-b-2 mb-2 bg-slate-100' type='text' name='name' value={temp.name} placeholder='Ex. John'/>
        <label className='text-sm'>Post Description</label>
        <textarea onChange={handleChange} rows={5} className='py-2 px-2 border-b-2 bg-slate-100' name='post' value={temp.post} placeholder='Ex. John'/>
        <button onClick={()=>onUpdate(temp)} className="mt-4 bg-green-500 text-white px-4 py-2 rounded cursor-pointer">Update</button>
        <button onClick={()=>onClose()} className="mt-2 bg-red-500 text-white px-4 py-2 rounded cursor-pointer">Close</button>
      </div>
    </div>
  </div>
  )
}
