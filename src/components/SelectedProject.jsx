import Tasks from "./Tasks";

export default function SelectedProject({ tasks,project,onAddTask,onDeleteTask,onDelete}){
    
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-Us',{
        year:'numeric',
        month:'short',
        day:'numeric'
    });
    return( 
    <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-700 mb-2">
                    {project.title}
                </h1>
                <button onClick={onDelete} className="text-stone-600 hover:text-stone-950">
                    Delete
                </button>
            </div>
            <p className="mb-4 text-stone-400">{formattedDate}</p>
            <p className="text-stone-700 whitespace-pre-wrap">{project.description}</p>
        </header>
        <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask}/>
    </div>

    )
}