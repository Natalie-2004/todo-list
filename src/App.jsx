import './style.css';
import { useState } from "react";
import NewToDoForm from "./NewToDoForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    const [todos, setTodos] = useState([]);

    function addTodo(newTodo) {
        setTodos(curr => [...curr, { ...newTodo, id: Date.now() }]);
    }

    function deleteToDo(id) {
        setTodos(curr => curr.filter(todo => todo.id !== id));
    }

    function toggleTodo(id) {
        setTodos(curr =>
            curr.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ToDoList
                            todos={todos}
                            onDelete={deleteToDo}
                            onToggle={toggleTodo}
                        />
                    }
                />
                <Route
                    path="/new"
                    element={
                        <NewToDoForm onSubmit={addTodo} />
                    }
                />
            </Routes>
        </Router>
    )
}

function ToDoList({ todos, onDelete, onToggle }) {
    return (
        <div className="app-container">
            <h1 className="header">Todo List</h1>
            <Link to="/new" className="btn">Add New Todo</Link>
            <ul className="list">
                {todos.map(todo => (
                    <li key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => onToggle(todo.id)}
                            />
                            <span className={todo.completed ? "completed" : ""}>
                                {todo.title} - {todo.date}
                            </span>
                        </label>
                        <button
                            onClick={() => onDelete(todo.id)}
                            className="btn btn-danger"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App;