import React, { useEffect, useState } from "react";
import { closeModalDetail, creatorModalOpen,  } from "../../actions/modalAction";
import { useDispatch, useSelector, } from "react-redux";
import styled from "styled-components";
import DetailInfo from "./DetailInfo";
import OtherVideoList from "./OtherVideoLIst";
import { useNavigate,Link, Outlet, useParams, useLocation, Navigate} from "react-router-dom";
import { getVideoInfo,getClickedInfo,getOtherVideo } from "../../actions/getVideoInfoAction";
import { otherVideoInfoDummy } from "../../videoInfoDummy";
import MoreCreators from "../Modal/MoreCreators";
import {
    OpenLoginModal, OpenPublishModal,closePublishModal,
    closeCreatorModal,openCreatorhModal
} from '../../actions/modalAction';


const DetailPage = ({data}) => { 
    const params = useParams();
    const state = useSelector(state => state.modalReducer);  //모달
    const [render, setRender] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const videoState = useSelector(state=> state.getVideoInfoReducer);
    // const videoAllData = videoState.videoData.videoData;

    


    useEffect(()=> {
        //get othervideos => dispatch 
        dispatch(getOtherVideo(otherVideoInfoDummy));  //othervideo정보 넣어줌
        
    },[]);

    useEffect(()=> {
        setTimeout(()=> {
            setRender(true)
        },200)
    },[])
    
    const other = useSelector(state=> state.getVideoInfoReducer);
    const otherVideoData = other.otherVideo.otherVideo;
    // const pickedThree = otherVideoData.splice(0,3); 
    // console.log(pickedThree,"?");


    //엑스 버튼 클릭시 => 메인페이지로
    const clickCloseBtn = () => {
        navigate('/main')
    }
    const clickBackBtn = () => {
        navigate(-1);
    }

    //북마크 상태값 
    //상단에 data[0].like 이런식으로 값 통신값 가져와서 북마크 함수에 넣어주면 될듯 ! 
    const [bookMarkIcon, setBookMarkIcon] = useState(false);
    const handleClickCollection = () => {
        //콜렉트 클릭 함수 
      
        setBookMarkIcon(prev => !prev);
        if(bookMarkIcon){
            //bookmarkIcon이 true인경우 postId를 같이 실어서 post요청을 보내주
            //true인경우 렌더링도 바꿔줌 
            //useEffect해서 bookmark값 먼저 가져와야 하나?
        }
    }

    return(
        <Container>
            <ModalWrap>
                <BackContent>
                    <BackBox src="../../../images/back_circle.png" alt="" onClick={clickBackBtn}></BackBox>
                </BackContent>
                <ModalContent>
                    <VideoBox>
                        <MainVideo>
                        <iframe
                            title="myFrame"
                            src={`https://youtube.com/embed/${data[0].videoId}`}
                            frameBorder="0"
                            allowFullScreen
                            ></iframe>
                        </MainVideo>
                        {
                            render ? (<OtherVideoList data={otherVideoData.splice(0,3)}/>)
                            : "로딩중"
                        }
                    </VideoBox>
                    <DetailInfo 
                        data={data[0]}
                        bookMarkIcon={bookMarkIcon}
                        handleClickCollection={handleClickCollection}
                    ></DetailInfo>
                </ModalContent>
                <CloseContent>
                    <CloseBox src="../../../images/close_circle.svg" alt="" 
                        onClick={clickCloseBtn}
                    ></CloseBox>
                </CloseContent>
            </ModalWrap>
            {
                state.creatorModalOpen ? 
                <MoreCreators/> : null
            }
       
        </Container>
    )
};

export default DetailPage; 

const Container = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
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
    width: 1501px;
    height: 750px;
    //min-height: 100vh;
    top: 13%;
    left: 10%;
    z-index:20;
    color:white;
    display: flex;
`;

const ModalContent = styled.div`
    width: 1445px;
    height: 750px;
    background-color:#23242B;
    border-radius: 24px;
    display:flex; 
    justify-content: center;
    align-items: center;
`;

const VideoBox = styled.div`
    width:760px;
    height:649px;

`;

const MainVideo = styled.div`
    width: 759px;
    height: 426px; 
    border-radius: 16px;
    position: relative;
    &>iframe {
        border-radius: 16px;
        width: 99%;
        height: 99%;
        margin-left: 5px;
    }

`;

const BackContent = styled.div`
    width: 56px;
    height: 709px;
    display: flex;
    justify-content: flex-start;
`;
const CloseContent = styled.div`
    width: 56px;
    height: 709px;
    display: flex;
    justify-content: flex-end;
`;
const CloseBox = styled.img`
    width: 40px;
    height:40px;
    border-radius: 50%;
    cursor: pointer;
`;
const BackBox = styled(CloseBox)``;

const StartBtn = styled.div`
    width: 72px;
    height:72px;
    border-radius: 50%;
    background-color: #24D982;
    position: absolute;
    left: 45%;
    top: 40%;
    object-fit: contain;
    cursor: pointer;
    &>img {
        width: 22px;
        height: 28px;
        position: relative;
        left: 40%;
        top:30%;
    }
`;