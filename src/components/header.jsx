import { useState } from 'react';
import './style.css'
import TodoList from './ToDoList';
function Header(){
    const[text,setText]=useState("");
    const[finaltext,setFinalText]=useState([]);
    const [idCounter, setIdCounter] = useState(1); // to give unique ids

    function handleClick(){
        //console.log("input text",text)
        const newItem = {
            id: idCounter,
            text: text,
            marked: false,
            deleted:false,
            edited:false
            };
          setFinalText([...finaltext,newItem])
          setIdCounter(idCounter + 1);
          //setText("")
          console.log("input data",finaltext)
    }
    function handleDelete(id) {
    setFinalText(finaltext.filter((todo) => todo.id !== id));
    }

    function handleMark(id) {
        setFinalText(
        finaltext.map((todo) =>
            todo.id === id ? { ...todo, marked: !todo.marked } : todo
        )
        );
    }

        function handleEdit(id, newText) {
        setFinalText(
        finaltext.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
        )
        );
    }

    

    return(
        <>
            <div className='todo-header'>
                <h2>To-do-List</h2>
                <input type="text" placeholder="enter the list item " value={text} onChange={(e)=>setText(e.target.value)}></input>
                <button onClick={handleClick}>Add</button>
                
            </div>
            <TodoList list={finaltext}
             onDelete={handleDelete}
            onMark={handleMark}
            onEdit={handleEdit}
            />
            {/* <TodoList item={finaltext} onEdit={handleDelete} /> */}
        </>
        
    )
}
export default Header;
