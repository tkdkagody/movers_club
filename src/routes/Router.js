import React, { useEffect, useState } from "react";
import { Routes, Route, Redirect, Link } from "react-router-dom";
import SimpleNav from "../components/Nav/SimpleNav";
import AppNav from "../components/Nav/AppNav";
import SignUp from "../components/SignUp";
import MainPage from "../pages/MainPage";
import Welcome from "../pages/Welcome";
import Register from "../pages/Register";
import SearchPage from "../pages/Search";
import Detailpage from "../components/DetailPage";
import Mypage from "../pages/MypageCollections";
import InvitePage from "../components/MyPage/InvitePage";
import EditPage from "../components/MyPage/EditPage";
import SetPage from "../components/MyPage/Setting";
import Footer from "../components/Footer";
import VideoDetail from "../pages/VideoDetail";
import Google from "../components/Google";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, loginSuccess, logoutSuccess,
  fetchInvitation,
} from "../../src/actions/userAction";
import MypageMoves from "../pages/MypageMoves";
import MypageCollections from "../pages/MypageCollections";
import { getVideoInfo, getClickedInfo } from "../actions/getVideoInfoAction";
import  {videoInfoDummy}  from "../videoInfoDummy";

const MyRouter = () => {

  const dispatch = useDispatch();


  useEffect(()=> {
    //페치해서 가져와야함 . 비디오 전체 리스트 
    dispatch(getVideoInfo(
      videoInfoDummy.sort((a,b)=> {
      return new Date(b.createdAt) - new Date(a.createdAt)
    }))
    )
  },[]);



  //로그인 유지 !
  useEffect(()=> {
    if(localStorage.getItem("getSignUpToken")){
      dispatch(loginSuccess()); 

      dispatch(fetchLogin(localStorage.getItem("getSignUpToken")));
      
      setTimeout(()=> {
        dispatch(fetchInvitation(localStorage.getItem("getSignUpTokken")))
      },500)
    }
  },[]);
           
    return (
        <>
        <AppNav>

        </AppNav>
        <Routes>
            <Route path="/*" element={<Welcome/>} />
            <Route path="/main" element={<MainPage/>} />
            <Route path="/auth/google" element={<Google />}/>
            <Route path="/vdetail" element={<VideoDetail />}>
                <Route path=":videoId"  />
            </Route>
            <Route path="/register" element={<Register/>} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/mypage/mycollections" element={<MypageCollections />} />
            <Route path="/mypage/mymoves" element={<MypageMoves />} />
            <Route path="/invite" element={<InvitePage />} />
            <Route path="/edit_profile" element={<EditPage />} />
            <Route path="/setting" element={<SetPage />} ></Route>
        </Routes>
        
        </>
    )
}

export default MyRouter;

