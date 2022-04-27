import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getSearchValue, getFilterdArr } from "../../actions/searchAction";
import { getVideoInfo,getClickedInfo } from "../../actions/getVideoInfoAction";
import { fetchLogin, loginSuccess, logoutSuccess, fetchToken } from "../../actions/userAction";
import  {videoInfoDummy}  from "../../videoInfoDummy";
import { GoogleLogin } from 'react-google-login';


const AppNav = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchState = useSelector(state => state.searchReducer);
  const userState = useSelector((state => state.userReducer));
  const [openDrop, setOpenDrop] = useState(false);
  const client_id = "1080720009249-4o9c86p20015q7q9tf8a9t8lnc4hjgd4.apps.googleusercontent.com";  //구글로그인
  const responseGoogle = (res) => {
    console.log(res,"로그인 눌렀을때 데이터 ")
    if(res.accessToken && res.profileObj.email && res.profileObj.name &&res.profileObj.imageUrl){
      console.log(res.profileObj.email,"dd")
      dispatch(fetchToken(
        res.accessToken, res.profileObj.email,res.profileObj.name,res.profileObj.imageUrl
      ));
      navigate('/main'); 
    }

  }

  const handleSearchInput = (e) => {
    setOpenDrop(false);
    dispatch(getSearchValue(e.target.value));
  }
  const videoState = useSelector(state => state.getVideoInfoReducer);


  useEffect(()=> {
    if(videoState){
        dispatch(getVideoInfo(videoInfoDummy));  
    }
  },[]);


  const handleClickSearchBtn = () => {
    navigate('/search');
    const value = searchState.searchValue.searchValue;

      dispatch(getFilterdArr(
        videoState.videoData.videoData.filter((val) => {
          if(value === ""){
            return val;
          }else if(val.Title.toLowerCase().includes(value.toLowerCase())){
            return val;
          }
        })
      ));
    
  }


  const handleKeyPress = (e) => {
    //focus때도 드롭 닫기 
    if(e.key === "Enter"){
      navigate('/search');
      setOpenDrop(false);
      const value = searchState.searchValue.searchValue;
      dispatch(getFilterdArr(
        videoState.videoData.videoData.filter((val) => {
          if(value === ""){
            return val;
          }else if(val.Title.toLowerCase().includes(value.toLowerCase())){
            return val;
          }
        })
      ));
    }    
  }

  const handleClickRegister = () => {
    navigate('/register');
    setOpenDrop(false);
  }

 
  //드롭열기
  const handleClickMyInfo = () =>{
      setOpenDrop(prev => !prev);
  }

  const handleClickMove = () => {
    navigate('/main');   
    setOpenDrop(false);
  }

