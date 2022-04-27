import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getVideoInfo, getClickedInfo, getParamsData,getOtherVideo } from "../../actions/getVideoInfoAction";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate,useParams } from "react-router-dom";

const OtherVideoList = () => { 
    const params = useParams();
    const navigate = useNavigate();

    const clickOtherMoves = (id) => {
        console.log(id)
        navigate(`/vdetail/${id}`)
    }
    const video = useSelector(state=> state.getVideoInfoReducer);
    //console.log(video.otherVideo.otherVideo.slice(0,3))
    const list =  video && video.videoData.videoData.filter((el)=> el.id !== Number(params.videoId))
//console.log(list)

    const [render, setRender] = useState(false);

    useEffect(()=> {
        setTimeout(()=> {
            setRender(true)
        },200)
    },[]);

    if(render){
        return(
            <Container>
                <TextBox>Other Moves</TextBox>
                <VideoBox>
                    {list.slice(0,3).map((el, idx)=> {
                        return (
                            <Video key={el.id} src={el.videoThum} alt="" onClick={()=>clickOtherMoves(el.id)}></Video>
                        )
                    })}
                </VideoBox>
            </Container>
        )
    }else {
        return(
            <>로딩중.......</>
        )
    }
    


    
};

export default OtherVideoList; 



const Container = styled.div`
    width: 759px;
    height: 175px; 
    margin-top: 48px;
`;

const TextBox = styled.div`
    width:100%;
    height: 24px;
    margin-bottom: 16px;
    color:#90A0B7;
    line-height: 24px;
`;

const VideoBox = styled.div`
    width: 100%;
    height:135px;
    display: flex;
    justify-content:space-between;
`;

const Video = styled.img`
    width:240px;
    height:135px;
    border-radius: 8px;
    object-fit: cover;
    cursor: pointer;
`;