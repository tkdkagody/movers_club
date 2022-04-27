import React, { useState } from "react";
import styled from "styled-components";
import SettingModal from "../Modal/SettingModal";


const SetPage = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleClickDelete = () => {
        setOpenModal(true)
    }

    return (
       <Container>
           <ContentBox>
               <Title>Settings</Title>
               <Version>Version 1.0</Version>
               <AccountBox>
                   <AccountTxt>Account</AccountTxt>
                   <AccountBtn onClick={handleClickDelete}>Delete My Account</AccountBtn>
               </AccountBox>
               <ContactBox>
                   <ContactTxt>Contact Us</ContactTxt>
                   <ContactInfo>
                       <div>choreofabrica@gmail.com</div>
                       <div>Tell us any feedback or bugs.</div>
                   </ContactInfo>
               </ContactBox>
           </ContentBox>
           {openModal ?  <SettingModal setOpenModal={setOpenModal}/> : null}
       </Container>
    )
}

export default SetPage; 


const Container = styled.div`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color:white;
    overflow: hidden;  //슬라이더 때문에 스크롤 발생함 
`;

const ContentBox = styled.div`
    width:530px;
    height: 330px;
    margin-top: 144px;
`;

const Title = styled.div`
    width: 100%;
    height: 44px;
    font-size: 32px;
    color: white; 
    margin-bottom: 12px;
    text-align: center; 
`;

const Version = styled.div`
    width: 100%;
    height: 24px;
    margin-bottom: 54px;
    color: #48506C;
    font-size: 16px;
    text-align: center; 
`;
const AccountBox = styled.div`
    width:80%;
    height: 52px;
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    font-size: 1.6rem;
 

`;

const AccountTxt = styled.div`
    width: 89px;
    height:24px;
    color: white; 
    text-align: right;
    line-height: 24px;
    margin-right: 32px;

`;
const AccountBtn = styled.div`
    width: 264px;
    height: 52px;
    border: 1px solid #FF8182;
    color: #FF8182;
    text-align: center;
    line-height: 52px;
    cursor: pointer;
`;

const ContactBox = styled.div`
    width:80%;
    height: 108px;
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
`;
const ContactTxt = styled.div`
    width: 89px;
    height: 24px;
    color: white; 
    margin-right: 32px;
`;

const ContactInfo = styled.div`
    width: 264px;
    height:108px;
    background-color: #23242B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &>div:nth-child(1){
        color: #BDCBDD;
        font-size: 16px;
        width: 184px;
        height: 28px;
        text-align: center;
    }
    &>div:nth-child(2){
        color: #717F92;
        font-size: 14px;
        width: 184px;
        height: 24px;
        text-align: center;
        font-size: 1.4rem;
    }
`;