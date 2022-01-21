const Button = ({ id, todo, completeTodo, removeTodo, editTodo }) => {
  return (
    <div className="list-button">
      <button onClick={() => completeTodo(id)} className="btn">
        Complete
      </button>
      <button onClick={() => editTodo(todo)} className="btn2">
        Edit
      </button>
      <button onClick={() => removeTodo(id)} className="btn3">
        x
      </button>
    </div>
  );
};
export default Button;
