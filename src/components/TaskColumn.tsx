import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import type { TaskStatus } from "../features/tasks/taskTypes";
import TaskCard from "./TaskCard";
import { useStyles } from "../styles/styles";

interface Props {
  status: TaskStatus;
}

const TaskColumn = ({ status }: Props) => {
  const classes = useStyles();

  const tasks = useSelector((state: RootState) =>
    state.tasks.filter(t => t.status === status)
  );

  return (
    <div className={classes.column}>
      <h2>{status}</h2>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;