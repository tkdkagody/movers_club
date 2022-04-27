import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getVideoInfo, getClickedInfo, getParamsData,getOtherVideo } from "../../actions/getVideoInfoAction";
import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const OtherVideoList = ({data}) => { 
   // console.log(data); //index(detailpage)에서 받아옴 depth:2
    const navigate = useNavigate();

    const clickOtherMoves = (id) => {
     //   console.log(id);
        navigate(`/vdetail/${id}`)
    }


    return(
        <Container>
            <TextBox>Other Moves</TextBox>
            <VideoBox>
                {data.map((el, idx)=> {
                    return (
                        <Video src={el.Thum} alt="" onClick={()=>clickOtherMoves(el.id)}></Video>
                    )
                })}
            </VideoBox>
        </Container>
    )


    
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