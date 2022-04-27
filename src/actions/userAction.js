import axios from 'axios';
import { useDispatch } from 'react-redux';
import store from '../store/store';






//action types 
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_USER_NICKNAME ="GET_USER_NICKNAME";
export const GET_USER_PROFILE_IMG = "GET_USER_PROFILE_IMG";
export const GET_USER_EMAIL = "GET_USER_EMAIL";
export const GET_USER_ID = "GET_USER_ID";
export const GET_USER_DATE ="GET_USER_DATE";
export const GET_USER_INVITATION = "GET_USER_INVITATION";


export const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS";
export const FETCH_TOKEN_FAILURE = "FETCH_TOKEN_FAILURE";
export const FETCH_TOKEN = "FETCH_TOKEN";  //axios
export const FETCH_LOGIN = "FETCH_LOGIN" //axios
export const FETCH_TOKEN_REQUEST ="FETCH_TOKEN_REQUEST"; 




//회원가입 request!!!!
export const fetchToken = (token, email, name, profile) => dispatch => {
    //dispatch(fetchtTokenSuccess(token, email, name, profile))
    console.log(profile,"ss")
    axios
    .post(`https://api.moverse.club/v1/auth`
    ,{
        nickname: name, 
        avatar_url: profile,
        access_token:token,
        email:email, 
    })
    .then(res=> {
       console.log(res.data,"회원가입시 받는 토큰");
        if(res.data.message === "success"){
            dispatch(fetchtTokenSuccess(res.data.data.token));  //user에 가입토큰 심어주고 필요 ?
           
            window.localStorage.setItem("getSignUpToken", res.data.data.token);
            //다시로그인 요청 s
            dispatch(fetchLogin(res.data.data.token));
        }
        
    })
    .catch(err => {
        console.log(err);
    });
}




//로그인 request!!!!
export const fetchLogin =  (token) => dispatch => {
    axios
    .get(`https://api.moverse.club/v1/auth`,{
        headers: {
            Authorization : `Bearer ${token}`
        }
    })  //profileImg
    .then((res)=> {
        console.log(res,"로그인 성공")
            // islogin = true
            dispatch(loginSuccess()); 
            //getUserInfo
            dispatch(getUserNickname(res.data.data.user.nickname));
            dispatch(getUserProfileImg(res.data.data.user.avatar_url));   //=> 이미지 잘 넣어달라고 하기 
            dispatch(getUserEmail(res.data.data.user.email));
            dispatch(getUserId(res.data.data.user.id))
            dispatch(getUserDate(res.data.data.user.created_at))
    })
    .catch(err => console.log(err))
}


//초대장 get !! 
export const fetchInvitation = (token) => dispatch => {
    axios
    .get(`https://api.moverse.club/v1/users/invites`,{
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
    .then((res)=> {
        //console.log(res.data,"초대장");
    })
    .catch(err => console.log(err,"초대장Err"))
}


//회원가입 토큰 받아옴
export const fetchtTokenSuccess = (token) => {
    return {
        type:FETCH_TOKEN_SUCCESS,
        payload: token
    }
}


export const loginSuccess = () => {
    return {
        type:LOGIN_SUCCESS,
        payload: true,
    }
}
export const logoutSuccess = () => {
    return {
        type:LOGOUT_SUCCESS,
        payload: false,
    }
}

export const getUserNickname = (info) => {
    return {
        type: GET_USER_NICKNAME,
        payload : info,
    }
}

export const getUserProfileImg = (info) => {
    return {
        type: GET_USER_PROFILE_IMG,
        payload : info,
    }
}

export const getUserEmail = (info) => {
    return {
        type: GET_USER_EMAIL,
        payload : info,
    }
}

export const getUserId = (info) => {
    return {
        type: GET_USER_ID,
        payload : info,
    }
}


export const getUserDate = (info) => {
    return {
        type: GET_USER_DATE,
        payload : info,
    }
}


export const getUserInvitation = (info) => {
    return {
        type: GET_USER_INVITATION,
        payload : info,
    }
}


//필요 없을듯 
export const fetchtTokenfailure = ( err) => {
    return {
        type:FETCH_TOKEN_FAILURE,
        payload: err,
    }
  
}




// store.subscribe(()=> {
//     console.log(store.getState())
// })
// store.dispatch(fetchToken())