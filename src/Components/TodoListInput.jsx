import { useState } from "react";

const TodoListInput = (props) => {
  const { HandleAddTask, task, setTask } = props;

  const HandleSetTask = (e) => {
    setTask(e.target.value);
  };
  return (
    <section className="mt-2">
      <div className="flex justify-center items-center">
        <input
          className="border-4 border-black font-[Roboto,sans-serif] text-xl p-3 placeholder:p-1 w-[200px] h-9 sm:w-96 sm:h-11 rounded-xl hover:rounded-full"
          type="text"
          id="taskinput"
          value={task}
          onChange={(Event) => HandleSetTask(Event)}
          placeholder="Enter the Task..."
        />
        <button
          className="border-4 border-[#F6E6CB]  font-[Roboto,sans-serif] text-sm text-white rounded-xl h-9  sm:h-11 px-2 sm:text-xl ml-4 font-semibold"
          onClick={() => {
            HandleAddTask(task), setTask("");
          }}>
          {" "}
          Add Task
        </button>
      </div>
    </section>
  );
};

export default TodoListInput;
