import Todolistitem from "./todolistitem/todolistitem"
import { useState } from "react"


const Todolist=(props)=>{
    const {list,deleteItem,triggerEdit}=props
    
    return(
        <>{list.length<=0?(<center>No items</center>):(<div>{list.map((item,index)=><Todolistitem key={index} item={item} index={index} onDelete={deleteItem} onEdit={triggerEdit} />)}</div>)}</>
    )
}
export default Todolist 