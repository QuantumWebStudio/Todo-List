import React from "react";

const TodoCard = (props) => {
  const { children, HandleDeleteTask, index, HandleEditTask } = props;
  return (
    <li className=" w-full flex justify-between items-center even:bg-blue-300 odd:bg-yellow-300  h-auto">
      {children}
      <div className="flex justify-end items-center w-1/6 m-0 float-right">
        <button onClick={() => HandleEditTask(index)}>
          <i className="fa-solid fa-pen-to-square text-2xl px-1"></i>
        </button>
        <button onClick={() => HandleDeleteTask(index)}>
          <i className="fa-solid fa-trash text-2xl px-1"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
