import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {getUserProfileImg, getUserEmail, getUserNickname, getUserId,

} from '../../actions/userAction';

const InvitePage = () => {

    const userState = useSelector((state => state.userReducer));
    const dispatch = useDispatch();

    

    return(
        <Container>
            <Blank />
            <Content>
                <TxtBox>
                    <Title>Invite Other Movers</Title>
                    <LeftNum>
                        <div></div>
                        <div>3/5 Invitation left!</div>
                    </LeftNum>
                    <InviteDate>You are invited by Lillian On Mar 16, 2022</InviteDate>
                </TxtBox>
                <CardBox>
                    <CardActive>
                        <img src="../../../images/mail_unUsed.png" alt=""></img>
                        <div>Invitation Available!</div>
                        <div>Copy Link</div>
                    </CardActive>
                    <CardActive>
                        <img src="../../../images/mail_unUsed.png" alt=""></img>
                        <div>Invitation Available!</div>
                        <div>Copy Link</div>
                    </CardActive>
                    <CardActive>
                        <img src="../../../images/mail_unUsed.png" alt=""></img>
                        <div>Invitation Available!</div>
                        <div>Copy Link</div>
                    </CardActive>
                    <CardActive>
                        <img src="../../../images/mail_unUsed.png" alt=""></img>
                        <div>Invitation Available!</div>
                        <div>Copy Link</div>
                    </CardActive>
                    <CardNone>
                        <img src="../../../images/mail_Used.png" alt=""></img>
                        <div>
                            <span>Invited Jaemin K.</span>
                            <span>Accepted on Jan 11, 2022</span>
                        </div>
                        <div>USED</div>
                    </CardNone>
                </CardBox>
            </Content>
            <AlertBox>
                <Alert>Link copied to the clipboard!</Alert>
            </AlertBox>
        </Container>
    )
}

export default InvitePage;

const Container =  styled.div`
    width: 100vw;
    height: auto;
    min-height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color:white;
    overflow: hidden;  //슬라이더 때문에 스크롤 발생함 
`;

const Blank = styled.div`
    width: 616px;
`;

const Content = styled.div`
    width: 497px;
    height:auto;
`;

const AlertBox = styled.div`
    width: 616px;
    height: 730px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

`;


const TxtBox = styled.div`
    width: 497px;
    height: 164px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    width: 298px; 
    height: 44px;
    font-size:32px;
    margin-bottom: 36px;

`;
const LeftNum = styled.div`
    width: 188px;
    height: 48px;
    background-color: #2F313E;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    &>div:nth-child(1) {
        width: 188px;
        height: 48px;
        background-color: #2F313E;
        position: absolute;
    }
    &>div:nth-child(2) {
        position: absolute; 
    }
`;


const InviteDate = styled.div`
    width:270px; 
    height:24px;
    color:#90A0B7;
    font-size: 14px;
`;


const CardBox = styled.div`
    width : 497px;
    height: 544px;
`;

const CardActive = styled.div`
    width:497px;
    height: 96px;
    background-color: #24D982;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 16px;
    &>img {
        width: 60px;
        height:48px;
    }
    &>div:nth-child(2) {
        width: 190px;
        height: 48px;
        line-height: 48px;
        color:#16171C;
        margin-left: -30px;
        font-size: 20px;
        font-weight:bold;
        
    }
    &>div:nth-child(3) {
        width: 121px;
        height:48px;
        background-color: #16171C;
        font-size: 18px;
        color: white; 
        opacity: 30%;
        text-align:center;
        line-height: 48px;
    }
`;

const CardNone = styled(CardActive)`
    background-color: #23242B;
    &>div:nth-child(2) {
        width: 190px;
        height: 80px;
        line-height: 48px;
        color:#90A0B7;
        margin-left: -30px;
        font-size: 20px;
        font-weight:bold;
        display: flex;
        flex-direction: column;

        &>span:nth-child(1) {
            display: block;
            width: 100%;
            height: 50%;
            line-height: 50px;

        }
        &>span:nth-child(2) {
            display: block;
            width: 100%;
            height: 50%;
            font-size: 14px;
            font-weight: 100;
            line-height: 20px;
        }
    }
    &>div:nth-child(3) {
        width: 109px;
        height:48px;
        background-color: none;
        border:1px solid #717F92;
        font-size: 18px;
        color: white; 
        opacity: 30%;
        text-align:center;
        line-height: 48px;
    }
`;


const Alert = styled.div`
    width: 312px;
    height:52px;
    border-radius: 8px;
    padding: 16px 0px 14px 60px;
    color: white;
    border: 1px solid #24D982;
`;