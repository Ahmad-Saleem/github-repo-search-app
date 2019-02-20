import axios from 'axios';
import { requestStart, requestSuccess, requestFaild } from './functions';

export const SEARCH_BY_REPO_NAME = 'SEARCH_BY_REPO_NAME';

export const searchByRepoName = (query, page) => {
    return (dispatch) => {
    
        dispatch(requestStart(SEARCH_BY_REPO_NAME));

        const request = axios.get(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&page=${page}`);
        
        return request.then( //res => console.log(res.data.items),
            result => dispatch(requestSuccess(SEARCH_BY_REPO_NAME, result, query)),
            error => dispatch(requestFaild(SEARCH_BY_REPO_NAME, error))
        );
    }
}


