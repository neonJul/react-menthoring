import { SEARCH_BY, SORT_BY } from '../actions/types';


const initialState = {
    searchBy: 'title',
    sortBy: 'release_date'
};

export default function searchParamsReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_BY:
            return { ...state, searchBy: action.filter };
        case SORT_BY:
            return { ...state, sortBy: action.filter };
        default:
            return state;
    }
}