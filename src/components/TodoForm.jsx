import { useState } from "react";
import './../App.css';


const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const handleInput = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim() === '') return;
        addTodo(task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit} className="Form">
            <input className="Input" type="text" placeholder="enter task" value={task} onChange={handleInput} />
            <button className="AddTask" type="submit">Add task</button>
        </form>
    );
};

export default TodoForm;
