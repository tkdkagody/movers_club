import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector} from "react-redux";
import DetailPage from "../components/DetailPage";
import SearchVideoList from "../components/SearchVideoList";
import { getVideoInfo, getClickedInfo, getParamsData } from "../actions/getVideoInfoAction";

import { useNavigate,Link, Outlet, useParams, useLocation} from "react-router-dom";
import  {videoInfoDummy}  from "../videoInfoDummy";
import MoreCreators from "../components/Modal/MoreCreators";


const VideoDetail = () => {

    const [render, setRender] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();
    const videoState = useSelector(state=> state.getVideoInfoReducer);
    const videoAllData = videoState.videoData.videoData;
     


    useEffect(()=> {
        setTimeout(()=> {
            setRender(true);
        },200)
    },[]);

    if(render){
        return (
            <Container>
                <DetailPage data={videoAllData.filter((el)=> {return (el.id === Number(params.videoId))})}/>
            </Container>
        )
    }else{
        return (
            null
        )
    }
       
   
    
}

export default VideoDetail;


const Container = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:white;
    overflow-x: hidden;  //슬라이더 때문에 스크롤 발생함 
    margin-top: -140px;
 
`;

