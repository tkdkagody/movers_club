import {
    EXTRACT_VIDEO_URL,
    EXTRACT_VIDEO_ID,
    GET_EMBED_JSON,
    VIEW_VIDEO_THUMNAIL,
    CLICK_AGREE_CHECKED,
    GET_THUMNAIL_URL,

    GET_DANCE_TITLE,
    GET_DANCE_STORY,
    GET_GENRES,
    GET_CREATOR,
    GET_CREATOR_IMG,
    GET_CREATOR_ROLE,
    GET_TAG_LIST,
    GET_TAG_ITEM,
    DELETE_VIDEO_THUMNAIL,
    GET_CREATOR_ARR,


    ADD_REGISTER_FORM,
    DELETE_REGISTER_FORM,
    COPY_REGISTER_FORM,

    ADD_REGISTER_FORM_POST,
    DELETE_REGISTER_FORM_POST,
    COPY_REGISTER_FORM_POST,


    SET_FORM_VALUES,
    INIT,

    GET_CREATOR_LIST,

} from '../actions/registerAction';
import { registerinitialState } from "./initialState";


const registerReducer = ( state = registerinitialState, action ) => {
    switch(action.type) {
        
        case EXTRACT_VIDEO_URL: 
        //todo
        return Object.assign(
            {},
            state,
            {
                video_url: action.payload,
            }
        );



        case EXTRACT_VIDEO_ID: 
        //todo
        return Object.assign(
            {},
            state,
            {
                videoId: action.payload,
            }
        );

        case GET_THUMNAIL_URL: 
        return Object.assign(
            {},
            state,
            {
                thumbnail_url: action.payload,
            }
        )


        case VIEW_VIDEO_THUMNAIL: 
        //todo
        return Object.assign(
            {},
            state,
            {
                viewVideo: true,
            }
        );

        
        case DELETE_VIDEO_THUMNAIL: 
        //todo
        return Object.assign(
            {},
            state,
            {
                viewVideo: false,
            }
        );

        case CLICK_AGREE_CHECKED: 
        //todo
        return Object.assign(
            {},
            state,
            {
                agreement: action.payload,
            }
        );
     


        //INFO
        case GET_DANCE_TITLE: 
        //todo
        return Object.assign(
            {},
            state,
            {
                title: action.payload,
            }
        );


        case GET_DANCE_STORY: 
        //todo
        return Object.assign(
            {},
            state,
            {
                story: action.payload,
            }
        );

        case GET_CREATOR: 
        //todo
        return Object.assign(
            {},
            state,
            {
                searchInputValue: action.payload,
            }
        );

        case GET_CREATOR_ARR: 
        //todo
        return Object.assign(
            {},
            state,
            {
                creator: action.payload,
            }
        );

        case GET_CREATOR_IMG: 
        //todo
        return Object.assign(
            {},
            state,
            {
                searchImg: action.payload,
            }
        );

        case GET_CREATOR_ROLE:
        return Object.assign(
          {},
          state,
          {
            roleValue : action.payload,
          }  
        );
        
        
        case GET_GENRES: 
       // console.log(action.payload,"99")
        //todo
        return Object.assign(
            {},
            state,
            {
                genre: action.payload,
            }
        );
            

    
        case GET_TAG_LIST: 
        //todo
        return Object.assign(
            {},
            state,
            {
                tag: action.payload,
            }
        );

        case GET_TAG_ITEM: 
        //todo
        return Object.assign(
            {},
            state,
            {
                tagItem: action.payload,
            }
        );

        case ADD_REGISTER_FORM:
        return Object.assign(
            {},
            state,
            {
               forms : [...state.forms, action.payload]
            }
        );

        
        case DELETE_REGISTER_FORM:
        return Object.assign(
            {},
            state,
            {
                forms : action.payload
            }
        )

        
        case COPY_REGISTER_FORM: 
        return Object.assign(
            {},
            state,
            {
                forms: state.forms.concat(JSON.parse(action.payload))
            }
        )

        case GET_CREATOR_LIST :
        return Object.assign(
            {},
            state,
            {
                creatorList : action.payload
            }
        )
        
    
 //post용 데이터 따로 만들기///  
        case ADD_REGISTER_FORM_POST:
            return Object.assign(
                {},
                state,
                {
                    postForms : [...state.postForms, action.payload]
                }
            );
    
            
            case DELETE_REGISTER_FORM_POST:
            return Object.assign(
                {},
                state,
                {
                    postForms : action.payload
                }
            )
    
            
            case COPY_REGISTER_FORM_POST: 
            return Object.assign(
                {},
                state,
                {
                    postForms: state.postForms.concat(JSON.parse(action.payload))
                }
            )
        
        default: 
        return state; 
    } 
        
}



export default registerReducer; 

