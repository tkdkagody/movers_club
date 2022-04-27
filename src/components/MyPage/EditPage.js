import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AWS from "aws-sdk";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { 
    modifyNickname, 
    modifyEmail, 
    modifyProfileImg,
    setNickErrorMsg,
    setMailErrorMsg,
} from "../../actions/myinfoAction";

import {getUserProfileImg, getUserEmail, getUserNickname, getUserId } from '../../actions/userAction';

const EditPage = () => {

    const navigate = useNavigate();

    const myinfoState = useSelector(state => state.myinfoReducer);
    const userState = useSelector((state => state.userReducer));
    const dispatch = useDispatch();
    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    // 이미지 핸들링
    AWS.config.update({
        region : 'ap-northeast-2', 
        credentials : new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'ap-northeast-2:fbd74e2c-536c-46e4-9a91-59eb7a9e1220',
        }),
    });   
   
      const imgHandle = (event) => {
        const imageFile = event.target.files[0];
        if (!imageFile) {
          return dispatch(getUserProfileImg(null))
        }
    
        const upload = new AWS.S3.ManagedUpload({
          params: {
            Bucket: "cdn.moverse.club",
            Key: imageFile.name, //업로드할 파일명
            Body: imageFile,  //업로드할 파일 객체
          },
        });
    
        const promise = upload.promise();
        promise.then(
          function (data) { 
            dispatch(getUserProfileImg(data.Location))
          },
          function (err) {
            console.log(err);
          }
        );
      };


      const handleChangeNickname = (event) => {
        dispatch(getUserNickname(event.target.value));
      }
      const handleChangeEmail = (event) => {
        dispatch(getUserEmail(event.target.value));
      }


      //save btn => http
      const handleClickSave = () => {
          const nick = userState.nickname;
          const email = userState.email;
          const profile = userState.profileImg ==="user/avatar/u60wwvtz84n_1650680611625.com/a/AATXAJzxTa2D7kj24cpNf94-N0OHFIbE_3NRT4iLqRRY=s96-c"
            ? "https://velog.velcdn.com/images/beablessing/post/7f30c720-da7c-4a81-9b38-0c84f527a43e/image.png"
            : userState.profileImg;
         
        if(nick.length >= 10){
            dispatch(setNickErrorMsg("닉네임을 확인해주세요"));
        }else if(nick.length === 0){
            dispatch(setNickErrorMsg("닉네임을 입력해주세요"));
        }else {
            dispatch(setNickErrorMsg(""));
        }
          
        if(!regEmail.test(email)) {
            dispatch(setMailErrorMsg("이메일 형식을 확인해주세요"));
        }else if(email.length === 0){
            dispatch(setNickErrorMsg("이메일을 입력해주세요"));
        }else{
            dispatch(setMailErrorMsg(""));
        }

        if(!userState.nickErrorMsg && !userState.emailErrorMsg){
            //axios.post ()
        }
      }

      



    return (
       <Container>
            <ContentBox>
                <InfoBox>
                    <Title>Edit Profile</Title>
                    <Joined>Joined with Google</Joined>
                    <ImgBox>
                        <img src={userState.profileImg} alt="profile"/>
                    </ImgBox>
                    <ControlBtns>
                        <DeleteBtn onClick={()=> 
                            dispatch(getUserProfileImg("https://velog.velcdn.com/images/beablessing/post/7f30c720-da7c-4a81-9b38-0c84f527a43e/image.png"))
                            }>
                            Delete Photo</DeleteBtn>
                        <ChangeImgBtn>
                            <span>Change Photo</span>
                            <input
                                type="file"
                                id="imgFile"
                                accept="image/*"
                                onChange={imgHandle}
                                name="profile"
                            />
                        </ChangeImgBtn>
                    </ControlBtns>
                </InfoBox>


                <InputBox>
                    <NickName>
                        <div>
                            <span>Nickname</span>
                            <span>{`${userState.nickname.length}/20`}</span>
                        </div>
                        <NickNameInput
                            err={myinfoState.nickErrorMsg}
                            value={userState.nickname}
                            maxLength="20"
                            onChange={(e) => handleChangeNickname(e)}
                        ></NickNameInput>
                        {myinfoState.nickErrorMsg ? <ErrBox>{myinfoState.nickErrorMsg}</ErrBox>: null}
                    </NickName>
                    <Email>
                        <div>
                            Email
                        </div>
                        <EmailInput
                            err={myinfoState.emailErrorMsg}
                            value={userState.email}
                            onChange={(e) => handleChangeEmail(e)}
                        ></EmailInput>
                        {myinfoState.emailErrorMsg ? <ErrBox>{myinfoState.emailErrorMsg}</ErrBox>: null}
                    </Email>
                    <SaveBtn onClick={handleClickSave}>Save</SaveBtn>
                    <CancleBox>
                        <CancleBtn onClick={() => navigate('/mypage', {
                                                        state: 
                                                        {mymoves: "My Moves"},
                                                        
                        })}>Cancel Editing</CancleBtn>
                    </CancleBox>
                </InputBox>

            </ContentBox>
       </Container>
    )
}

