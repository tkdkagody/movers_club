import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
    OpenLoginModal, OpenPublishModal,closePublishModal
} from '../../actions/modalAction';



const PublishModal = () => {


    const modalState = useSelector(state => state.modalReducer);
    const dispatch = useDispatch();

    const handleClickCancle = () => {
        dispatch(closePublishModal());
    }
    
    const handleClickPublish = () => {
        //publish 하면 여기서 axios register
        //잘 보내지면 아마 main으로 가던지 재렌더 하던지 
    }


    return (
        <Container>
            <ModalWrap>
                <TextBox>
                    <Title>Publish the video?</Title>
                    <Info>You'll be able to share your video on public</Info>
                </TextBox>
                <BtnBox>
                    <Cancle onClick={handleClickCancle}>Cancel</Cancle>
                    <Yes onClick={handleClickPublish}>Yes, publish</Yes>
                </BtnBox>
            </ModalWrap>
        </Container>
    );
    
}

export default PublishModal;


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

const ModalWrap = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #23242B;
    /* padding: 6.5rem 1.5rem; */
    padding: 40px 28px 32px 28px;
    width: 436px;
    height: 237px;
    z-index: 31;
    border-radius: 8px;
`;

const TextBox = styled.div`
    width: 380px;
    height: 77px;
    margin-bottom: 40px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`; 

const Title = styled.div`
     width: 380px;
    height: 29px;
    margin-bottom: 20px;
    font-size: 24px;
    color: white; 
    font-weight: bold;
    text-align: center;
`;
const Info = styled.div`
     width: 380px; 
    height: 28px;
    line-height: 28px;
    color: #BDCBDD;
    font-size: 16px;
    text-align: center;
`;

const BtnBox = styled.div`
    width: 380px;
    height: 48px;
    display: flex;
    justify-content: space-between;
`;

const Cancle = styled.div`
    width: 184px;
    height:48px;
    border:1px solid white;
    color: white; 
    font-size: 18px;
    color: white; 
    text-align: center;
    line-height: 48px;
    cursor: pointer;
`;

const Yes = styled.div`
    width: 184px;
    height: 48px;
    background-color:#24D982;
    color: #16171C;
    font-size: 18px;
    text-align: center;
    line-height: 48px;
    font-weight: bold;
    cursor: pointer;
`;