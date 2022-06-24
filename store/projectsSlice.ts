import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {User} from "../services/user";

type ProjectsStatus = "LOADING" | "READY" | "ERROR";
export interface ProjectsState {
    items: { [projectId: string]: User };
    users: User[],
    status: ProjectsStatus;
}

const initialState: ProjectsState = {
  items: {},
  users: [],
  status: "READY"
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
      receivedProjects: (state:RootState, action: PayloadAction<User[]>) => {
        const allUsers = action.payload;
        allUsers.forEach(project => state.items[project.id] = project);
      }
    },
});

export const { receivedProjects } = projectsSlice.actions;
export default projectsSlice.reducer;

export function getProject(state: RootState, id: string) {
  return state.projects.items.find(project => project.id === id);
}