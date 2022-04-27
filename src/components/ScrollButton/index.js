import React, { useState, useEffect } from "react";
import styled from 'styled-components'


const ScrollButton = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <>
    {btnStatus && ScrollY !== 0 ? 
        <TopBtn onClick={handleTop}>
            <img src={"../../../images/topArrow.svg"}/>
        </TopBtn> 
        : 
        <TopBtnHide/>}
    </>
  );
};

export default ScrollButton;



export const TopBtn = styled.button`
    cursor: pointer;
    width: 7rem;
    height: 7rem;
    position: fixed;
    bottom: 2rem;
    right: 3rem;
    color: rgb(87, 87, 87);
    background-color: #23242b;
    padding: 2rem 2rem;
    font-size: 1.2rem;
    //border: 1.5px solid rgb(231, 231, 231);
    border:2px solid #24D982;
    border-radius: 50%;
    display: flex;
    opacity: 1;
    transition: opacity 0.5s ease-in;
    &:hover{
      outline: 0 none;
      background-color: rgba(36,217,130,0.3);
      opacity: 0.8;
    }
  &>img {
    position: relative;
    right: -0.4rem;
    bottom: 0.1rem;
  }
    
`;

export const TopBtnHide = styled.button`
    display: none;
`;