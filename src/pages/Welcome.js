import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";


const Welcome = () => {

    const [move, setMove] = useState(false);

    useEffect(()=> {
        setTimeout(()=> {
            setMove(true);
        },2000)
    },[]);


    return (
        <>
        {move ? <SignUp/> : 
          <Container>
           <ContentBox>
                <PlaneBox>
                    <img src="../../images/plane.png" alt=""></img>
                </PlaneBox>
                    <ProfileBox>
                        <img src="../../images/profile.png" alt="" ></img>
                        <STextBox>Invitation from Virus</STextBox>
                    </ProfileBox>
                    <LTextBox>
                        Welcome!<br></br>You are invited to the Moverse
                    </LTextBox>
           </ContentBox>
       
       </Container>
       
    }    <Footer/>
        </>

       
           
    );
}

export default Welcome;



const Container = styled.div`
    width:100%;
    height: auto;
    min-height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden; 
    margin-top: -140px;
`;

const ContentBox = styled.div`
    width: 574px;
    height: 362.98px;
`;

const PlaneBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 130px;  //?
    &img {
        width: 171.7px;
        height: 102.9px;
        object-fit: contain;
    }
`;
const ProfileBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 42px;
    &img {
        width: 56px;
        height: 56px;
        //object-fit: contain;
    }

`;
const STextBox = styled.div`
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #24D982;
    font-size: 14px;
    margin-top: 8px;
 
`;
const LTextBox = styled.div`
    width: 100%;
    height: 104px;
    line-height: 52px;
    margin-top: 21px;
    color: white;
    font-size: 38px;  //40px
    font-weight: bold;  //40
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;