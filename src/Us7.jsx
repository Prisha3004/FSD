import React, { useState } from "react";

function Us7() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addtask = () => {
    setTodoList([...todoList, { id: Date.now(), name: task }]);
    setTask();
  };
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <>
      <div>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addtask}>Add</button>
      </div>
      {todoList.map((task) => (
        <div key={task.id}>
          <h2>{task.name}</h2>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default Us7;
