import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../redux/sagaActions";

export default function ListUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  console.log(users);

  const renderList = () => {
    return users.map((user, i) => {
      return <p key={i}>{user.name}</p>;
    });
  };

  return (
    <div>
      <button onClick={() => dispatch({ type: sagaActions.FETCH_USERS_SAGA })}>
        Get Users
      </button>
      {renderList()}
    </div>
  );
}
