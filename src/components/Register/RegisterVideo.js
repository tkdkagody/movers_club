import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { extractVideoUrl,
    setFormValues
} from "../../actions/registerAction";

const RegisterVideo = ({ handleClickUpload, registerState, idx}) => {


    //console.log(registerState, idx,"?")

    const state = useSelector(state => state.registerReducer);
    const dispatch = useDispatch();


    const handleChangeVideoUrl = (index, event) => {
        const values = [...state.forms];
        values[index][event.target.name] = event.target.value ;
        dispatch(extractVideoUrl(index, values));
    }
    const inputFocus = useRef(null);
    
   useEffect(()=> {
       inputFocus.current.focus();
   },[])

    return(
        <Box>
        <Container>
            <TitleBox>
                <LTitle>Upload Video Link</LTitle>
                <STitle>Copy the link to your YouTube video and paste it.</STitle>
            </TitleBox>
            <UploadBox>
                <input placeholder="YouTube URL"
                type="text"
                value={state.forms.videoUrl}
                onChange={event => handleChangeVideoUrl(idx,event)}
                name="videoUrl"
                ref={inputFocus}
                ></input>
                <div onClick={(event) => handleClickUpload(idx, event)}>Upload</div>
            </UploadBox>
        </Container>
        </Box>
    )
}

export default RegisterVideo; 

const Box = styled.div`
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    width: 584px;
    height: 329px;
    background-color: #2F313E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TitleBox = styled.div`
    width: 348px;
    height: 72px;
`;

const LTitle = styled.div`
    width:100%;
    height: 28px;
    font-size: 28px;
    color: #fff;
    text-align: center;
`;
const STitle = styled.div`
    width:100%;
    height: 28px;
    font-size: 15px;
    color:#90A0B7;
    text-align: center;
    margin-top: 16px;
`;


const UploadBox = styled.div`
    width: 100%;
    height:48px;
    margin-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;


    &>input {
        width:418px;
        height: 48px;
        background-color: #23242B;
        font-size: 16px;
        color: #48506C;
        border: none;
        text-indent: 16px;
    }
    
    &>div {
        width: 103px; 
        height:48px;
        background-color: #24D982;
        margin-left: 12px;
        color: #16171C;
        text-align: center;
        line-height: 48px;
        cursor: pointer;
    }
`;