export default EditPage; 


const Container = styled.div`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:white;
    overflow: hidden;  //슬라이더 때문에 스크롤 발생함 
`;

const ContentBox = styled.div`
    width: 380px;
    height:633px;
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

const InfoBox = styled.div`
    width: 290px;
    height: auto;
    min-height: 248px;
    margin-bottom: 51px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
`; 

const Title = styled.div`
    width:164px;
    height:44px;
    margin-bottom:8px; 
    font-size: 32px; 
    color: white;
    text-align: center;
    line-height: 44px;
`;

const Joined = styled.div`
    //width: 120px; 
    height: 24px; 
    margin-bottom:21px; 
    color: #90A0B7;
    font-size: 14px;
`;


const ImgBox = styled.div`
    width: 104px;
    height: 104px;
    margin-bottom:20px; 
    border-radius: 50%;
    &>img{
        width: 100%;
        height:100%;
        border-radius: 50%;
    }
`;

const ControlBtns = styled.div`
    width: 290px;
    height:40px;
    display: flex; 
    justify-content: center;
`;

const DeleteBtn = styled.label`
    border:1px solid #717F92 ;
    color: #717F92;
    font-size:16px;
    width: 138px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
`;

const ChangeImgBtn = styled.label`
    display: block;
    font-size:16px;
    width: 138px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border:1px solid #24D982;
    color: #24D982;
    margin-left: 8px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    &>input {
        position: absolute;
        left: 10px;
        cursor: pointer;
        width: 0; 
        height: 0;
    }
`;


const InputBox = styled.div`
    width: 380px;
    height: 334p
`;

const NickName = styled.div`
    margin-bottom:20px;
    &>div {
        
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        &>span:nth-child(1) {
            
            color:#717F92; 
            width: 72px;
            height: 24px;
            text-align: center;
            line-height: 24px;
            font-size:16px;
        }
        &>span:nth-child(2) {
            color:#717F92; 
            width: 36px;
            height: 24px;
            line-height: 24px;
            font-size:16px;
        }
    }

`;

const NickNameInput = styled.input`
        background-color: #2F313E;
        border: ${props => props.err ? "1px solid #FF8182" : "none"};
        color: white;
        font-size: 18px; 
        height: 52px;
        width: 100%;
        padding: 1rem;
        &>div {
            color:#717F92; 
            width: 71px;
            height: 24px;
        }
`;

const Email = styled(NickName)`
    margin-bottom: 40px;
    &>div { 
        display: block; 
        color:#717F92; 
            width: 72px;
            height: 24px;
            text-align: left;
            line-height: 24px;
            font-size:16px;
    }
`;

const EmailInput = styled(NickNameInput)`
    background-color: #2F313E;
        border: ${props => props.err ? "1px solid #FF8182" : "none"};
        color: white;
        font-size: 18px; 
        height: 52px;
        width: 100%;
        padding: 1rem;
        &>div {
            color:#717F92; 
            width: 71px;
            height: 24px;
        }
`;

const ErrBox = styled.span`
        display: block;
        font-size: 16px;
        line-height: 28px;
        height: 28px; 
        color:#FF8182;
        margin-top:3px;
`;

const SaveBtn = styled.div`
    width: 100%;
    height: 52px;
    background-color: #24D982;
    color: #16171C ; 
    font-size: 18px;
    font-weight: bold;
   text-align: center;
   cursor: pointer;
   line-height: 52px;
   margin-bottom: 32px;

`;
const CancleBox = styled.div`
    width: 100%;
    height:22px;
    display: flex;
    justify-content: center;
`;
const CancleBtn = styled.div`
    font-size: 18px;
    color: #90A0B7;
    width: 120px;
    height: 22px;
    border-bottom: 1px solid #90A0B7;
    cursor:pointer;
`;