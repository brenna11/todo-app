import { useState } from "react";
import './Form.scss';
import { HiPlus } from "react-icons/hi";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function Form({ onAddTask }) {
   const [description, setDescription] = useState("");
   const [status, setStatus] = useState(false);
   const [errorMessage, setErrorMessage] = useState([]);

   const formSubmitHandler = (e) => {
      e.preventDefault();

      const validation = [];
      if (description === "") {
         validation.push("Please enter a description!!");
      }
      else {
         onAddTask(description, status);
      }

      setErrorMessage(validation);
      if (validation.length === 0) {
         setDescription("");
         setStatus(false);
      }
   }

   return (
      <form onSubmit={formSubmitHandler}>
         <h2>Add a new task:</h2>
         <div className="form-container">
            <div>
               <label>
                  {errorMessage.length > 0 && (
                     <div className="err">{errorMessage}</div>
                  )
                  }
                  Description:
                  <input
                     type='text'
                     maxLength={150}
                     value={description}
                     onChange={(e) => setDescription(e.target.value)}
                  />
               </label>
            </div>
            <div className="status">
               <label>
                  Status:
                  <select
                     value={status}
                     onChange={(e) => setStatus(e.target.value)}
                  >
                     <option value={false}>Open</option>
                     <option value={true}>Completed</option>
                  </select>
               </label>
            </div>
            <div className="btn-container">
               <button><HiPlus /> Add</button>
            </div>
         </div>
      </form>
   );
}

export default Form;