import './App.css'
import NewItem from './component/newitem/newitem'
import Todolist from './component/todolist/Todolist'
import { useState } from 'react'
import {nanoid} from 'nanoid'
const DEFAULT_LIST=[
  {
      title:'study js',
      priority:'high',
      id:nanoid()
  },
  {
      title:'study css',
      priority:'low',
      id:nanoid()

  },
  {
      title:'study html',
      priority:'medium',
      id:nanoid()

  }
]
console.log(DEFAULT_LIST)
function App() {
  
  const [list,setList]=useState(DEFAULT_LIST)
  const [editState,setEditState]=useState({})
  console.log(editState)

    const deleteItem=(id)=>{
        const filterList=list.filter((item)=>item.id!==id)
        setList([...filterList])
    }
    const addItem=(item)=>{
      item.id=nanoid()
      setList((prev)=>[item,...prev])
    }
    const triggerEdit=(item)=>{
      setEditState(item)
    }
    
  return(
    <div className='app'>
    <h1 className="title">To-Do List</h1>
    <NewItem addItem={addItem} editState={editState} />
    <Todolist list={list} deleteItem={deleteItem} triggerEdit={triggerEdit}/>
    </div>
  )
}

export default App
