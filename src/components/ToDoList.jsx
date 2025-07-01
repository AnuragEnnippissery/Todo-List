import ToDoItem from "./ToDoItem";
import { useEffect, useState } from "react";
function TodoList({listData}){
    //console.log("todo list ",props.item)
    //const[listData,setListData]=useState([pro]);
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

    const handleMark = (id) => {
    const updatedList = listData.map((todo) =>
      todo.id === id ? { ...todo, marked: !todo.marked } : todo
    );
    setListData(updatedList);
    };

    const handleEdit = (id, newText) => {
    const updatedList = listData.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setListData(updatedList);
  };
    return(
        <>
        {/* <ToDoItem data={props.item}/> */}
        <div>
            <ul>
                {listData?.map((elem)=>{
                return (
                <>
                { <li>
                    <ToDoItem data={elem} 
                    onDelete={() => handleDelete(elem.id)}
                    onMark={() => handleMark(elem.id)}
                    onEdit={(newText) => handleEdit(elem.id, newText)}
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