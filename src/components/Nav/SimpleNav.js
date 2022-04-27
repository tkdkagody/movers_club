import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";




const SimpleNav = () => {



  const navigate = useNavigate();

    return (
        <Container>
          <LogoBox>
            <LogoImg src="../../images/brand_logo.png" alt=""  onClick={()=> navigate('/main')}></LogoImg>
          </LogoBox>
        </Container>
    );
    
}

export default SimpleNav;




const Container = styled.div`
    width: 100vw;
    height: 88px;
    background-color: #000000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const LogoBox = styled.div`
    width: 149px;
    height: 39.79px;
    cursor: pointer;
`;

const LogoImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;