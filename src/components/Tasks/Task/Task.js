import './Task.scss';
import { FiCheckCircle } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";

function Task(props) {

   const changeStatusHandler = () => {
      const id = props.task.id;
      props.onChangeStatus(id);
   }

   const removeTaskHandler = () => {
      const id = props.task.id;
      props.onRemoveTask(id);
   }

   const statusChange = props.task.done
   ? 'status-open'
   : 'status-completed';

   const iconChange = props.task.done
   ? 'completed-icon' 
   : 'incomplete-icon';

   return (
      <div className="task-container">
         <h3>{props.task.description}</h3>
         <div>Id: {props.task.id}</div>
         <div className={statusChange}>Status:  
            <strong>
               {
                  props.task.done 
                  ? 'Completed'
                  : 'Open'
               }
            </strong>
         </div>
         <div className="btn-container">
            <button 
               onClick={changeStatusHandler} 
               >
                  <FiCheckCircle className={iconChange}/> Change Status
            </button>
            <button onClick={removeTaskHandler}>
              <RiDeleteBin5Fill/> Remove Task
            </button>
         </div>
      </div>
   );
}

export default Task;
