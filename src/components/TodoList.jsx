"use client"

import { useState } from "react"
import "../assets/styles/components/todolist.css"

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete project documentation", priority: "blue" },
    { id: 2, text: "Review team performance", priority: "blue" },
    { id: 3, text: "Fix urgent bug in payment system", priority: "orange" },
    { id: 4, text: "Prepare monthly report", priority: "blue" },
  ])

  const [newTodo, setNewTodo] = useState("")

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        text: newTodo,
        priority: "blue",
      }
      setTodos([...todos, todo])
      setNewTodo("")
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const togglePriority = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, priority: todo.priority === "blue" ? "orange" : "blue" } : todo,
      ),
    )
  }

  return (
    <div className="todos-section">
      <div className="todos-header">
        <h2 className="section-title">Todos</h2>
        <button className="add-todo-btn" onClick={addTodo}>
          +
        </button>
      </div>

      <div className="todo-input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo..."
          className="todo-input"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addTodo()
            }
          }}
        />
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <div
              className={`todo-indicator ${todo.priority}`}
              onClick={() => togglePriority(todo.id)}
              style={{ cursor: "pointer" }}
            ></div>
            <span className="todo-text">{todo.text}</span>
            <button className="todo-menu" onClick={() => deleteTodo(todo.id)}>
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
