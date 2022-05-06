import {
    OPEN_LOGIN_MODAL,CLOSE_LOGIN_MODAL,
    OPEN_PUBLISH_MODAL,CLOSE_PUBLISH_MODAL,
    OPEN_CREATOR_MODAL,CLOSE_CREATOR_MODAL,
} from '../actions/modalAction';
import { modalInitialState } from "./initialState";

const modalReducer = (state = modalInitialState, action) => {
    switch(action.type) {
        
        case OPEN_LOGIN_MODAL: 
        //todo
        return Object.assign(
            {},
            state,
            { loginModalOpen: action.payload.loginModalOpen}
        );
        break;



        case CLOSE_LOGIN_MODAL: 
        //todo
        return Object.assign(
            
            {},
            state,
            {loginModalOpen: false}
        );
        break;


        case OPEN_PUBLISH_MODAL: 
        //todo
        return Object.assign(
            {},
            state,
            { publishModalOpen: true}
        );
        break;


        case CLOSE_PUBLISH_MODAL: 
        //todo
        return Object.assign(
            
            {},
            state,
            {publishModalOpen: false}
        );
        break;

        case OPEN_CREATOR_MODAL: 
        //todo
        return Object.assign(
            {},
            state,
            { creatorModalOpen: true}
        );
        break;


        case CLOSE_CREATOR_MODAL: 
        //todo
        return Object.assign(
            
            {},
            state,
            {creatorModalOpen: false}
        );
        break;



        default:
        return state; 
    }
    
}

export default modalReducer; 