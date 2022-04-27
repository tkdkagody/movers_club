import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <FooterWrap>
                <LeftBox>
                    <LogoBox>
                        <LogoImg src="../../images/brand_logo.png" alt=""></LogoImg>
                    </LogoBox>
                    <CopyRight>ⓒ2022 Moverse, Inc. All Rights Reserved</CopyRight>
                </LeftBox>
                <RightBox>Movers policy all rights reserved</RightBox>
            </FooterWrap>
        </Container>
    )
}

export default Footer; 

const Container = styled.div`
    width: 100vw;
    max-width: 100%;
    height: 140px;
    background-color: #000000;
    position : relative;
    //transform : translateY(-100%);
    z-index: 10;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: flex;
    /* border:1px solid red;  */
    justify-content: center;
    /* bottom: 0; */
`;

const FooterWrap = styled.div`
    width: 90%;  //1632px
    height: 100%;
    border-top: 1px solid #90A0B7;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 33px;
`;

const LeftBox = styled.div`
    width: 400px;
    height:31px;
    display: flex;
    align-items: center;
`;

const LogoBox = styled.div`
    width: 115px;
    height: 30.71px;
    margin-right: 19px;
`;

const LogoImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const CopyRight = styled.div`
    width: 265px;
    height: 24px;
    color: #717F92;
    font-size: 14px;
`;

const RightBox = styled.div`
    width: 206px;
    height: 31px;

    color: white;
`;