import React from "react";
import styled from "styled-components";
import SearchVideoList from "../components/SearchVideoList";
import  {videoInfoDummy}  from "../videoInfoDummy";
import { getSearchValue } from "../actions/searchAction";
import { useDispatch, useSelector } from "react-redux";

const SearchPage = () => {

    //console.log(videoInfoDummy,"더미값");
    const dispatch = useDispatch();
    const searchState = useSelector(state => state.searchReducer);
    //console.log(searchState.searchValue.searchValue,"서치페이지 서치단어");
   // console.log(searchState.filteredVideo,"서치페이지 서치비디오")

    return (
        <Container>
            <TotalView>
                <span>Found </span>
                <span>{`${searchState.filteredVideo.length}`}</span>
                <span>Moves related to</span>
                <span>"{searchState.searchValue.searchValue}"</span>
            </TotalView>
            <VContainer>
                {searchState.filteredVideo.map((videoData)=> <SearchVideoList key={videoData.id} videoData={videoData} />)}
            </VContainer>
        </Container>
    )
}

export default SearchPage;


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

const TotalView = styled.div`
    width: 100%;
    height:34px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top:283px;
    &>span {
        width: auto;
        height:100%;
        font-size: 28px;
        display: block;
    }
    &>span:nth-child(1){
        margin-right:6px;
    }
    &>span:nth-child(2){
        margin-right:6px;
    }
    &>span:nth-child(3){
        margin-right:6px;
    }
    &>span:nth-child(4){
        color: #24D982;
    }

`;

const VContainer = styled.div`
    width: 1560px;
    height: auto;
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`;


//9:00-10:30   1.5
//14:30-18:00 3.5
//19:30-21:30 2    
//7시간 
//1시간