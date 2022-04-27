import {
    GET_BANNER_ITEM
} from '../actions/bannerAction';
import { bannerInitialState } from "./initialState";


const bannerReducer = (state = bannerInitialState, action) => {
    switch(action.type) {
        
        case GET_BANNER_ITEM: 
        //todo
        return Object.assign(
            {},
            state,
            {
                bannerItem: action.payload
            }
        );
       

        default:
        return state; 
    }
    
}

export default bannerReducer; 