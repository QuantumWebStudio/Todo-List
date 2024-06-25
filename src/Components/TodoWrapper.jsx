import { TodoListForm, TodoListInput } from "./Components";
import React, { useEffect, useState } from "react";

const TodoWrapper = () => {
  const HandleGetTask = () => {
    const localData = localStorage.getItem("task");
    return localData ? JSON.parse(localData) : [];
  };
  const [Task, setTask] = useState(HandleGetTask());
  const [taskValue, setTaskValue] = useState("");

  const HandleAddTask = (NewTask) => {
    if (NewTask === "") {
      alert("ops! cannot add empty Task");
    } else {
      setTask((prevTask) => [...prevTask, NewTask]);
    }
  };
  const HandleDeleteTask = (index) => {
    setTask(Task.filter((task) => task !== index));
  };
  const HandleEditTask = (index) => {
    setTaskValue(index);
    HandleDeleteTask(index);
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(Task));
  }, [Task]);

  return (
    <main className="grid place-items-center ">
      <TodoListInput
        task={taskValue}
        setTask={setTaskValue}
        HandleAddTask={HandleAddTask}
      />
      <TodoListForm
        HandleDeleteTask={HandleDeleteTask}
        HandleEditTask={HandleEditTask}
        toDoList={Task}
      />
    </main>
  );
};

export default TodoWrapper;
