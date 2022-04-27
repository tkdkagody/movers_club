import { registerinitialState } from "../reducers/initialState";
import axios from "axios";


//action types 
export const EXTRACT_VIDEO_URL = "EXTRACT_VIDEO_URL";
export const EXTRACT_VIDEO_ID = "EXTRACT_VIDEO_ID";
export const GET_EMBED_JSON = "GET_EMBED_JSON";
export const VIEW_VIDEO_THUMNAIL = "VIEW_VIDEO_THUMNAIL";
export const CLICK_AGREE_CHECKED = "CLICK_AGREE_CHECKED"

export const GET_DANCE_TITLE ="GET_DANCE_TITLE";
export const GET_DANCE_STORY = "GET_DANCE_STORY";
export const GET_GENRES = "GET_GENRES";
export const GET_CREATOR = "GET_CREATOR";
export const GET_TAG_LIST = "GET_TAGS";
export const GET_TAG_ITEM = "GET_TAG";
export const GET_CREATOR_IMG ="GET_CREATOR_IMG";
export const GET_CREATOR_ROLE = "GET_CREATOR_ROLE";
export const DELETE_VIDEO_THUMNAIL = "DELETE_VIDEO_THUMNAIL";
export const GET_CREATOR_ARR = "GET_CREATOR_ARR";
export const ADD_REGISTER_FORM = "ADD-REGISTER_FORM"; 
export const DELETE_REGISTER_FORM = "DELETE_REGISTER_FORM";
export const COPY_REGISTER_FORM = "COPY_REGISTER_FORM";

export const GET_CREATOR_LIST = "GET_CREATOR_LIST"; 




export const SET_FORM_VALUES="SET_FORM_VALUES";
export const INIT = "INIT";

//actions creator functions 

export const extractVideoUrl = (index,urlobj) => {
    return {
        //todo
        type: EXTRACT_VIDEO_URL,
        payload :urlobj
    }
}

export const extractVideoId = (videoIdobj) => {
    return {
        //todo 
        type: EXTRACT_VIDEO_ID,
        payload: videoIdobj
    }
}


export const viewVideoThumnail = (el) => {
    return {
        //todo
        type: VIEW_VIDEO_THUMNAIL,
        payload: {
            viewVideo : el,
        } 
        
    }
}

export const DeleteVideoThumnail = (el) => {
    console.log(el,"액션 딜리트 받아온 값")
    return {
        //todo
        type: DELETE_VIDEO_THUMNAIL,
        payload: {
            viewVideo : el,
        } 
    }
}


export const clickAgreeChecked = (checkedObj) => {
    return {
        //todo
        type: CLICK_AGREE_CHECKED,
        payload: checkedObj,
    }
}

//INFO

export const getDanceTitle  =  (title) => {
    return {
        //todo
        type: GET_DANCE_TITLE,
        payload: title.danceTitle
    }
}


export const getDanceStory = (story) => {
    return {
        //todo
        type: GET_DANCE_STORY,
        payload: story.danceStory
    }
}


export const getGenres = (genre) => {
    //console.log(genre, "액션 장르")
    return {
        //todo
        type: GET_GENRES,
        payload: genre
    }
}



export const getCreator = (searchInput) => {
    //console.log(searchInput,"서치인풋-사람")
    return {
        //todo
        type: GET_CREATOR,
        payload: searchInput,
    }
}



export const getCreatorArr = (creators) => {
    //console.log(creators,"크리에이터 배열")
    return {
        //todo
        type: GET_CREATOR_ARR,
        payload: creators,
    }
}

export const getCreatorImg = (creatorImgUrl) => {
    return{
        //todo
        type : GET_CREATOR_IMG,
        payload: creatorImgUrl,
    }
}

export const getCreatorRole = (creatorRoleValue) => {
    //console.log(creatorRoleValue,"예수님 부활하셨습니다-롤")
    return{
        //todo
        type : GET_CREATOR_ROLE,
        payload: creatorRoleValue,
    }
}



export const getTagList = (tags) => {
    return {
        //todo
        type: GET_TAG_LIST ,
        payload: tags
    }
}


export const getTagItem = (tagItem) => {
    return {
        //todo
        type: GET_TAG_ITEM ,
        payload: tagItem
    }
}


export const addRegisterForm = () => {
    return {
        type: ADD_REGISTER_FORM, 
        payload: {
            videoUrl : '',
            videoId : '',
            viewVideo : false,
            agreechecked : false,  
            danceTitle : '', 
            danceStory : '',
            genres : [],
            creators : [],   //이 배열을 주로 사용하게 될듯 !!(이름, 이미지, 롤 포함함)
            searchInputValue : '',
            searchImg:'',
            roleValue: "Main Director",
            tags:[],
        }
    }
}

export const deleteRegisterForm = (value)=>{
    return { 
        type:DELETE_REGISTER_FORM,
        payload: value,

}} 

export const copyRegisterForm = (value) => {
    return { 
        type:COPY_REGISTER_FORM,
        payload: JSON.stringify(value)
    }
}




export const getCreatorList = (value) => {
    return {
        type: GET_CREATOR_LIST, 
        payload : value
    }
}

export const fetchCreatorList = () => dispatch => {
    axios
    .get(`https://api.moverse.club/v1/users?page=5`)
    .then((res)=> {
        //console.log(res.data.data.userList,"크리에이터리스트");
        dispatch(getCreatorList(res.data.data.userList))
    })
    .catch(err => console.log(err,"크리에이터에러"))
}