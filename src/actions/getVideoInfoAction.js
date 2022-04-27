//action types 
export const GET_VIDEO_INFO = "GET_VIDEO_INFO";
export const UPDATE_VIDEO_INFO = "UPDATE_VIDEO_INFO";
export const GET_CLICKED_INFO = "GET_CLICKED_INFO";
export const GET_PARAMS_DATA = "GET_PARAMS_DATA";
export const GET_OTHER_VIDEO = "GET_OTHER_VIDEO";

//actions creator functions 

export const getVideoInfo = (dataAll) => {
    console.log(dataAll,"액션으로 들어오는 리스트")
    return {
        //todo
        type: GET_VIDEO_INFO,
        payload: {
            videoData : dataAll,
        } 
    }
}


export const updateVideoInfo = () => {
    return {
        //todo
        type: UPDATE_VIDEO_INFO,
        payload: {
            modalOpen : false,
        } 
    }
}

export const getClickedInfo = (data) => {

    return {
        //todo
        type: GET_CLICKED_INFO,
        payload: {
            selectedVideo : data
        } 
    }
}


//params값으로 id 값 걸러내기 
export const getParamsData = (data) => {
    return {
        //todo
        type: GET_PARAMS_DATA,
        payload: {
            paramsData : data,
        } 
    }
}


//othervideo 
export const getOtherVideo = (data) => {
    return {
        //todo
        type: GET_OTHER_VIDEO,
        payload: {
            otherVideo : data,
        } 
    }
}