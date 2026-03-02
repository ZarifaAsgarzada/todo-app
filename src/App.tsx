import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

function App() {
return (
   <div style={{ display: "flex", gap: 20 }}>
    <TaskForm />
    <TaskColumn status="todo" />
     <TaskColumn status="in-progress" />
   <TaskColumn status="done" />
   </div>
 );
}

export default App; 