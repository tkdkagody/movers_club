import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyCollectionsList from "../components/MyPage/MyCollectionsList";
import MyMovesList from "../components/MyPage/MyMovesList";
import SearchVideoList from "../components/SearchVideoList";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { 
    fetchLogin, loginSuccess, logoutSuccess,
    getUserNickname,
    getUserProfileImg,
    getUserEmail,
    getUserId,
} from "../actions/userAction";
import  {videoInfoDummy}  from "../videoInfoDummy";
import VideoList from "../components/VideoList";
import MyVideoItem from "../components/MyVideoItem";



const Mypage = () => { 

    const [myMovesData, setMyMovesVData] = useState([]);
    const [myCollectionData, setMyCollectionData] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((state => state.userReducer));




    const [render, setRender] = useState(false);
    useEffect(()=> {
        //dummy데이터 대신 api req
        setMyMovesVData(videoInfoDummy);
        // setMyCollectionData(MyCollection);
        setTimeout(()=> {
            setRender(true);
        },200)
    },[]);


    const img = userState.profileImg ==="user/avatar/u60wwvtz84n_1650680611625.com/a/AATXAJzxTa2D7kj24cpNf94-N0OHFIbE_3NRT4iLqRRY=s96-c"
    ? "https://velog.velcdn.com/images/beablessing/post/7f30c720-da7c-4a81-9b38-0c84f527a43e/image.png"
    : userState.profileImg;

    const charlistNum = [0,1,2,3,4,5]



if(render){

    return (
        <Container>
            <InfoContainer>
                <InfoSubContainer>
                <ProfileBox src={"https://velog.velcdn.com/images/beablessing/post/7f30c720-da7c-4a81-9b38-0c84f527a43e/image.png"}></ProfileBox>
                <InfoBox>
                    <Name>Lillian</Name>
                    <Btns>
                        <InviteBox  onClick={()=> navigate('/invite')}>
                            <img src="../../images/mail.png" alt=""></img>
                            <div>Invite Others</div>
                        </InviteBox>
                        <EditBox onClick={()=> navigate("/edit_profile")}>Edit Profile</EditBox>
                    </Btns>
                </InfoBox>
                </InfoSubContainer>
            </InfoContainer>


            <CharContainer>
                <CharSubContainer>
                    <Title>
                        <div>{`My Characters (${"5"})`}</div>
                        <img src={"https://velog.velcdn.com/images/beablessing/post/7b76bf5f-a0a1-46ba-b86a-6e31b7927fad/image.png"}></img>
                    </Title>
                    <CharList>
                        {charlistNum.map((el,idx)=> {
                            return  <CharItem src={"https://velog.velcdn.com/images/beablessing/post/3d56b8cd-5436-4c32-bb88-f2d1f01b69fe/image.png"}></CharItem>
                        })}
                       
                        <CharAddBtn src={"https://velog.velcdn.com/images/beablessing/post/a5e67fa2-fad6-4b83-81ee-849235d181a8/image.png"}></CharAddBtn>
                    </CharList>
                </CharSubContainer>
            </CharContainer>



            <MovesContainer>
                <MovesSubContainer>
                    <MovesTitle>
                        <div>{`My Moves (${"10"})`}</div>
                        <ViewAllBtn>
                            view All
                            <img src="https://velog.velcdn.com/images/beablessing/post/fd93612a-58e9-461e-aa22-95f42b9d5f76/image.png" alt=""/>
                        </ViewAllBtn>
                    </MovesTitle>
                    <VideoListBox>
                        {videoInfoDummy.map((video,idx)=> {
                            return <MyVideoItem key={video.id} videoAllData={videoInfoDummy}/>
                        })}
                    </VideoListBox>
                </MovesSubContainer>
            </MovesContainer>



        </Container>
    )
}else {
    return ("로딩중입니다")
}
    
}

export default Mypage;


const Container = styled.div`
    width:100%;
    height: auto;
    min-height: 100vh;
    background-color: black;
    margin-top: 88px;
    color:white;
    overflow-x: hidden; //슬라이더 때문에 스크롤 발생함 
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;

`;

const InfoContainer = styled.div`
    width : 90%;
    height: 202px; 
    border-bottom: 1px solid #48506C;
    display: flex;
    align-items: center;
`;

const InfoSubContainer = styled.div`
    width: 413px;
    height: 92px; 
    display: flex; 
    flex-direction: row;
`;
const ProfileBox = styled.img`
    width: 88px;
    height: 88px;
    margin-right: 24px; 
    border-radius : 50%; 
    border: none;
    object-fit: cover;
`;

