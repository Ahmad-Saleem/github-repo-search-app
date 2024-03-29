import { combineReducers } from 'redux';
import { SEARCH_BY_REPO_NAME, RESET_SEARCH } from './actions';


const initialState = {
    results: [],
}

const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_BY_REPO_NAME: {
            return {
                ...state,
                results: {
                    ...action.payload
                },
            }
        }
        case RESET_SEARCH: {
            return {
                ...state,
                results: {
                    ...action.payload
                },
            }
        }
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    search: searchReducer
});

export default rootReducer;