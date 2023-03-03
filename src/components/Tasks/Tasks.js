import Task from "./Task/Task.js";
import './Tasks.scss';

function Tasks({tasks, onChangeStatus, onRemoveTask, onClearTasks}) {

   return (
      <div className="list">
         <h2>These are the tasks:</h2>
         {tasks.map((task,index) => (
            <Task 
               key={index}
               task={task}
               onChangeStatus={onChangeStatus} 
               onRemoveTask={onRemoveTask}
            />
         ))}
         <button 
            className="clear-btn"
            onClick={onClearTasks}>
               Clear Tasks
         </button>
      </div>
   );
}

export default Tasks;