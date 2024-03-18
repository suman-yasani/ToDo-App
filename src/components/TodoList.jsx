import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import './../App.css';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (task) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), task: task, isDone: false }];
        });
    };

    const markAsDone = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: !todo.isDone };
                }
                return todo;
            });
        });
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <hr />
            <h4>Tasks to do</h4>
            <div className="Todos">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} markAsDone={markAsDone} deleteTodo={deleteTodo} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
