import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "./taskTypes";
import { loadTasks, saveTasks } from "./taskApi";

const initialState: Task[] = loadTasks();

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
      saveTasks(state);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const newState = state.filter(t => t.id !== action.payload);
      saveTasks(newState);
      return newState;
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.findIndex(t => t.id === action.payload.id);
      state[index] = action.payload;
      saveTasks(state);
    }
  }
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;

