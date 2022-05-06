import React from "react";
import styled from "styled-components";
import { useNavigate,Link, Outlet, useParams, useLocation, useMatch} from "react-router-dom";


const SearchVideoList = ({videoData}) => {
    const navigate = useNavigate();

    const handleClickVideo =() => {
        navigate(`/vdetail/${videoData.id}`);
    }

    return (
       <>
           <VideoBox onClick={handleClickVideo}>
               <VideoImg src={videoData.Thum}></VideoImg>
               <TitleBox>
                   <div>{videoData.Title}</div>
               </TitleBox>
               <InfoBox>
                   <img src="../../../images/profile.png" alt="" ></img>
                   <div>Creator +2</div>
                   <div></div>
                   <div>Genre +3</div>
               </InfoBox>
           </VideoBox>
       </>
    )
}

export default SearchVideoList; 


const VideoBox = styled.div`
    width: 366px;
    height:268px;
    margin-bottom: 32px;
    cursor:pointer;
    overflow: hidden;

`;

const VideoImg = styled.img`
    width: 366px;
    height: 206px;
    object-fit: cover;
`;

const TitleBox = styled.div`
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;

    &>div {
        color: white; 
        font-size:18px;
    }
`;

const InfoBox = styled.div`
    width: 100%; 
    height: 24px;
    display: flex;
    align-items: center;
    /* border: 1px solid #24D982; */
    &>img {
        width: 20px; 
        height: 20px;
        border-radius: 50%;
        margin-right: 8px;
        
    }
    &>div:nth-child(2) {    
        width: auto;
        height:24px;
        color : #90A0B7; 
        text-align: center;
        line-height: 24px;
        font-size: 14px; 
    }
    &>div:nth-child(3) {
        
        width:4px;
        height: 4px;
        background-color: #24D982;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 10px;
    }
    &> div:nth-child(4) {
        width: auto;
        height:24px;
        color : #90A0B7; 
        text-align: center;
        line-height: 24px;
        font-size: 14px; 
    }
`;