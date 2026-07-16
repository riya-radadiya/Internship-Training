import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <h1>Redux Task Manager</h1>

      <AddTask />

      <TaskList />

    </div>
  );
}

export default App;