//드롭
  const handleClickCollection = () => {
    navigate('/mypage/mycollections');
  }

  const handleClickMyMoves  = () => {
    navigate('/mypage/mymoves');
  }


  //로그아웃 버튼 누를시 !
  const handleLogOut = () => {
    //logout btn 클릭시 
    dispatch(logoutSuccess());
    localStorage.removeItem("getSignUpToken");
    navigate('/main');
  }


  const img = userState.profileImg ==="user/avatar/u60wwvtz84n_1650680611625.com/a/AATXAJzxTa2D7kj24cpNf94-N0OHFIbE_3NRT4iLqRRY=s96-c"
  ? "https://velog.velcdn.com/images/beablessing/post/7f30c720-da7c-4a81-9b38-0c84f527a43e/image.png"
  : userState.profileImg;

    return(
      <Container>
        <LeftBox>
          <LogoImg src="../../images/brand_logo.png" alt="" onClick={()=> navigate('/main')}></LogoImg>
          <MoveLink onClick={handleClickMove}>Move</MoveLink>
        </LeftBox>
        <MiddleBox>
          <SearchBox>
            <SearchInput 
            onChange={handleSearchInput}
            value={searchState.searchValue.searchValue  || ''}
            placeholder="Search dance titles, creators..."
            onKeyPress={handleKeyPress}
            />
            <SearchImg src="../../../images/search.svg" onClick={handleClickSearchBtn}></SearchImg>
          </SearchBox>
        </MiddleBox>
        <RightBox>
          {!userState.isLogin ? 
         (<> <LoginAlert>You need to be invited Sign Up!</LoginAlert>
          <GoogleLogin
                    clientId={client_id}
                    render={renderProps => (
                      <LoginBtn onClick={renderProps.onClick}>Login</LoginBtn>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  />
          
          
          
          </>
          
          )
          : 
          (<>
            <PersonBox onClick={handleClickMyInfo}>
              <div>
                <Person src={img} alt="" style={{cursor:"pointer"}}/>
                <DropArr src="../../../images/down_arrow.png" alt=""></DropArr>
              </div>
              {openDrop ? <DropMypage>
                <ListMypage onClick={handleClickMyMoves}>My Moves</ListMypage>
                <ListMypage onClick={handleClickCollection}>My Collection</ListMypage>
                <ListMypage onClick={()=> navigate('/edit_profile')}>Edit Profile</ListMypage>
                <ListMypage onClick={()=> navigate('/setting')}>Setting</ListMypage>
                <ListMypage onClick={handleLogOut}>Log Out</ListMypage>
              </DropMypage>: null}
            </PersonBox>
            <ResgisterBtn onClick={handleClickRegister}>Register Your Move</ResgisterBtn>
          </>)
          }
        </RightBox>
      </Container>
    )
}

export default AppNav;


const DropMypage = styled.div`
  border:1px solid #90A0B7;
  background-color: #23242B;
  width: 148px;
  height: 244px;
  position: absolute;
  top: 40px;
  left: -80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ListMypage = styled.div`
  width: 100%;
  height: 4.8rem;
  color: #f8f8f8;
  font-size: 1.6rem;
  text-align: center;
  text-indent:20px;
  line-height: 4.8rem;
`;


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
    justify-content: space-between;
`;

const LeftBox = styled.div`
  width: 40%;
  height: 88px;
  display: flex;
  align-items: center;
   
`;

const LogoImg = styled.img`
  object-fit: contain;
  width: 10.8rem;
  height: 4rem;
  margin-left: 3.2rem;
  cursor: pointer;
`;

const MoveLink = styled.div`
  width: 5.4rem;
  height: 2.4rem;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 4rem;
  line-height: 2.4rem;
  cursor: pointer;
`;

const AnimationLink = styled.div`
  width: 91.1rem;
  height: 2.4rem; 
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  margin-left: 3.2rem;
  line-height: 2.4rem;
  cursor: pointer;
`;

const MiddleBox = styled.div`
  width: 20%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
`; 

const SearchBox = styled.div`
  width: 29.4rem;
  height: 4.4rem;
  border-radius: 2.4rem;
  border:1px solid #BDCBDD;
  display: flex;
   align-items: center;
   justify-content: center;
`;

const SearchInput = styled.input`
  width: 18.6rem;
  height:2.4rem;
  background-color: black;
  border: none;
  color: #90A0B7;
  font-size: 1.4rem;
  line-height: 2.4rem;
`;

const SearchImg = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 65px;
  cursor: pointer;
`;




const RightBox = styled.div`
  width: 40%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

//로그인 전 
const LoginAlert = styled.div`
  width:  24rem;
  height: 2.4rem;
  line-height:2.4rem;
  text-align: center;
  color: #90A0B7;
  font-size: 1.6rem;
`;

const LoginBtn = styled.div`
  width: 7.5rem;
  height:4.8rem;
  color: #24D982;
  font-size: 16px;
  border: 1px solid #24D982;
  margin-right: 3.2rem;
  margin-left: 4rem;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
`;


const PersonBox = styled.div`
  width: 6rem;   
  height: 48px;
  object-fit: contain;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  & > div:nth-child(1) {
    width: 6em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Person = styled.img`
  width: 32px;
  height:32px;
`;
const DropArr = styled.img``;

const CartBox = styled(LoginAlert)`
  width: 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 2.8rem;
`;

const CartImg = styled.img`
  width: 2.3rem;
  height: 1.9rem;
`;

const CartNum = styled.div`
  color: white;
  font-size: 1.6rem;
  
`;


const ResgisterBtn = styled.div`
  width:175px;
  height:48px;
  color: #24D982;
  font-size: 16px;
  border: 1px solid #24D982;
  margin-right: 41px;
  margin-left: 3.5rem;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
`;

