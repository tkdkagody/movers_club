import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector} from "react-redux";
import { openModalDetail } from "../actions/modalAction";
import { getVideoInfo, getClickedInfo } from "../actions/getVideoInfoAction";
import DetailPage from "../components/DetailPage";
import { useNavigate,Link, Outlet, useParams, useLocation, useMatch} from "react-router-dom";

const VideoList = ({videoAllData}) => {

    //이페이지의 비디오 데이터는 !!! 메인페이지에서 프롭스로 받아오기
    //리덕스에 넣지 말기 

    const modalState = useSelector(state => state.modalReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const videoState = useSelector(state => state.getVideoInfoReducer);
    // const videoAllData = videoState.videoData.videoData;
    // console.log(videoAllData,"비디오리스트 컴포넌트 비디오리스트");



    const handleClickId = (id) => {
       // dispatch(openModalDetail());  
        dispatch(getClickedInfo(id, videoAllData));
        navigate(`/vdetail/${id}`);
    }


    
    return (
       <>
       {videoAllData && videoAllData.map((el,idx)=> {
           return (
            <VideoBox key={el.id} onClick={() => handleClickId(el.id)}>
                <VideoImg src={el.videoThum}></VideoImg>
                <TitleBox>
                    <div>{el.title}</div>
                </TitleBox>
                <InfoBox>
                    <img src={el.creator[0].imgUrl} alt="" ></img>
                    <div>{`${el.creator[0].name} + ${el.creator.length-1}`}</div>
                    <div></div>
                    <div>{`${el.genre[0]} + ${el.genre.length-1}`}</div>
                </InfoBox>
            </VideoBox>
           )
       })}
       
       </>
    )

    // return(
    //     <VideoBox >
    //         <VideoImg ></VideoImg>
    //     </VideoBox>
    // )
}

export default VideoList; 


const VideoBox = styled.div`
    width: 366px;
    height:268px;
    margin-bottom: 32px;
    cursor:pointer;
    border-radius: 8px;
    overflow: hidden;
    margin-left: 24px;
    

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