const InfoBox = styled.div`
    width : 300px;
    height: 92px;
`;


const Name = styled.div`
    width: 100%;
    height: 34px;
    margin-bottom: 8px;
    text-align: center;
    font-size: 28px;
    text-align: left ; 
`;
const Btns = styled.div`
    width: 100%;
    height: 48px;
    display:flex;
    flex-direction: row;
`;


const InviteBox = styled.div`
    width:175px;
    height:48px;
    border:1px solid #BDCBDD; 
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &> img {
       width: 21px;
       height: 19px;
    }
    &>div {
       color: #BDCBDD;
       font-size:1.6rem;
       margin-left: 10px;

    }
`;


const EditBox = styled.div`
    width: 124px;
    height: 48px;
    border:1px solid #BDCBDD; 
   
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #BDCBDD; 
    font-size:1.6rem;
`;

const CharContainer = styled(InfoContainer)`
margin-bottom: 40px;
border-bottom: none;
`;

const CharSubContainer = styled(InfoSubContainer)`
    /* width: 413px;
    height: 92px; 
    display: flex; 
    flex-direction: row; */
    width: 100%;
    height: auto; 
    flex-direction: column;
`;
const Title = styled.div`
    display : flex;
    align-items: center;
    margin-bottom: 32px;
    &>div {
        font-size: 20px; 
    }
    &>img { 
        width: 26px; 
        height: 26px;  
        margin-left: 18.67px;
    }
`;
const CharList = styled.div`
    width: 100%;
    height: 72px; 
    display: flex;
`; 

const CharItem = styled.img`
    width: 72px;
    height: 72px;
    border-radius: 50%; 
    margin-right: 24px;
    cursor: pointer;
    &:last-child {
        margin-right: 0px; 
    }
`;
const CharAddBtn = styled.img`
    width: 72px;
    height: 72px;
    border-radius: 50%; 
   cursor: pointer;

`;

const MovesContainer = styled(InfoContainer)`
    height: 324px;
    margin-bottom: 40px;
    border-bottom: none;
    
`;

const MovesSubContainer = styled(InfoSubContainer)`
    /* width: 413px;
    height: 92px; 
    display: flex; 
    flex-direction: row; */
    width: 100%;
    height: auto; 
    flex-direction: column;
`;

const VideoListBox = styled.div`
    width: 100%;
    height: 268px; 
    border:1px solid gold;
   


`;

const ViewAllBtn = styled.div`
    border-bottom : 1px solid #24D982; 
    width: 100px;
    height: 24px; 
    color: #24D982; 
    font-size: 13px;
    line-height: 24px;
    text-align: center;
    &>img {
        margin-left: 12px;
    }
`;

const MovesTitle = styled(Title)`
    justify-content: space-between;
`;












const VContainer = styled.div`
    width: 1560px;
    height: auto;
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  
`;

// const InfoBox = styled.div`
//     margin-top: 88px;
//     width: 484px;
//     height: 272px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;


// `;
const ProfileImg = styled.img`
    width: 104px;
    height: 104px;
    border-radius: 50%;
    margin-bottom: 24px;
`;
// const Name = styled.div`
//     width: 100%;
//     height: 34px;
//     margin-bottom: 8px;
//     text-align: center;
//     font-size: 28px;
// `;

const TotalNum = styled.div`
    margin-top: 8px;
    font-size: 18px;
    margin-bottom: 30px;
    color: #24D982;
    display: flex;
    justify-content: space-around;
    width:300px;    
    color: #717f92;
`;
const OtherBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MiniLeft = styled.div`
    width: 79px;
    height: 32px;
    margin-right: 8px;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    &> img {
        position: absolute;
    }
    &>div {
        position: absolute;
        z-index:10;
        left: 8px;

    }
`;



const Routing = styled.div`
    width: 1560px;
    height:54px;
    display: flex;
    justify-content: center;
    margin-top: 64px;
    margin-bottom: 56px;

`;

const Menu = styled.div`
    border: none;
    width: 140px;
    height: 54px;
    margin-right: 26px;
    text-align: center;
    line-height: 54px;
    cursor:pointer;
    font-size: 1.8rem;
    color: #f8f8f8;

`;

const MyCollections = styled.div`
   border: none;
    width: 140px;
    height: 54px;
    text-align: center;
    line-height: 54px;
    cursor:pointer;
`;

const MyMovesActive = styled(Menu)`
    border-bottom: 2px solid white;
`;

const MyCollectionsActive = styled(MyCollections)`
    border-bottom: 2px solid white;
`;