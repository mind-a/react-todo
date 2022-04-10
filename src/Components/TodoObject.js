import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdStar,
} from "react-icons/md";
import cn from "classnames";
//리액트 라이브러리
import "./TodoObject.scss";

const TodoObject = ({ todo, onDelete, onCheck, onStar }) => {
  const { id, text, checked, star } = todo;

  return (
    <div className={cn("TodoObject", { star })}>
      <div className={cn("checkbox", { checked })} onClick={() => onCheck(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className={cn("important", { star })} onClick={()=> onStar(id)}>
        <MdStar />
      </div>
      <div className="remove" onClick={() => onDelete(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoObject;