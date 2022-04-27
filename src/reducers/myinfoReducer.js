import {
    MODIFY_MY_NICKNAME ,
    MODIFY_MY_EMAIL ,
    MODIFY_PROFILE_IMG ,
    SET_NICK_ERRORMSG, 
    SET_MAIL_ERRORMSG,
} from '../actions/myinfoAction';
import { myinfoInitialState } from "./initialState";

const myinfoReducer = (state = myinfoInitialState, action) => {

    switch(action.type) {


        case MODIFY_MY_NICKNAME:
        return Object.assign(
            {},
            state,
            {
                nickname: action.payload,
            }
        );

        case MODIFY_MY_EMAIL:
        return Object.assign(
            {},
            state,
            {
                email: action.payload,
            }
        );

        case MODIFY_PROFILE_IMG:
        return Object.assign(
            {},
            state,
            {
                profile: action.payload,
            }
        ); 
        

        case SET_NICK_ERRORMSG:
        return Object.assign(
            {},
            state,
            {
                nickErrorMsg : action.payload,
            }
        ); 

        case SET_MAIL_ERRORMSG:
            return Object.assign(
                {},
                state,
                {
                    emailErrorMsg: action.payload,
                }
            ); 

            
        default:
        return state; 

    }
}

export default myinfoReducer; 