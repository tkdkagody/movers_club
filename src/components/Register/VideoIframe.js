import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { extractVideoId, getEmbedJson, viewVideoThumnail, DeleteVideoThumnail,
    clickAgreeChecked,
} from "../../actions/registerAction";
import Checkbox from "../Checkbox";

const VideoIframe = ({registerState, idx} ) => {


    const state = useSelector(state => state.registerReducer);
    const dispatch = useDispatch();

   //체크박스 !!!
   const [bechecked, setBeChecked] = useState(false);

   const handleCheckboxChange = (event, index) => {
       const values = [...state.forms];
        values[index].agreement = event.target.checked;
        setBeChecked(event.target.checked);
        dispatch(clickAgreeChecked(values));

        const postVal = [...state.postForms];
        postVal[index].agreement = event.target.checked;
        dispatch(clickAgreeChecked(postVal));
    }

    return(
        <Box>
            <Container>
                <iframe
                title="registerVideo"
                src={`https://youtube.com/embed/${state.forms[idx].videoId}`}
                width="584"
                height="329"
                frameBorder="0"
                ></iframe>

            </Container>
            <AgreeCheck>
                <CheckboxContainer> 
                    <Checkbox
                    checked={bechecked}
                    onChange={(event) => handleCheckboxChange(event, idx)}
                    />
                    <TxtBox >I acknowledge that the choreography that I upload is created by me, or I clearly presented all co-creators, stakeholders, owners of it.</TxtBox>
                </CheckboxContainer>
       </AgreeCheck>
        
        </Box>
    )
}

export default VideoIframe; 

const CBox = styled.div`
    display: inline-block; 
    vertical-align: middle;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
 
`;

const Container = styled.div`
    width: 584px;
    height: 329px;
    /* background-color: #48506C; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border:none;
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

const AgreeCheck = styled.div`
    width:585px;
    height:72px;
    background-color: #2F313E;
    display: flex;
    margin-top: 16px;

    
`;
const CheckboxContainer = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100% ;
    height: 100%;
   
   
`;


const TxtBox = styled.div`
    width: 497px;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #90A0B7;
    font-size:14px;
`;
