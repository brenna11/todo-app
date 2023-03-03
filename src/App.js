import Header from "./components/Header/Header.js";
import Tasks from "./components/Tasks/Tasks.js";
import Form from "./components/Form/Form.js";
import uuid from "react-uuid";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: uuid(),
        description: "JavaScript4 lab2",
        done: true
      },
      {
        id: uuid(), 
        description: "Mobile Development2 lab1",
        done: false
      },
      {
        id: uuid(),
        description: "Watching lectures",
        done: false
      }
    ]
  )

  const clearTasksHandler = () => {
    setTasks([]);
  }

  const onChangeStatusHandler = (id) => {
    // const changeTasks = [...tasks];
    // changeTasks.forEach((task) => {
    //    if (task.id === id) {
    //       task.done = !task.done;
    //    }
    // })
    const changedTasks = tasks.map(task => {
      if(task.id === id) {
          return {
            ...task,
            done: !task.done
          }
      }
      return task;
    })
    setTasks(changedTasks);
  }

  const onRemoveTaskHandler = (id) => {
    // const removedTasks = tasks.filter(task => task.id !== id);
    const removedTasks = tasks.reduce((acc, task) => {
      if (task.id !== id) {
          acc.push(task);
      }
      return acc;
    }, []);
    setTasks(removedTasks); 
  }

  // add new tasks
  const addTaskHandler = (description, status) => {
    setTasks([...tasks, {
      id: uuid(),
      description: description,
      done: status
    }]);
  }

  return (
    <>
      <Header />
      <Tasks 
        tasks={tasks}
        onChangeStatus={onChangeStatusHandler} 
        onRemoveTask={onRemoveTaskHandler}
        onClearTasks={clearTasksHandler}
      />
      <Form onAddTask={addTaskHandler}/>
    </>
  );
}

export default App;
