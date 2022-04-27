import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {closeLoginModal } from '../../actions/modalAction';

const ExploreModal = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClickExplore = () => {
        dispatch(closeLoginModal())
    }
    const state = useSelector(state => state.userReducer)
    //이미지는 url제대로 가져오면 다시 수정하기 
    return (
       <Container>
           <ContentBox>
               <ProfileBox>
                   <img src="../../images/lillian.png" alt=""></img>
               </ProfileBox>
               <LTextBox>You’re all set up, {state.nickname}</LTextBox>
               <STextBox>
               Start sharing your choreohraphies to the Moverse,<br></br>
               and get inspired by other movers!
               </STextBox>
                <BtnBox onClick={handleClickExplore}>
                    <Btn>Start Exploring</Btn>
                </BtnBox>
           </ContentBox>
       </Container>
           
    );
}

export default ExploreModal;



const Container = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 20;
    animation: fadein 1s;
    -moz-animation: fadein 1s;
    -webkit-animation: fadein 1s;
    -o-animation: fadein 1s;
`;

const ContentBox = styled.div`
 position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 495px;
    height: 456px;
    background-color: #23242B;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProfileBox = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    &>img {
        width: 80px;
        height:80px;
    }
`;

const LTextBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-top: 32px;
    text-align: center;
    font-size: 32px;
`;

const STextBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #90A0B7;
    margin-top: 24px;
    text-align: center;
    line-height:28px;
    font-size: 18px;
`;

const BtnBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;  
    margin-top: 56px;
    font-size: 32px;
`;

const Btn = styled.div`
    width: 380px;
    height:52px;
    background-color: #24D982;
    color: #16171C;
    font-size:18px;
    font-weight: bold;
    text-align: center;
    line-height: 52px;
    cursor: pointer;
 
`;