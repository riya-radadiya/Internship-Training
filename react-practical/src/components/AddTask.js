import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

function AddTask() {

  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {

    if (task.trim() === "") return;

    dispatch(addTask(task));
    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;