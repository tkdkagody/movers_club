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




const MypageCollections = () => { 


    const [myMovesData, setMyMovesVData] = useState([]);
    const [myCollectionData, setMyCollectionData] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((state => state.userReducer));

    const videoDatas = [
        {id:1, Title: "Dance Title1", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:2, Title: "Dance Title2", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:3, Title: "Dance Title3", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:4, Title: "Dance Title4", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:5, Title: "Dance Title5", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:6, Title: "Dance Title6", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:7, Title: "Dance Title7", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:8, Title: "Dance Title8", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:9, Title: "Dance Title9", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:10, Title: "Dance Title5", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:11, Title: "Dance Title6", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:12, Title: "Dance Title7", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:13, Title: "Dance Title8", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:14, Title: "Dance Title9", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
    ];

    const MyCollection = [
        {id:1, Title: "Dance Title1", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:2, Title: "Dance Title2", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:3, Title: "Dance Title3", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
        {id:4, Title: "Dance Title4", Thum:"https://images.velog.io/images/beablessing/post/a2014b43-1ce4-44dd-9942-8a6ffac2ea89/Rectangle%2013.png", genre:["gnere1","gnere2","gnere3","gnere4"]},
      
    ];



    
    const [isMoves, setIsMoves] = useState("");
    const handleClickRouter = (e) => {
        if(e.target.innerText === "My Moves"){
            setIsMoves("My Moves");
        }else{
            setIsMoves("My Collection")
        }
    }



    const [render, setRender] = useState(false);
    useEffect(()=> {
        //dummy데이터 대신 api req
        setMyMovesVData(videoDatas);
        setMyCollectionData(MyCollection);
        setTimeout(()=> {
            setRender(true);
        },200)
    },[]);




    const img = userState.profileImg ==="user/avatar/u60wwvtz84n_1650680611625.com/a/AATXAJzxTa2D7kj24cpNf94-N0OHFIbE_3NRT4iLqRRY=s96-c"
    ? "https://velog.velcdn.com/images/beablessing/post/7f30c720-da7c-4a81-9b38-0c84f527a43e/image.png"
    : userState.profileImg;



if(render){

    return (
        <Container>
           <InfoBox>
                <ProfileImg src={img} alt="" />
                <Name>{userState.nickname}</Name>
                <TotalNum>
                    <div>{`${"1"} move`}</div>
                    <div>|</div>
                    {/* <div>{`Joined on ${"month"} ${day}, ${year}`}</div> */}
                    <div>{`Joined on ${userState.userDate.split("T")[0]}`}</div>
                </TotalNum>
                <OtherBox>
                    <MiniLeft>
                        <div>{`3`}/5 left!</div>
                        <img src="../../images/Union (1).png" alt=""></img>

                    </MiniLeft>
                    <InviteBox onClick={()=> navigate('/invite')}>
                        <img src="../../images/mail.png" alt=""></img>
                        <div>Invite Others</div>
                    </InviteBox>
                    <EditBox onClick={()=> navigate('/edit_profile')}>Edit Profile</EditBox>
                </OtherBox>
            </InfoBox> 
            <Routing>
                <Menu onClick={(event) => handleClickRouter(event)}>My Moves</Menu>
                <Menu onClick={(event) => handleClickRouter(event)}>My Collection</Menu>
            </Routing>
            <VContainer>
                {isMoves==="My Moves" ? 
                <> {myMovesData.map((videoData)=> <MyMovesList key={videoData.id} videoData={videoData}/>)}</>
                : 
                <>{myCollectionData.map((videoData)=> <MyCollectionsList key={videoData.id} videoData={videoData}/>)}</>
                }
            </VContainer>
        </Container>
    )
}else {
    return ("로딩중입니다")
}
    
}

export default MypageCollections;


const Container = styled.div`
    width:100%;
    height: auto;
    min-height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:white;
    overflow-x: hidden; //슬라이더 때문에 스크롤 발생함 

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

const InfoBox = styled.div`
    margin-top: 88px;
    width: 484px;
    height: 272px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`;
const ProfileImg = styled.img`
    width: 104px;
    height: 104px;
    border-radius: 50%;
    margin-bottom: 24px;
`;
const Name = styled.div`
    width: 100%;
    height: 34px;
    margin-bottom: 8px;
    text-align: center;
    font-size: 28px;
`;

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
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #BDCBDD; 
    font-size:1.6rem;
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