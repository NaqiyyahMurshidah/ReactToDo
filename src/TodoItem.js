//for each task in the list, this component will render a checkbox, the task text, and a delete button
import React from "react";
function TodoItem ({task, deleteTask, toggleCompleted}) //this is a functional component that takes in props from the parent comonents 
{ 
    function handleChange() { //triggerd for the checkbox (check or uncheck)
        toggleCompleted(task.id); //this is passed the completed status of the task
    }

    return (
        <div className="todo-item">
            <input 
            type="checkbox"
            onChange={handleChange} //onChnage is to listen for changes in the input field
            />
            <p>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>X</button> {/*this is to delete the task */}
        </div>
    )
}
export default TodoItem; //this is to export the TodoItem component