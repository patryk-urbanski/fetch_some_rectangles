import { fetchFromApi } from './utils';

const apiCalls = () => {
    const getSectorPerformance = () => {
        return fetchFromApi({
            path: "https://alpha-vantage.p.rapidapi.com/query?function=SECTOR",
            httpMethod: "GET",
        })
    };


    return {

    }
};

export default apiCalls;