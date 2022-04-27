import {
    GET_SEARCH_VALUE,
    GET_FILTERED_ARR
} from '../actions/searchAction';
import { searchInitialState } from "./initialState";

const searchReducer = (state =searchInitialState, action) => {
    switch(action.type) {
        
        case GET_SEARCH_VALUE: 
        //todo
        return Object.assign(
            {},
            state,
            {
                searchValue: action.payload
            }
        );
        break;

        case GET_FILTERED_ARR:
            return Object.assign(
                {},
                state,
                {
                    filteredVideo:action.payload.filteredVideo
                }
            )



        default:
        return state; 
    }
    
}

export default searchReducer; 