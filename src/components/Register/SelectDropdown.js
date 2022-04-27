import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
//import withClickOutside from "./withClickOutside";
import { getCreator,getCreatorImg } from "../../actions/registerAction";


// const SelectDropdown = React.forwardRef( ({
//     searchOptions,
//     onChange,
//     selectedKey,
//     dropOpen,
//     setDropOpen,
//     setSelectCreator,
// }, ref) => {


const SelectDropdown = ({
        searchOptions,
        onChange,
        clickPlusBtn,
        nameDropOpen,
        setNameDropOpen,
        idx
}) => {


    const registerState = useSelector(state => state.registerReducer);
    const dispatch = useDispatch();


    //console.log(registerState.searchInputValue,"등록스테이트");


    //크리에이터 검색시, 크리에이터에 밸류값 담기! 
    const searchInputChange = (e, index) => {
        const values = registerState.forms
        values[index].searchInputValue = e.target.value; 
        dispatch(getCreator(values));      
        if(e.target.value.length >= 1) {
            setNameDropOpen(true)
        }else {
            setNameDropOpen(false);
        }
    
    }


    //크리에이터 검색 박스 클릭시 드롭다운 오픈!
    const clickDropBox = (index) => {
        if(registerState.forms[index].searchInputValue.length <=1){
            setNameDropOpen(false)
        }else {
            setNameDropOpen(prev => !prev);
        }
    }

    //크리에이터 이름 검색시 드롭다운 클릭시 밸류값 담기 ! 
    const onItemSelected = (option,index) => {
         onChange !== undefined && onChange(option.key);  
         const values = registerState.forms;
         values[index].searchInputValue = option.creator
         onChange !== undefined && dispatch(getCreator(values));
         setNameDropOpen(false);
         const val = registerState.forms;
         val[index].searchImg = option.img; 
         dispatch(getCreatorImg(val));

    }


    const preventFocusMove = (event) => {
        event.preventDefault(); // blur 이벤트를 방지할 수 있다
    }
  
        return (

            <div style={{position:"relative"}}>
            <Search  onClick={()=>clickDropBox(idx)}  
            onBlur={()=> 
                setNameDropOpen(false)
            }
            >
                <input 
                    type="text"
                    value={registerState.forms[idx].searchInputValue}
                    onChange={(e)=>searchInputChange(e, idx)}
                    placeholder="Search creators or add a new one."></input>
                <img src="../../../images/search_register.svg" alt="" ></img>
            </Search>
    
    
        {nameDropOpen ?
            <SearchDrop 
               // ref={ref}
            >
                <div onMouseDown={preventFocusMove}>
                    <img src="../../../images/color_add.png" alt=""
                     onClick={clickPlusBtn}
                    ></img>
                    <div
                     onClick={clickPlusBtn}
                    >Add '{registerState.forms[idx].searchInputValue }' manually</div>
                </div>
            {searchOptions
            .filter((val) => {
                if(registerState.forms[idx].searchInputValue ===""){
                    return val;
                }else if(val.creator.toLowerCase().includes(registerState.forms[idx].searchInputValue.toLowerCase())){
                    return val;
                }
            })
            .map((opt)=> {
                return(
                    <span key={opt.key} 
                        onClick={()=> onItemSelected(opt,idx)} 
                        onMouseDown={preventFocusMove}
                        color={"#24D982"}
                    >
                        <CreatorImg src={opt.img} alt=""></CreatorImg>
                        <CreatorName>{opt.creator}</CreatorName>
                    </span>
                )
            })}
        </SearchDrop>  : null}
      
            </div>
        )
   
    
};

export default SelectDropdown;

//withClickOutside(SelectDropdown); 


const Search = styled.div`
    width: 314px;
    height:48px;
    background-color: #23242B;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor:pointer; 
    &>input{
        width: 85%;
        height: 100%;
        background-color: #23242B;
        border: none;
        color: #48506C;
        font-size:17px;
        text-indent: 5px;
    }
    &>img {
        width: 24px;
        height: 25px;
       
    }
`;



const SearchDrop = styled.div`
    width:314px; 
    height:200px;
    min-height: 104px;
    position: absolute;
    top: 52px;
    background-color:#23242B;
    border:2px solid #90A0B7;
    display: flex;
    flex-direction: column;

    overflow: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 6px;
        height: 5px;
    }
    &::-webkit-scrollbar-thumb { //스크롤 
        border-radius: 8px;
        background: #23242B;
        
    }
    ::-webkit-scrollbar-track {
            border-radius: 8px;
            background-color: #48506C;
    }

    &>div:nth-child(1){  //add new 
        height: 58px;
        display: flex;
        align-items : center; 
        justify-content: flex-start;
        &>img {
            width: 24px;
            height: 24px;
            margin: 16px 15px 18px 16px;
            cursor: pointer;
        }
        &>div{
            cursor: pointer;
        }
    }   
    &>span{
        display: block;
        width: 100%;
        height:58px;
        font-size: 16px;
        color: #717F92;
        line-height: 20px;
        cursor:pointer;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &:hover {
            background-color: #24D982;
        }
    }
`;
const CreatorImg = styled.img`
    width: 24px;
    height:24px;
    margin-left: 8px;
    object-fit: cover;
`;
const CreatorName = styled.div`
    width:80%;
    height:58px;
    line-height: 58px;
    
`;
