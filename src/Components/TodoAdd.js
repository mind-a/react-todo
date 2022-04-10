import React, { useState, useCallback } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import "./TodoAdd.scss";

const TodoAdd = ({ memoAdd }) => {

    const [value, setValue] = useState("");
    const onChange = useCallback(e => {
        setValue(e.target.value);
      }, []);
    
      const onSubmit = useCallback(
        e => {
          e.preventDefault();
          if(value !==""){
              memoAdd(value);
          } else{
              alert("값을 입력해주세요");
          }
          setValue(""); // 입력창 값 비우기
        },
        [memoAdd, value]
      );
    
      return (
        <form className="TodoAdd" onSubmit={onSubmit}>
          <input
            placeholder="할 일을 적어주세요!"
            value={value}
            onChange={onChange}
          />
          <button type="submit">
            <MdAddCircleOutline />
          </button>
        </form>
      );

    };

export default TodoAdd;