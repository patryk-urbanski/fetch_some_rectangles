import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import globalReducer, { initialState as globalInitialState } from '../features/globalStates/slice';
import projectsReducer, { initialState as projectsInitialState } from '../features/projects/slice';

const initialState = {
    global: globalInitialState,
    projects: projectsInitialState,
}

export const store = configureStore({
    reducer: {
        global: globalReducer,
        projects: projectsReducer,
    },
    preloadedState: initialState
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
