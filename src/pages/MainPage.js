import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { OpenloginModal } from "../actions/modalAction";
import { getVideoInfo,  getClickedInfo } from "../actions/getVideoInfoAction"
import styled from "styled-components";
import MainSlider from "../components/MainSlider/MainSlider";
import VideoList from '../components/VideoList';
import { fetchBanner } from '../actions/bannerAction';
import ExploreModal from "../components/Modal/ExploreModal";
import ScrollButton from "../components/ScrollButton/index.js";
//임시 데이터 더미
import { BalletDummy } from '../videoInfoDummy';
import { danceWorkDummy } from '../videoInfoDummy';

const MainPage = () => {


    //정보 바로 못가져와서 시간차를 주었음 
    const [render, setRender] = useState(false);
    //비디오관련 리듀서 
    const videoState = useSelector(state => state.getVideoInfoReducer);
    const dispatch = useDispatch();
    //비디오 데이터스테이트 가져옴 vdata
    const videoAllData = videoState.videoData.videoData;
    const bannerstate = useSelector(state => state.bannerReducer);
    const modalState = useSelector(state => state.modalReducer);



    

//페치배너
    useEffect(()=> {
        dispatch(fetchBanner());
        dispatch(getVideoInfo(videoAllData));
        setVideoArr(videoAllData);
    },[]);

//렌더시간 조절(스테이트가져오기)
    useEffect(()=> {
        setTimeout(()=> {
            setRender(true);
        },200)
    },[])





    const genresTag = ["Ballet", "B-boy", "Contemporary", "DanceWorkout", "K-Pop", "Popping", "Etc"];
    const categories = ["All", ...new Set(genresTag.map((item)=> item))];
    const [activeCat, setActiveCat] = useState(categories);

    // btn액티브시 버튼 색상 바꾸기 !!!
    const [btnActive,setBtnActive] = useState({
        "All" : false,
        "Ballet" : false,
        "B-boy" :  false,
        "Contemporary" :  false,
        "DanceWorkout" :  false,
        "K-Pop" :  false,
        "Popping" :  false,
        "Etc" :  false,

    });

const [allbtn, setAllBtn] = useState(false); 

    // const filteredData = videoAllData.filter((el) => {     
    //     if(el.genre.indexOf(btn)  > -1 ){
    //         return el;
    //     }
    // });

    const [videoArr, setVideoArr] = useState([]);  
    //바로 디스패치 해버리면 데이터가 짤리는 현상이 나타나서
    //개별 스크립트 내부에 모든 비디오리스트를 가지는 배열상태값 하나를 만들어 둠. 
    if(videoArr && videoArr.length === 0){
        setVideoArr(videoAllData);
    }
    const activeCategory = (btn, idx) => {
        if(btn === "All"){
            setVideoArr(videoAllData);          
        }else if(btn === "Ballet") {
            setVideoArr(BalletDummy);   
        }else if(btn === "DanceWorkout"){
            setVideoArr(danceWorkDummy);  
        }else {
            setVideoArr(videoAllData);  
        }
        // else if(btn === "B-boy"){
        //     setVideoArr([...videoAllData]);  
        // }else if(btn === "Contemporary"){
        //     setVideoArr(videoAllData);  
        // }else if(btn === "DanceWorkout"){
        //     setVideoArr([...danceWorkDummy]);  
        // }else if(btn === "K-Pop"){
        //     setVideoArr([...videoAllData]);  
        // }else if(btn === "K-Pop"){
        //     setVideoArr([...videoAllData]);  
        // }else if(btn === "Popping"){
        //     setVideoArr([...videoAllData]);  
        // }else if(btn === "Etc"){
        //     setVideoArr([...videoAllData]);  
        // }
      };

if(render){
    return (
        <Container>
         {/* <MainSlider banner={bannerstate.bannerItem}/> */}
            <TagBorder>
                <TagBox>
                     {activeCat.length && activeCat.map((genre, idx)=> {
                         return (
                            <Tag 
                                key={idx}
                                genre={genre} 
                                onClick={() => activeCategory(genre,idx)}
                                color={btnActive}
                            >{genre}</Tag>)
                     })}
                </TagBox>
            </TagBorder>
            <SubNav>
                <TotalBox>
                    {
                    videoArr ? videoArr.length.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                    : videoAllData.length.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                    } Moves in total
                </TotalBox>
            </SubNav>
            <VContainer>
                <VideoList videoAllData={videoArr} />
            </VContainer>
            {/* 회원가입하고 메인페이지 넘어올때 뜨는 모달 */}
            {modalState.loginModalOpen ? <ExploreModal/> : null}
            {/* 스크롤탑버튼 */}
            <ScrollButton/>
        </Container>

      
     );
}else {
    return (
        <>loading....</>
    )
}

    
}

export default MainPage;

const Container = styled.div`
    width:100%;
    height: auto;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:white;
    //overflow: hidden;  //슬라이더 때문에 스크롤 발생함 
    overflow-x: hidden;

`;

const DoxBox = styled.div`
    width: 100%;
    height: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 16px;
`;

const Circle = styled.div`
    width: 80px;
    height: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    &>div {
        background-color: #2F313E ;
        height: 8px;
        width: 8px;
        border-radius: 50%;
    }
   
`;

const TagBorder = styled.div`
    width: 1174px;
    height: 72px;
    border-bottom: 1px solid #717F92;
    border-top: 1px solid #717F92; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 64px;
`;

const TagBox = styled.div`
    width:auto; 
    height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;
const Tag = styled.button`
    height:22px;
    width: auto; 
    margin-left : ${props => props.genre === "All" ? '0' : '72px' } ;
    line-height: 22px;
    cursor: pointer;
    font-size:18px;
    background-color: black;
    color: #717F92;
    //color: ${props => !props.color ? "#717F92"  : "#24D982"}
    border: none;

    &:active, 
    &:focus{ 
        color:#24D982;
    } 
    &:hover {
        color:#24D982;
    }

`;

const TagActive = styled(Tag)`
    color: #24D982;
`;

const SubNav = styled.div`
    width: 1560px; 
    height: 48px;
    margin-top: 68px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`;


const VContainer = styled.div`
    width: 1560px;
    height: auto;
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-content: stretch;
    flex-wrap: wrap;

    
`;

const TotalBox = styled.div`
    width: 245px;
    height: 32px;
    color: #717F92;
    font-size: 20px;
    line-height: 32px;
    text-indent: 24px;

`;


const SelectBox = styled.div`
    width:177px; 
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #23242B;
    color: #90A0B7;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    position: relative;
    &>div {
        display: flex;
        align-items: center;
        justify-content: center;
        &>span {
        display: block;
        width: 109px;
        height:24px;
        margin-right:16px;
        line-height: 24px;
    }
        &>img {
            width: 24px;
            height:24px;
            object-fit: contain;


        }
    }
    

`;

const Drop = styled.ul`
    width: 177px;
    height: 88px;
    position: absolute;
    top: 49px;
    background-color:#23242B;
    border:1px solid #90A0B7;
    margin:0; padding: 0;
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    &>li {  
        width: 100%;    
        list-style: none;
        cursor: pointer;
      &:hover {
        background-color: tan;
      }
    }
`;