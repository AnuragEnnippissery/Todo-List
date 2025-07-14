import ToDoItem from "./ToDoItem";
import { useEffect, useState } from "react";
function TodoList(props){
    //console.log("todo list ",props.item)
    //const[listData,setListData]=useState(props.list);
    // useEffect(()=>{
    // //   setListData([
    // // {
    // //     "id": 1,
    // //     "text": "map",
    // //     "marked": false,
    // //     "deleted": false,
    // //     "edited": false
    // // }
    // setListData(props.item)
    

    // console.log("ankit",props.item)
    // },[props])
    //setListData(props.item)
    //console.log("listdata",props)
    // const handleDelete = (id) => {
    // const updatedList = listData.filter((todo) => todo.id !== id);
    // setFinalText(updatedList);
    // };

    
    return(
        <>
        {/* <ToDoItem data={props.item}/> */}
        <div>
            <ul>
                {props?.list?.map((elem)=>{
                return (
                <>
                { <li>
                    <ToDoItem data={elem} key={elem.id}
                    onDelete={() => props.onDelete(elem.id)}
                    onMark={() => props.onMark(elem.id)}
                    onEdit={(newText) => props.onEdit(elem.id, newText)}
                    /></li>
                   }
                </>
                  )
            })}
            </ul>
            
        </div>
    
        </>
    )
}
export default TodoList;
