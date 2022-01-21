import React, { useState } from "react";
import CreateTodos from "./CreateTodo";
import TodoLists from "./TodoLists";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Buy a gaming laptop",
      isCompleted: false
    },
    {
      id: 2,
      title: "Complete a previous task",
      isCompleted: false
    },
    {
      id: 3,
      title: "Create a video for YouTube",
      isCompleted: false
    }
  ]);

  const [editTodoUser, setEditTodoUser] = useState({
    id: null,
    title: "",
    isCompleted: false
  });

  const completeTodo = (id) => {
    const todosLeft = todos.filter((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

    setTodos(todosLeft);
  };

  const removeTodo = (id) => {
    const todosLeft = todos.filter((todo) => todo.id !== id);
    setTodos(todosLeft);
  };

  const editTodo = (todoInfo) => {
    setEditTodoUser(todoInfo);
  };

  return (
    <>
      <TodoLists
        todos={todos}
        setTodos={setTodos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
      <CreateTodos
        todos={todos}
        setTodos={setTodos}
        editTodoUser={editTodoUser}
        setEditTodoUser={setEditTodoUser}
      />
    </>
  );
};

export default Todos;
