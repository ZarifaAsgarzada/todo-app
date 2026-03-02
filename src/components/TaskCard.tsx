import type { Task } from "../features/tasks/taskTypes";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../features/tasks/taskSlice";

const TaskCard = ({ task }: { task: Task }) => {
  const dispatch = useDispatch();

  const changeStatus = (newStatus: any) => {
    dispatch(updateTask({ ...task, status: newStatus }));
  };

  return (
    <div>
      <h4>{task.title}</h4>
      <p>{task.description}</p>

      <select
        value={task.status}
        onChange={e => changeStatus(e.target.value)}
      >
        <option value="todo">To-do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default TaskCard;