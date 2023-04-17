import './App.css'
import NewItem from './component/newitem/newitem'
import Todolist from './component/todolist/Todolist'
import { useEffect, useState } from 'react'
import {nanoid} from 'nanoid'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
function App() {
  const [list,setList]=useState([])
  const [editState,setEditState]=useState({})
  useEffect(()=>{
    fetch("http://localhost:3000/")
    .then((res)=>{
      res.json().then((json)=>{
        setList(json)
      }).catch(()=>{console.log("error")})
    })
  },[editState])
  console.log(editState)

    const deleteItem=(id)=>{
      fetch("http://localhost:3000/"+id,{
        method:'DELETE',
      }).then(()=>{
        setEditState({})
        toast.success("deleted")})
        
    }
    const addItem=(item)=>{
      // item.id=nanoid()
      fetch('http://localhost:3000/',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(item)

      }).then((res)=>{
        res.json().then(setList((prev)=>[item,...prev]) )
      toast.success("succes")
    })}
    const triggerEdit=(item)=>{
      setEditState(item)
    }
    const editItem=(updatedItem)=>{
      fetch("http://localhost:3000/"+updatedItem.id,{method:'PUT',headers:{'Accept':'application/json,text/plain,*/*','Content-type':'application/json'},body:JSON.stringify(updatedItem)})
      .then(()=>setEditState({})).catch((err)=>
        console.log(err)
      )
      }
    
    
  return(
    <div className='app'>
    <h1 className="title">To-Do List</h1>
    <NewItem addItem={addItem} editState={editState} editItem={editItem} />
    <Todolist list={list} deleteItem={deleteItem} triggerEdit={triggerEdit}/>
    </div>
  )
}

export default App
