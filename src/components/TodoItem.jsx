import './../App.css';

const TodoItem = ({ todo, markAsDone, deleteTodo }) => {
    return (
        <li className="Task">
            <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>{todo.task}</span>
            <span className="TaskButtons">
                <button className="MarkDone" onClick={() => markAsDone(todo.id)}>{!todo.isDone ? "Done" : "Undo"}</button>
                <button className="Delete" onClick={() => deleteTodo(todo.id)}>delete</button>
            </span>
        </li>
    );
}

export default TodoItem;
