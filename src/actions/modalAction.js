//action types 
export const  OPEN_LOGIN_MODAL = " OPEN_LOGIN_MODAL";
export const CLOSE_LOGIN_MODAL = "CLOSE_LOGIN_MODAL";
export const  OPEN_PUBLISH_MODAL = " OPEN_PUBLISH_MODAL";
export const CLOSE_PUBLISH_MODAL = "CLOSE_PUBLISH_MODAL";
export const OPEN_CREATOR_MODAL ="OPEN_CREATOR_MODAL";
export const CLOSE_CREATOR_MODAL = "CLOSE_CREATOR_MODAL";




//actions creator functions 

export const OpenLoginModal = () => {
    return {
        //todo
        type: OPEN_LOGIN_MODAL,
        payload: {
            loginModalOpen : true,
        } 
    }
}


export const closeLoginModal = () => {
    return {
        //todo
        type: CLOSE_LOGIN_MODAL,
        payload: {
            loginModalOpen : false,
        } 
    }
}

export const OpenPublishModal = () => {
    return {
        //todo
        type: OPEN_PUBLISH_MODAL,
        payload: {
            publishModalOpen : true,
        } 
    }
}

export const closePublishModal = () => {
    return {
        //todo
        type: CLOSE_PUBLISH_MODAL,
        payload: {
            publishModalOpen : false,
        } 
    }
}

export const openCreatorhModal = () => {
    return {
        //todo
        type: OPEN_CREATOR_MODAL,
        payload: {
            creatorModalOpen : true,
        } 
    }
}

export const closeCreatorModal = () => {
    return {
        //todo
        type: CLOSE_CREATOR_MODAL,
        payload: {
            creatorModalOpen : false,
        } 
    }
}