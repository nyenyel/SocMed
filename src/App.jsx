import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppContext } from './context/AppContext'
import { AddData, GetData, RemoveData, UpdateData } from './controller/DataController'
import AddModal from './component/AddModal'
import PostCard from './component/PostCard'
import SelectModal from './component/SelectModal'

function App() {
  const {data, setData} = useAppContext();
  const [state, setState] = useState({
    form: {id: '', name: '', post: ''},
    addModal: false,
    selectModal: false,
    selectedData: {}
  })

  const handleSelect = (data) => {
    setState((prev) =>({
      ...prev,
      selectedData: data
    }))
    handleSelectModal()
  } 
  const handleSelectModal = () => {
    setState((prev) =>({
      ...prev,
      selectModal: !state.selectModal
    }))
  }

  const handleUpdate = (item) => {
    setData(UpdateData(data, item.id, item))
    handleSelectModal()
  } 

  const handleDelete = (item) => {
    setData(RemoveData(data, item))
    handleSelectModal()
  } 

  const handleAdd = (item) => {
    setData(AddData(data, item))
    handleAddModal()
  } 

  const handleAddModal = () => {
    setState((prev) =>({
      ...prev,
      addModal: !state.addModal
    }))
  }
  return (
    <>
      {state.selectModal && 
        <SelectModal data={state.selectedData}
                  onUpdate={handleUpdate} 
                  onClose={handleSelectModal} 
                  onDelete={handleDelete}
        />
      }

      {state.addModal && 
        <AddModal allData={data}
                  onAdd={handleAdd} 
                  onClose={handleSelectModal} 
        />
      }
      <div className='flex'>
        <div className='flex-1'/>
        <div className='mt-10'>
          <div onClick={handleAddModal} className='bg-white rounded-md p-2 font-bold hover:scale-105 hover:bg-slate-200 cursor-pointer mb-10'>+ New Post</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
            {data.map((item, index) => (
              <PostCard key={index} data={item} onSelect={handleSelect} />
            ))}
          </div>
        </div>
        <div className='flex-1'/>
      </div>
    </>
  )
}

export default App
