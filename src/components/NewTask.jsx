import { useRef, useState } from "react"
import Modal from "./Modal";

export default function NewTask({onAdd}){
     const modal = useRef()

    const [enteredTask,setEnteredTask]= useState('');

   function handleAddTask(e){
        setEnteredTask(e.target.value);
    };

     function handleOnClick(){
        if(enteredTask.trim() === ''){
          return modal.current.open();
        }
        onAdd(enteredTask);
        setEnteredTask('');
    };

    return(<>
            <Modal ref={modal} buttonCaption={"Close"}>
            <h2 className='text-xl font-bold txt-stone-700 my-4'>Invalid Input</h2>
            <p className='text-stone-600 mb-4 '>Oops ... looks like you forgot to enter a value .</p>
            <p className='text-stone-600 mb-4 '>Please make sure you provide a valid value for every input field. </p>
        </Modal>
        <div>
            <input 
            type="text"
            value={enteredTask} 
            onKeyDown={(e) => {
                 if (e.key === "Enter" ){
                e.preventDefault(); handleOnClick();
            }}} 
            onChange={handleAddTask} 
            className="w-64 px-2 py-1 rounded-sm bg-stone-200 "
            />
            <button onClick={handleOnClick} className="text-stone-600 hover:text-stone-950 px-4">Add Task</button>
        </div>
        </>
    )
}