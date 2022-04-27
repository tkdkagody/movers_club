
export const modalInitialState = {
    loginModalOpen : false ,
    publishModalOpen:false,
    creatorModalOpen:false,

}

export const bannerInitialState = {
    bannerItem : [
        'https://velog.velcdn.com/images/beablessing/post/32bb1526-1538-4a61-929d-51c6733814b6/image.png',
        'https://velog.velcdn.com/images/beablessing/post/849e2e8c-dcfa-4e6e-a1c5-229f417c4736/image.png',
        'https://velog.velcdn.com/images/beablessing/post/7424044e-5e3a-47ed-8161-caf8ab8c1405/image.png',
],
}

export const userInitialState = {
    isLogin: false,
    profileImg : "",
    email : "",
    nickname : "",
    userid : "",
    userDate :"",
    getSignUpToken : "",  //회원가입 토큰 
    invitation: ""
}


export const registerinitialState = {
    forms: [{
            videoUrl : '',
            videoId : '',
            viewVideo : false,
            agreechecked : false,  
            danceTitle : '', 
            danceStory : '',
            genres : new Array(0),
            creators : [],   //이 배열을 주로 사용하게 될듯 !!(이름, 이미지, 롤 포함함)
            searchInputValue : '',  //크리에이터 이름
            searchImg:'', //크리에이터 이미지 
            roleValue: "Main Director", //크리에이터 롤 
            tagList:[],
            tagItem: "",
        }],

    creatorList : [],

        
}



export const videoInitialState = {
    videoData : [],
    selectedVideo: null, 
    paramsData : {},
    otherVideo : [],
}


//search
export const searchInitialState = {
    searchValue:'',
    filteredVideo:[],
}



export const myinfoInitialState = {
    nickname: '',
    email : '',
    profile:"https://velog.velcdn.com/images/beablessing/post/81a54e6d-5df0-4409-9930-2dd704689a71/image.png",
    nickErrorMsg : '',
    emailErrorMsg :'',
}