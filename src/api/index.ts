import { fetchFromApi } from './utils';

const apiCalls = () => {
    const getRandomProjectId = () => {
        return fetchFromApi({
            path: 'https://recruitment01.vercel.app/api/init',
            httpMethod: 'GET',
        })
    };

    const getProjectDetails = (id: string) => {
        return fetchFromApi({
            path: `https://recruitment01.vercel.app/api/project/${id}`,
            httpMethod: 'GET',
        })
    };

    return {
        getRandomProjectId,
        getProjectDetails
    }
};

export const api = apiCalls();