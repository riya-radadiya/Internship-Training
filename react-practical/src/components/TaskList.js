import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";

function TaskList() {

  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <div>

      <h2>Task List</h2>

      <ul>

        {tasks.map(task => (

          <li key={task.id}>

            {task.text}

            <button
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default TaskList;