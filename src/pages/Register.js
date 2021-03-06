import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import RegisterInfo from "../components/Register/RegisterInfo";
import RegisterVideo from "../components/Register/RegisterVideo";
import VideoIframe from "../components/Register/VideoIframe";
import axios from "axios";
import { 

    extractVideoId, 
    viewVideoThumnail, 
    DeleteVideoThumnail, 
    getGenres,
    addRegisterForm,
    deleteRegisterForm,
    copyRegisterForm,

    addRegisterFormPost,
    deleteRegisterFormPost,
    copyRegisterFormPost,
  
    
    setFormValues,
    extractVideoUrl,
    fetchCreatorList,  //creator리스트
    registerNewDance,
    getThumnailUrl,


} from "../actions/registerAction";
import {
    OpenLoginModal, OpenPublishModal,closePublishModal
} from '../actions/modalAction';
import PublishModal from "../components/Modal/PublishModal";



const Register = () => {

    const state = useSelector(state => state.registerReducer);
    const modalState = useSelector(state => state.modalReducer);
    const dispatch = useDispatch();
    //업로드 버튼 클릭






    const handleClickUpload = (index,event) => {


        const values = [...state.forms];
       
        const endpoint = 'https://www.youtube.com/oembed';
        fetch(`${endpoint}?url=${values[index].video_url}`, 
        { 
            method: 'get',
            cache: 'no-cache', 
            mode: 'cors',
        }
        )
        .then((response) => { return response.json();})
        .then((res) => {
            if(res) {
                const extractId = [...state.forms];
                extractId[index].videoId = extractId[index].video_url.split("be/")[1]
                dispatch(extractVideoId(extractId)); 

                const view = [...state.forms];
                view[index].viewVideo = true
                dispatch(viewVideoThumnail(view));

                const thum = [...state.forms];
                thum[index].thumbnail_url = res.thumbnail_url;
                dispatch(getThumnailUrl(thum));

                const postThum = [...state.postForms];
                postThum[index].thumbnail_url = res.thumbnail_url;
                dispatch(getThumnailUrl(postThum));
            }
        })
        .catch((err) => console.log("ajax error -> ", err)) ;
            
    }

    //publish버튼 클릭시, 서버로 url과 + 유뷰브에서 받은 정보 + 작성한 정보 post
    const handleClickPublish = () => {
        dispatch(OpenPublishModal());
        console.log(state.postForms,"포스트폼 잘 들어가나?");
        console.log(state.forms,"일반폼")
    }
   

//비디오 삭제
    const handleClickVideoDelete = (index) => {
        const deleteObj = state.forms;
        deleteObj[index].viewVideo = false;
        dispatch(DeleteVideoThumnail(deleteObj));
        const values = [...state.forms];
        values[index].video_url = "" ;
        dispatch(extractVideoUrl(values));  
    }

//폼 추가
    const clickAddRegister = () => {
        dispatch(addRegisterForm());
        dispatch(addRegisterFormPost());
    }


//해당 폼 삭제
    const clickDeleteRegister = (idx) => {
        const values = [...state.forms];
        values.splice(idx,1);
        dispatch(deleteRegisterForm(values));
        const postVal = [...state.postForms];
        postVal.splice(idx,1);
        dispatch(deleteRegisterFormPost(postVal));
    }


//해당 폼 복사 
    const clickCopyRegister = (idx) => {
        const val = [...state.forms];
        dispatch(copyRegisterForm(val[idx]));
        const postVal = [...state.postForms];
        dispatch(copyRegisterFormPost(postVal[idx]));
    }



    const [isBubble, setIsBubble] = useState(false);

    return (
       <Container>
        {state.forms &&  state.forms.map((component,i) => { 
            return(
                    <ContentBox key={i}>
                    <InputBox>
                        <RegisterBox>
                            {state.forms[i].viewVideo? <>
                            <CloseImg src="../../images/closeBtn.png" alt=""
                            onClick={() => handleClickVideoDelete(i)}
                            ></CloseImg>
                            <VideoIframe
                            registerState={component}
                            idx={i}
                            ></VideoIframe></>
                            :
                            <RegisterVideo 
                            registerState={component}
                            idx={i}
                            handleClickUpload={handleClickUpload}></RegisterVideo>
                            }
                            <RegisterInfo 
                                registerState={component}
                                idx={i}
                            ></RegisterInfo>
                        </RegisterBox>
                    </InputBox>
                    <ControlBox>
                        <div>
                            <CopyBtn  onClick={()=> clickCopyRegister(i)}>
                                <img src="../../images/copy.png" alt=""></img>
                                <div>Copy</div>
                            </CopyBtn>
                            <DeleteBtn 
                                onClick={()=> clickDeleteRegister(i)}
                            >
                                <img  src="../../images/trash.png" alt=""></img>
                                <div>Delete</div>
                            </DeleteBtn>
                        </div>
                    </ControlBox>
                </ContentBox>
            )
        })}

            <PublishBtnActive>
                    <div onClick={()=>handleClickPublish()}>
                        <img src="../../images/publish.png" alt=""></img>
                    </div>
                    <div>Publish</div>
            </PublishBtnActive>


            <BtnBox>
                    <Btn onClick={clickAddRegister}>
                        <img src="../../images/add.png" alt=""></img>
                        <div>Upload More Moves</div>
                    </Btn>
                    <Bubble src="../../images/onlyOne.png" alt="" />
                </BtnBox>      
                
                   
           
            {modalState.publishModalOpen ? <PublishModal/> : null}
       </Container>
    );
}

