import React, { useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { GoogleLogin } from 'react-google-login';
import {OpenLoginModal } from '../actions/modalAction';
import {fetchToken, getUserProfileImg } from '../actions/userAction';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


// const Google = ({ handleResponseSuccess }) => {
const Google = ({handleClickGoogle}) => {

  

  const [authorizationCode, setAuthorizationCode] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();


  //originaal oauth때 사용. 
  const URL = "https://googleapis.com/oauth2/token";
  const code = authorizationCode; 
  const client_id = "1080720009249-4o9c86p20015q7q9tf8a9t8lnc4hjgd4.apps.googleusercontent.com";
  const client_id_secret = "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";
  const redirect_uri = "https://localhost:3000/auth/google";
  const grant_type ="authorization_code"

  

  const responseGoogle = (res) => {
    console.log(res, "구글tokenId")
    if(res.accessToken && res.profileObj.email && res.profileObj.name &&res.profileObj.imageUrl){
      dispatch(fetchToken(
        res.accessToken, res.profileObj.email,res.profileObj.name,res.profileObj.imageUrl
      ));
      navigate('/main'); 
      dispatch(OpenLoginModal())
      //islogin true, info들 받아옴 
     
    }

  }
  

  return (
                  <GoogleLogin
                    clientId={client_id}
                    render={renderProps => (
                    <BtnBox>
                        <Btn onClick={renderProps.onClick}>
                        <img alt="" src="../../images/google.png" />
                        <img alt="" src="../../images/Sign Up.png" style={{marginLeft:"21px"}}/>
                        </Btn>
                    </BtnBox>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  />
  );
};

export default Google;


const BtnBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;  
    margin-top: 48px;
`;

const Btn = styled.div`
    width: 380px;
    height:52px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;  
    cursor: pointer;
`;