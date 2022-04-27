export const MODIFY_MY_NICKNAME = "GET_MY_NICKNAME";
export const MODIFY_MY_EMAIL = "MODIFY_MY_EMIAL";
export const MODIFY_PROFILE_IMG = "MODIFY_PROFILE_IMG";
export const SET_NICK_ERRORMSG = "SET_NICK_ERRORMSG,";
export const SET_MAIL_ERRORMSG = "SET_MAIL_ERRORMSG";



export const modifyNickname = (nick) => {
    return {
        type: MODIFY_MY_NICKNAME,
        payload: nick.nickname
    }
}


export const modifyEmail = (email) => {
    return {
        type: MODIFY_MY_EMAIL,
        payload: email.email
    }
}

export const modifyProfileImg = (img) => {
    return {
        type: MODIFY_PROFILE_IMG,
        payload: img
    }
}

export const setNickErrorMsg = (msg) => {
    return {
        type: SET_NICK_ERRORMSG,
        payload: msg
    }
}



export const setMailErrorMsg = (msg) => {
    return {
        type: SET_MAIL_ERRORMSG,
        payload: msg
    }
}
