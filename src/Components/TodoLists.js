import React, { useEffect, useState } from "react";
import Button from "./Button";

const TodoLists = ({ todos, completeTodo, removeTodo, editTodo }) => {
  const [todosLeft, setTodosLeft] = useState(0);

  useEffect(() => {
    setTodosLeft(todos.filter((todo) => !todo.isCompleted).length);
  }, [todos]);

  return (
    <>
      <p className="pending">Pending Todos({todosLeft})</p>
      <div className="todo-lists">
        {todos.map((todo) => (
          <ul key={todo.id} className="list-preview">
            <li
              style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
            >
              {todo.title}
            </li>
            <Button
              id={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          </ul>
        ))}
      </div>
    </>
  );
};

export default TodoLists;
