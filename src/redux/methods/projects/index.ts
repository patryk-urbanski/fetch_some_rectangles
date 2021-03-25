import { api } from '../../../api';
import { setIsLoading, setError } from '../../../features/globalStates/slice';
import { setProjects } from '../../../features/projects/slice';
import { IProject } from '../../../types';

type IsLoadingAndError = boolean | string | null

interface IPayload {
    payload: IsLoadingAndError | IProject
}

export const getProjectDetails = (id: string) => async (dispatch: (action: IPayload) => void) => {
    dispatch(setIsLoading(true));

    const result = await api.getProjectDetails(id)
    const { error, httpError, unhandledError } = result;

    const errorToHandle = error || httpError || unhandledError;

    if(errorToHandle) {
        dispatch(setError(errorToHandle));
        dispatch(setIsLoading(false));
    }
    else {
        dispatch(setProjects(result));
        dispatch(setIsLoading(false));
    }
}

export const getRandomProjectId = () => async (dispatch: (action: IPayload) => void) => {
    dispatch(setIsLoading(true));

    const result = await api.getRandomProjectId();

    const { error, httpError, unhandledError } = result;

    const errorToHandle = error || httpError || unhandledError;

    if(errorToHandle) {
        dispatch(setError(errorToHandle));
        dispatch(setIsLoading(false));
    }
    else {
        dispatch(setIsLoading(false));
        return result;
    }
}



