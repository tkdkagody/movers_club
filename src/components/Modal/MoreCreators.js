import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
    OpenLoginModal, OpenPublishModal,closePublishModal,
    closeCreatorModal,
} from '../../actions/modalAction';



const MoreCreators =() => {


    const state = useSelector(state => state.modalReducer);
    const videoState = useSelector(state => state.getVideoInfoReducer);
    const copiedData = [...videoState.selectedVideo.selectedVideo.creator].splice(5); 

    const dispatch = useDispatch();

    const handleClickCancle = () => {
        dispatch(closeCreatorModal());
    }
    

    return (
        <Container>
            
               {copiedData.length <=2 ?
               <ModalWrap>
                    <TitleBox>Additional Creator({copiedData.length})</TitleBox>
                    <ConetentBox>
                    {copiedData.map((el,idx)=> {
                        return <Content key={el.id}>
                        <Profile src={el.imgUrl}/>
                        <UserInfo>
                            <div>{el.name}</div>
                            <div>{el.role}</div>
                        </UserInfo>
                    </Content>
                    })}
                    </ConetentBox>
                    <BtnBox onClick={handleClickCancle}>Close</BtnBox>
                </ModalWrap>

                    :
                <ModalWrapFour>
                    <TitleBox>Additional Creator({copiedData.length})</TitleBox>
                    <ConetentBoxFour>
                        {copiedData.map((el,idx)=> {
                            return <Content key={el.id}>
                            <Profile src={el.imgUrl}/>
                            <UserInfo>
                                <div>{el.name}</div>
                                <div>{el.role}</div>
                            </UserInfo>
                        </Content>
                        })}
                    </ConetentBoxFour>   
                    <BtnBox onClick={handleClickCancle}>Close</BtnBox>
                </ModalWrapFour>
            }
               
            
        </Container>
    );
    
}

export default MoreCreators;


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
    background-color: #2F313E;
    padding: 40px 28px 32px 28px;
    width: 436px;
    height:373px; 
    z-index: 41;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ModalWrapFour = styled(ModalWrap)`
    height:477px; 
`;

const TitleBox = styled.div`
    width: 255px;
    height: 29px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F8F8F8;
    font-size: 24px;
`; 

const ConetentBox = styled.div`
    margin-bottom: 32px;
    width: 360px; 
    min-height: 168px;
    height: auto; 
    background-color:#23242B; 
    border-radius: 16px;
    display: flex;
    flex-direction: column;
`;

const ConetentBoxFour = styled(ConetentBox)`
    height: 272px; 
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 6px;
        height: 46px;
    }
    &::-webkit-scrollbar-thumb { //스크롤 
        border-radius: 8px;
        background: #24D982;
    }
    &::-webkit-scrollbar-track {
        border-radius: 8px;
        background-color: #48506C;
    }

`;

const Content = styled.div`
    width: 332px; 
    height: 48px;
    display: flex;
    flex-direction: row; 
    align-items: center;
    margin : 24px 0 0 20px;
    &:last-child {
        margin-bottom: 24px;
    }
`;

const Profile = styled.img`
    width:48px;
    height:48px;
    border-radius: 50%;
    margin-right: 14px;
`;
const UserInfo = styled.div`
    width: 284px; 
    height:48px;
    display: flex;
    flex-direction: column;

    &>div:nth-child(1){
        height: 24px;
        line-height: 24px;
        color : #F8F8F8;
        font-size: 16px;
    }
    &>div:nth-child(2){
        height: 24px;
        line-height: 24px;
        color: #24D982;
        font-size: 13px;
    }
`;


const BtnBox = styled.div`
    width: 380px;
    height: 48px;
    background-color: #48506C;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    cursor: pointer; 

`;

