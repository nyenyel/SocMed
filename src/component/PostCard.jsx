import React from 'react'

export default function PostCard({data, onSelect}) {
    const id = data.id
    return (
        <div onClick={()=>onSelect(data)} className=' bg-white p-5 rounded-md mb-2 drop-shadow border-l-5 max-w-98 border-slate-800 select-none hover:scale-105 cursor-pointer'>
            <div className='font-regulartext-sm italic'> "{data.post}"</div>
            <div className='font-bold text-xl opacity-80 text-right '>-{data.name}</div>
        </div>
    )
}
