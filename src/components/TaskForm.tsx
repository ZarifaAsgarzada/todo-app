import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    dispatch(addTask({
      id: uuid(),
      title,
      description,
      status: "todo"
    }));
  };

  return (
    <div>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" onChange={e => setDescription(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TaskForm;