import React from "react";
import TodoCard from "./TodoCard";
const TodoListForm = (props) => {
  const toDoList = props.toDoList;
  return (
    <div className="w-full sm:w-1/2 my-6  rounded-md">
      <ul className="w-full">
        {toDoList.map((Todo) => {
          return (
            <TodoCard {...props} key={Todo} index={Todo}>
              <p className="text-xl w-5/6 font-[Poppins,sans-serif] pl-4 overflow-auto">
                {Todo}
              </p>
            </TodoCard>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoListForm;
