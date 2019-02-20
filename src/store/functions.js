export const requestSuccess = 
    (actionType, result, query) => {
        return {
            type: actionType,
            payload: {
                query,
                data: result.data,
                status: 'success',
                error: null,
            }
        }
    }

export const requestStart = (actionType) => 
{
    return {
        type: actionType,
        payload: {
            query: '',
            data: [],
            status: 'pendding',
            error: null,
        }
    }
}

export const requestFaild = (actionType, error) => {
    return {
        type: actionType,
        payload: {
            query: '',
            data: [],
            status: 'faild',
            error: error,
        }
    }
}