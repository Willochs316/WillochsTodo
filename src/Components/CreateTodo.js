import React from "react";
import { useState } from "react";

const CreateTodos = ({ todos, setTodos, editTodoUser, setEditTodoUser }) => {
  console.log(editTodoUser, Boolean(0), "edit");
  const [list, setList] = useState({
    id: null,
    title: "",
    isCompleted: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleTodo = (e) => {
    const value = e.target.value;

    setList({
      id: todos.length + 1,
      title: value,
      isCompleted: false
    });
  };

  const handleTodoClick = () => {
    const existingTodos = [...todos];
    existingTodos.push(list);
    setTodos(existingTodos);
    setList({
      id: null,
      title: "",
      isCompleted: null
    });
  };

  const handleEditTodo = (e) => {
    const value = e.target.value;
    setEditTodoUser({
      id: editTodoUser.id,
      title: value,
      isCompleted: false
    });
  };

  const handleEditUpdate = () => {
    //const existingTodos = [...todos];
    const editTodos = todos.filter((todo) => {
      if (todo.id === editTodoUser.id) {
        todo.title = editTodoUser.title;
      }
      return todo;
    });

    setTodos(editTodos);
    setEditTodoUser({
      id: null,
      title: "",
      isCompleted: null
    });
  };

  return (
    <>
      <div></div>

      {editTodoUser.id === null ? (
        <form onSubmit={handleSubmit}>
          <input
            name="todoInput"
            type="text"
            className="todoInput"
            value={list.title}
            onChange={handleTodo}
            placeholder="Add tasks..."
          />
          <span onClick={handleTodoClick} className="addTask">
            Add
          </span>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            name="todoInput"
            type="text"
            className="todoInput"
            value={editTodoUser.title}
            onChange={handleEditTodo}
            placeholder="Edit tasks..."
          />
          <span onClick={handleEditUpdate} className="addTask">
            Edit
          </span>
        </form>
      )}
    </>
  );
};

export default CreateTodos;
