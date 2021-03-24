import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProject } from '../../types';

type Projects = {
    selectedProject: IProject | null;
};

export const initialState: Projects = {
    selectedProject: null
};

const projects = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProjects(state, action: PayloadAction<IProject>) {

            state.selectedProject = action.payload;
        },
    },
});

export const {
    setProjects,
} = projects.actions;

export default projects.reducer;