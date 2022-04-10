import React from "react";
import TodoObject from "./TodoObject";
import "./TodoList.scss";

const TodoList = ({ memo, onDelete, onCheck, onStar }) => {
  return (
    <div className="TodoList">
      {memo.map(todo => (
        <TodoObject
          todo={todo}
          key={todo.id}
          onDelete={onDelete}
          onCheck={onCheck}
          onStar={onStar}
        />
      ))}
    </div>
  );
};

export default TodoList;