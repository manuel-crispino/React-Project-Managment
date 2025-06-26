import { useState } from "react"

export default function NewTask({onAdd,onDelete}){

    const [enteredTask,setEnteredTask]= useState('');

   function handleAddTask(e){
        setEnteredTask(e.target.value);
    };

     function handleOnClick(){
        onAdd(enteredTask);
        setEnteredTask('');
    };

    return(
        <div>
            <input type="text" value={enteredTask} onChange={handleAddTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200 "/>
            <button onClick={handleOnClick} className="text-stone-700 hover:text-stone-950 px-4">Add Task</button>
        </div>
    )
}