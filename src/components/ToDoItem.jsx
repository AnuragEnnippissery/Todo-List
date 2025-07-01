import { useState } from "react";
import "./style.css"

function ToDoItem(props){
    console.log("item",props.data)
    //console.log("props",props)
    const { data, onDelete, onMark, onEdit } = props;
    //const[data,setData]=useState("")
    //setData(props)
    //console.log(data)
    function HandleMark(){
        console.log("marked")
    }
    return(
        <>
        <div className="list-item">
           {props.data.text }
           <button onClick={HandleMark}>mark</button>
           <button>edit</button>
           <button onClick={onDelete} >delete</button>
        </div>
        </>
    )
}
export default ToDoItem;