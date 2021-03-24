interface Props {
    path: string,
    httpMethod: string,
}

export const fetchFromApi = async ({
    path,
    httpMethod,
}: Props ) => {
    const requestObject: any = {
        "method": httpMethod,
        "headers": {
            'Content-Type': 'application/json'
        }
    }

    try {
        const response = await fetch(path, requestObject);

        if (response.ok) {
            const result = await response.json();

            if(result) {
                if (result.error) {
                    throw Error(JSON.stringify(result));
                }
                return result 
            } else {
                return {
                    error: `Unexpected result shape: ${JSON.stringify(result)}`,
                };
            }
        } else if (response.status !== 200) {
            return {
                httpError: response.statusText,
            };
        }
    } catch(error) {
        return {
            unhandledError: error
        };
    }
};