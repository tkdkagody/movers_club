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


    useEffect(()=> {
        setTimeout(()=> {
    
            setRender(true);
        },200)
    },[])





    const [dropFilter, setDropFilter] = useState("Sort by Newest"); 
    const genresTag = ["Ballet", "B-boy", "Contemporary", "DanceWorkout", "K-Pop", "Popping", "Etc"];
    const categories = ["All", ...new Set(genresTag.map((item)=> item))];
    const [activeCat, setActiveCat] = useState(categories);




    const [videoArr, setVideoArr] = useState([]);  
    //바로 디스패치 해버리면 데이터가 짤리는 현상이 나타나서
    //개별 스크립트 내부에 모든 비디오리스트를 가지는 배열상태값 하나를 만들어 둠. 
    


    const activeCategory = (btn, idx) => {
        
        if(btn === "All"){
            setVideoArr(videoAllData);
        }else if(btn === undefined){
            setVideoArr(videoAllData);
        }else {
            
            const filteredData = videoAllData.filter((el) => {     
                if(el.genre.indexOf(btn)  > -1 ){
                    return el;
                }
            });
            //dispatch(getVideoInfo(filteredData));
            setVideoArr(filteredData);
        }

        
      };



    // const [sortDropOpen, setSortdropOpen] = useState(false);
    // const handleClickFilterdrop = () => {
    //     setSortdropOpen(prev => !prev);
    // } 
    // const handleClickSort = (li) => {
    //     //이쪽 정렬은 state에 담긴 값을 가져와서 dispatch해주어야 함. 
    //     //이후에 어디서든 비디오 리스트를 받아올때, 정렬 한번씩 돌려주기 
    //     if(li === "newest"){
    //         const vNewest = videoAllData.sort((a,b)=> {
    //              return new Date(b.createdAt) - new Date(a.createdAt)
    //         });
    //         dispatch(getVideoInfo(vNewest));
    //         setDropFilter("Sort by Newest");
           
    //     }else if(li === "popularity"){
    //         const vPopularity = videoAllData.sort((a,b)=> {
    //             return b.view - a.view; 
    //        });
    //        dispatch(getVideoInfo(vPopularity));
    //        setDropFilter("Sort by popularity")
    //     }
    // }    
    
    console.log(videoArr,"hi")
if(render){
    return (
        <Container>
         <MainSlider banner={bannerstate.bannerItem}/>
            <DoxBox>
            </DoxBox>
            <TagBorder>
                <TagBox>
                     {activeCat.length && activeCat.map((genre, idx)=> {
                         return (
                            <Tag 
                                key={idx}
                                genre={genre} 
                                onClick={() => activeCategory(genre,idx)}
                            >{genre}</Tag>)
                     })}
                </TagBox>
            </TagBorder>
            <SubNav>
                 <TotalBox>{videoArr && videoArr.length.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} Moves in total</TotalBox>
                 {/* mvp에서는 솔트 빠짐 */}
                 {/* <SelectBox onClick={handleClickFilterdrop}>
                    <div>
                        <span>{dropFilter}</span>
                        <img src="../../images/arrow_drop_down.svg" alt=""></img>
                    </div>
                    {sortDropOpen ? 
                        <Drop>
                            <li onClick={()=> handleClickSort("newest")}>Sort by newest</li>
                            <li onClick={()=> handleClickSort("popularity")}>Sort by popularity</li>
                        </Drop>
                    : null}
                    
                </SelectBox> */}
                
            </SubNav>
            <VContainer>
                <VideoList videoAllData={videoArr}/>
            </VContainer>
         {modalState.modalOpen ? <ExploreModal/> : null}
        </Container>

      
     );
}else {
    return (
        <>로딩</>
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
    border: none;
    &:active, 
    &:hover,
    &:focus{ 
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