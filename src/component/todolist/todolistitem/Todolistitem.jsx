import { useState } from "react";
import "./Todolistitem.css"
const Todolistitem=(props)=>{
    const {item,onEdit,onDelete,index}=props;
    const {title,priority ,_id}=item
    const [isChecked,setChecked]=useState(false)
    // const setTrue=(setChecked(true))
    return(<>
        <div className={`item-card ${priority}`}>
            {isChecked?(<span class="material-symbols-outlined pointer" onClick={()=>setChecked(false)}>
                    select_check_box
            </span>):(            <span className="checkbox pointer" onClick={()=>setChecked(true)}/>)}
            <div className={`card-title ${isChecked ? "strike":""}`}>{title}</div>
            <div className={"badge"}> {priority}
        </div>
        <span className="material-symbols-outlined edit" onClick={()=>onEdit(item)}>edit</span>

        <span className="material-symbols-outlined del" onClick={()=>onDelete(_id)}>delete</span>
        </div>
        </>
    )
}
export default Todolistitem 