import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../redux/sagaActions";

export default function ListToDos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  console.log(todos);

  const renderList = () => {
    return todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });
  };

  return (
    <div>
      <button onClick={() => dispatch({ type: sagaActions.FETCH_TODOS_SAGA })}>
        Get Todos
      </button>
      {renderList()}
    </div>
  );
}
