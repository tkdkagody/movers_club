import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    GET_USER_NICKNAME,
    GET_USER_PROFILE_IMG,
    GET_USER_EMAIL,
    GET_USER_ID,
    GET_USER_DATE,
    GET_USER_INVITATION,
    

    FETCH_TOKEN_SUCCESS ,
    FETCH_TOKEN_FAILURE ,
    FETCH_TOKEN
} from '../actions/userAction';
import { userInitialState } from "./initialState";

const userReducer = (state = userInitialState, action) => {

    switch(action.type) {
        
        case FETCH_TOKEN_SUCCESS:
        return Object.assign(
            {},
            state,
            {
                getSignUpToken: action.payload,
            }
        );



        case LOGIN_SUCCESS:
        return Object.assign(
            {},
            state,
            {
                isLogin: action.payload,
            }
        );

        case LOGOUT_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    isLogin: action.payload,
                }
            );

        case GET_USER_NICKNAME : 
        return Object.assign(
            {},
            state,
            {
                nickname: action.payload,
            }
        ); 

        case GET_USER_PROFILE_IMG : 
        return Object.assign(
            {},
            state,
            {
                profileImg: action.payload,
            }
        ); 
        case GET_USER_EMAIL : 
        return Object.assign(
            {},
            state,
            {
                email: action.payload,
            }
        ); 

        case GET_USER_ID : 
        return Object.assign(
            {},
            state,
            {
                userid: action.payload,
            }
        ); 

        case GET_USER_DATE : 
        return Object.assign(
            {},
            state,
            {
                userDate: action.payload,
            }
        );

        case GET_USER_INVITATION : 
        return Object.assign(
            {},
            state,
            {
                invitation: action.payload,
            }
        );


        case FETCH_TOKEN_FAILURE:
        return Object.assign(
            {},
            state,
            {
                email: action.payload,
            }
        );

        
        default:
        return state; 

    }
}

export default userReducer; 