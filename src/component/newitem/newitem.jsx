import { useEffect, useState } from "react"
import "./newitem.css"
const PRIORITY=['low','medium','high']
const NewItem=(props)=>{
    const {addItem,editState,editItem}=props
    const [title,setTitle]=useState('');
    const [priority,setPriority]=useState('')
    const isEdit=Boolean(editState._id)
    const handleInput=(e)=>{
        setTitle(e.target.value)
    }
    useEffect(()=>{
        if(editState._id)
        {
            setTitle(editState.title)
            setPriority(editState.priority)
        }
    },[editState])
    const handleSave=()=>{
        if(!title){
            return
        }
        const obj={
            title,
            priority:priority
        }
        if(isEdit)
        {
            obj.id=editState._id
            editItem(obj)
        }
        else
        {addItem(obj)}
        setPriority('')
        setTitle('')
    }
    const handleClear=()=>{
        setTitle('')
        setPriority('')
    }
    return(
        <div className="new-item-card">
            <div className="checkbox" />
            <div className="form-container">
                <input placeholder="Type here ..."  onChange={handleInput}value={title} />
                
                {title&&(<><div className="badge-container">{PRIORITY.map((p)=>
                    <div key={p} className={`p-badge ${p} ${p===priority && 'selected'}`} onClick={()=>setPriority(p)}>{p}</div>
                )}</div>
                <div className="btn-container"><button className="primary" onClick={handleSave}>save</button>
                <button className="red" onClick={handleClear}>Clear</button>
                </div></>)}
            </div>
        </div> 
    )
}
export default NewItem