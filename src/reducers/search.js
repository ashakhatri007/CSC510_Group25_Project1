import { FETCH_SEARCH_RESULTS_SUCCESS,CLEAR_SEARCH_STATE } from "../actions/actionTypes"

const initialSearchState = {
    results: []
}

export default function search(state= initialSearchState, action){

    switch(action.type){

        case FETCH_SEARCH_RESULTS_SUCCESS:
            return {
                ...state,
                results: action.users
            }

        case CLEAR_SEARCH_STATE:
            return {
                ...state,
                results:action.results
                } 
        default:
            return state
    }
}