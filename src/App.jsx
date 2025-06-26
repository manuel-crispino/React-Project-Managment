import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  
  const[projectsState,setProjectsState] = useState({
    selectedProjectId:undefined,
    projects: [],
    tasks:[]
  });

  function handleSelectProject(id){
  setProjectsState(prevState =>{
    return{
      ...prevState,
      selectedProjectId:id,
     }
    });
  }

  function handleAddTask(text){
   setProjectsState((prevState)=>{
    const taskId = Math.random();
    const newTask = {
      text:text,
      projectId:prevState.selectedProjectId,
      id:taskId
    };

    return{
      ...prevState,
      tasks:[...prevState.tasks,newTask]
    }

   })
  }

  function handleDeleteTask(taskId){
   setProjectsState((prevState)=>{
    
    return{
      ...prevState,
      tasks: prevState.tasks.filter(task => task.id !== taskId)
    }
   })
    console.log(projectsState);
  }

  function handleDeleteSelectedProject(){
    setProjectsState(prevState =>{
    return{
      ...prevState,
      selectedProjectId:undefined,
      projects: prevState.projects.filter(project => project.id !== projectsState.selectedProjectId)
     }
    });
  }
 
  function handleStartAddProject(){
    setProjectsState(prevState =>{
    return{
      ...prevState,
      selectedProjectId:null,
     }
    });
  }

   function handleCancelAddProject(){
      setProjectsState(prevState =>{
    return{
      ...prevState,
      selectedProjectId:undefined,
     }
    });
  }


  function handleAddProject(projectData){
    setProjectsState(prevState=>{
      const newProject ={
        ...projectData,
        id: Math.random()
      }
      return{
        ...prevState,
        selectedProjectId:undefined,
      projects: [...prevState.projects,newProject]
    };
    });
  }
  
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  
  let content = 
  <SelectedProject 
  onDelete={handleDeleteSelectedProject} 
  project={selectedProject}
  tasks={projectsState.tasks}
  onDeleteTask={handleDeleteTask} 
  onAddTask={handleAddTask} 
  />;

  if (projectsState.selectedProjectId === null){
    content=<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
  <main className="h-screen my-8 flex gap-8">
    <ProjectsSidebar 
    onStartAddProject={handleStartAddProject}  
    projects={projectsState.projects}
    onSelectProject={handleSelectProject}
    />
    {content}
  </main>
  );
}

export default App;