export default Register;


const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
`;

const ContentBox = styled.div`
    width: 1327px;
    height: auto; 
    min-height:700px;
    margin-top: 98px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
`;

const InputBox = styled.div`
    width: 1239px;
    height: auto; 
    min-height:700px;
`;
const RegisterBox = styled.div`
    display: flex;  
    position: relative;
`;

const CloseImg = styled.img`
    width:24px;
    height: 24px;
    position: absolute;
    left: -12px;
    top: -12px;
    cursor: pointer;
`;


const ControlBox = styled.div`
    width: 64px;
    height: auto; 
    min-height: 680px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
`;

const CopyBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 76px;
    &>img {
        cursor: pointer;
    }
    &>div {
        width: 100%;
        height:24px; 
        color:#90A0B7;
        font-size: 14px;
        margin-top: 4px;
        text-align: center;
        
    }
`;
const DeleteBtn = styled(CopyBtn)`
    margin-top: 20px;
`;

const PublishBtn = styled.div`
    width: 1327px;
    height: 96px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    &>div:nth-child(1) {  //버튼 원 
        width: 64px;
        height: 64px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #48506C;
        cursor: pointer;
        &>img {
            width: 32px;
            height:32px;
        }
    }
    &>div:nth-child(2) {
        width: 100%; 
        height:24px;
        font-size: 16px;
        color:#90A0B7;
        margin-top: 8px;
   
    }
`; 

const PublishBtnActive = styled(PublishBtn)`
    width: 90%; 
    &>div:nth-child(1) {
        background-color: #24D982;
        cursor: pointer;
    }
    &>div:nth-child(2) {
        width: 90%; 
        height:24px;
        font-size: 16px;
        color:#24D982;
        margin-top: 8px;
        text-align: right;
        margin-right: 5px;
    }
`; 


const BtnBox = styled.div`
    width: 100%;
    height: 152px;
    display: flex;
    align-items: flex-end;
    justify-content: center;

`;
const Btn = styled.div`
    width: 254px;
    height:52px;
    border: 1px solid #BDCBDD;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    margin-bottom: 32px;

    &>img {
        width:28px;
        height:28px;
        margin-right: 16px;
    }

`;

const Bubble = styled.img`
    width: 321px;
    height:52px;
    margin-left: 12px; 
    margin-bottom: 32px;
    display: none;


    ${Btn}:hover & {
        display: block;
      transform : scale(1.2,1.2)
    }

`;









