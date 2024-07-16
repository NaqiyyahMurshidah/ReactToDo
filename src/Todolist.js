//parent component
//for each task in the list, this component will render a TodoItem component
import { useState } from "react"; //use state is a hook that allows you to have state variables in functional components
import TodoItem from "./TodoItem"; //this is to import the TodoItem component

function Todolist() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      completed: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      completed: false,
    },
  ]);

  const [text, setText] = useState("");
  function addTask(text) { //adding task 
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]); //this is to add the new task to the tasks array
    setText("") //this is to clear the input field
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id)); //this is to delete the task that has the same id as the task that was clicked
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task, //this is to copy the task
            completed: !task.completed, //flip the completed status of the task
          };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="todo-list">
      {/* mapping the todo items */}
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {/* setText.apply() only use if the function use a 'this' context and an array arguments. to call the setText function here we must directly call the value  */}
      {/* onChange handler to update the text  */}
      <button onClick={() => addTask(text)}>Add</button>
    </div>
  );
}
export default Todolist;
