import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";




const SettingModal = ({setOpenModal}) => {

    const handleClickDeleteAccount = () => {
        //계정삭제 요청 
        //
    }


    return (
        <Container>
            <ModalWrap>
                <TextBox>
                    <Title>Delete account?</Title>
                    <Info>Once you delete your account, all the videos you posted on Moverse will be deleted. This action can’t be undone.</Info>
                </TextBox>
                <BtnBox>
                    <Cancle onClick={() =>setOpenModal(false)}>Cancel</Cancle>
                    <Yes onClick={handleClickDeleteAccount}>Yes, delete</Yes>
                </BtnBox>
            </ModalWrap>
        </Container>
    );
    
}

export default SettingModal;


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
    height: 293px;
    z-index: 31;
    border-radius: 8px;
`;

const TextBox = styled.div`
    width: 380px;
    height: 133px;
    margin-bottom: 20px;
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
    height: 84px;
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
    background-color: #FF8182;
    color: #16171C;
    font-size: 18px;
    text-align: center;
    line-height: 48px;
    font-weight: bold;
    cursor: pointer;
`;