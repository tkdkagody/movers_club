import {
    GET_VIDEO_INFO,
    UPDATE_VIDEO_INFO,
    GET_CLICKED_INFO,
    GET_PARAMS_DATA,
    GET_OTHER_VIDEO,
    
} from '../actions/getVideoInfoAction';
import { videoInitialState } from "./initialState";

const getVideoInfoReducer = (state = videoInitialState, action) => {
    switch(action.type) {
        
        case GET_VIDEO_INFO: 
        //todo
        return Object.assign(
            {},
            state,
            {
                videoData: action.payload
            }
        );
        break;

        case UPDATE_VIDEO_INFO: 
        //todo
        return Object.assign(
            {},
            state,
            {
                videoData: action.payload
            }
        );
        break;
       

        case GET_CLICKED_INFO: 
        //todo
        return Object.assign(
            
            {},
            state,
            {
                selectedVideo: action.payload
            }
        );
        break;


        case GET_PARAMS_DATA: 
        //todo
        return Object.assign(
            
            {},
            state,
            {
                paramsData: action.payload
            }
        );
        break;

        
        case GET_OTHER_VIDEO: 
        //todo
        return Object.assign(
            
            {},
            state,
            {
                otherVideo: action.payload
            }
        );
        break;




        default:
        return state; 
    }
    
}

export default getVideoInfoReducer; 