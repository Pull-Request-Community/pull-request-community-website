import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { User } from '../services/user';

type ProjectsMap = { [projectId: string]: User }; //TODO: change type to "Project"
export interface ProjectsState {
  items: ProjectsMap;
}

const initialState: ProjectsState = {
  items: {},
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    receivedProjects: (state: RootState, action: PayloadAction<User[]>) => {
      const allUsers = action.payload;
      allUsers.forEach((project) => (state.items[project.id] = project));
    },
  },
});

export const { receivedProjects } = projectsSlice.actions;
export default projectsSlice.reducer;

//TODO: in a single project page, use as follow: const selectedProject = useAppSelector(getProject('1'));
export const getProject = (id: string) => (state: RootState) => {
  return state.projects.items[id];
};
