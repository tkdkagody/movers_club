import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDispatch, useSelector} from "react-redux";
import { useNavigate,Link, Outlet, useParams, useLocation, Navigate} from "react-router-dom";
import {
    OpenLoginModal, OpenPublishModal,closePublishModal,
    closeCreatorModal,openCreatorhModal
} from '../../actions/modalAction';
import { getVideoInfo,getClickedInfo } from "../../actions/getVideoInfoAction";





const DetailInfo = ({data, handleClickCollection, bookMarkIcon}) => {

    //data => 클릭한 비디오 개별 정보 ! 혹시 id값으로 해당 비디오만 가지고 오게 된다면 index에서 조정해주면 된다. 
    const [render, setRender] = useState(false);


    // const creatorNum = [0,1,2,3,4,5,7];
    // const desc = `This particular freeze is called a "baby" freeze because it's supposed to be one of the easiest ones to learn. It's a move where you hold your body low to the ground, balancing yourself on your hands and head with your feet in the air.    This particular freeze is called a "baby" freeze because it's supposed to be one of the easiest ones to learn. It's a move where you hold your body low to the ground, balancing yourself on your hands and head with your feet in the air.`
    // const genres = ["Hip Hop","K-Pop"];
    // const tags = ["tag_1","tag_2","tag_3"];
    // const params = useParams();
    // const state = useSelector(state => state.modalReducer); //모달

    const dispatch = useDispatch();
    // const videoState = useSelector(state=> state.getVideoInfoReducer);
    // const videoAllData = videoState.videoData.videoData;




    const creatorArrCopied = [...data.creator];


console.log(data,"Sdfsdf")
    const handleClickMoreCreator = () => {
        dispatch(openCreatorhModal());
        dispatch(getClickedInfo(data));
    }
    

    const handleClickCopy = () => {
        alert("링크가 클립보드에 복사되었어요!");
        //나중에 모달로 변경해주기 
    }



    return(
        <Container>
            <Title>{data.title}</Title>
            <Date>{data.title.createdAt}</Date>
            <ShareBox>
                <CopyToClipboard text={window.location.href} onCopy={handleClickCopy}>
                <div>
                    <img src="../../../images/share.png" alt=""/>
                </div>
                </CopyToClipboard>   
                {bookMarkIcon ? 
                <BookMarkBoxActive onClick={handleClickCollection}>
                        <img src="../../../images/bookmark.png" alt=""></img>
                        <div>Collected</div>
                </BookMarkBoxActive>
                : 
                <BookMarkBox onClick={handleClickCollection}>
                        <img src="../../../images/bookmark.png" alt=""></img>
                        <div>Collect</div>
                </BookMarkBox>
                } 
                
            </ShareBox>
            <Creator>
                {data && data.creator.length < 6 ? 
                   <> {data.creator.map((el)=> <CreatorInfo key={el.id}>
                        <img src={el.imgUrl} alt=""></img>
                        <div>
                            <span>{el.name}</span>
                            <span>{el.role}</span>
                        </div>
                    </CreatorInfo>)} </>
                    :
                    <> {creatorArrCopied.splice(0,5).map((el,id)=> <CreatorInfo key={el.id}>
                        <img src={el.imgUrl} alt=""></img>
                        <div>
                            <span>{el.name}</span>
                            <span>{el.role}</span>
                        </div>
                    </CreatorInfo>)}


                    {data && data.creator.length >5 ?
                        <MoreCreator onClick={handleClickMoreCreator}>
                            <div>+{data.creator.length >5 ? data.creator.length-5 : 0} more creators</div>
                        </MoreCreator>   
                    : null 
                    }
                    </>
                }
            </Creator>
            
            <Desc>{data.story}</Desc>
            <GenreBox>
                <div>Genre:</div>
                {data.genre.map((genre,idx)=> <div key={idx}>{genre}</div>)}
            </GenreBox>
            <TagBox>
                {data.tags.map((tag,idx)=> <div key={idx}>#{tag}</div>)}
            </TagBox>
        </Container>
    )

  
  
};

export default DetailInfo; 


const Container = styled.div`
    width:554px;
    height:649px;
    margin-left: 48px;
`;

const Title = styled.div`
    width: 100%;
    height:28px; //뭔가 폰트사이즈가 컨테이너 넘어감
    color: #fff;
    font-size: 32px;
`;

const Date = styled.div`
    width: 100%;
    height:24px;
    font-size: 14px;
    color: #717F92;
    margin-top: 16px;
`;

const Creator = styled.div`
    width: 100%;
    height: auto;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap; 
    box-sizing: border-box;


`;

//creator 인원별로 mapping
const CreatorInfo = styled.div`
    width: 143px;
    height:48px;
    margin: 0 40px 20px 0;
    display: flex;
    justify-content: space-between;
    &>img {
        width: 48px;
        height:48px;
    }
    &>div {
        width: 81px;
        height:47px;
        &>span{
            display: block;
            width: 100%;
            height: 24px;
            line-height: 24px;
            font-size: 13px;
        }
    }
 
`;

const MoreCreator = styled.div`
    width: 143px;
    height:48px;
    margin: 0 40px 20px 0;
    display: flex;
    justify-content: space-between;
    &>div{
        width: 136px;
        height:36px;
        background-color:#2F313E;
        border-radius: 8px;
        text-align: center;
        line-height: 36px;
        color: #90A0B7;
        font-size: 14px;
        cursor: pointer;
    }
`;


const ShareBox = styled.div`
    width: 199px;
    height:40px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    &>div:nth-child(1) {
        width: 40px;
        height:40px;
        border-radius: 50%;
        border: 1px solid #fff;
        margin-right: 12px; 
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
`;

const BookMarkBox = styled.div`
        width: 147px;
        height:40px;
        border-radius: 60px;
        border: 1px solid #fff;
        display: flex;
        justify-content:center;
        align-items: center;
        cursor: pointer;
        &>img {
            width: 24px;
            height: 24px;
            margin-right: 12px;
        }
        &>div{
            font-size: 16px;
            color:white;
        }
`;

const BookMarkBoxActive = styled(BookMarkBox)`
    background-color: #24D982;
    border:none; 
`;


const Desc = styled.div`
    width: 554px;
    height: 180px;
    color: #BDCBDD;
    font-size: 15px;  //16px;
    margin-top: 40px;
    line-height: 28px;
    flex: none;
    margin: 40px 0px;
    background-color: #23242B;
    overflow-y:scroll;
    &::-webkit-scrollbar {
    width: 6px;
    height: 46px;
  }
  &::-webkit-scrollbar-thumb { //스크롤 
    border-radius: 8px;
    background: #24D982;
    
  }
  ::-webkit-scrollbar-track {
					/* 스크롤이 움직이는 영역  */
                    border-radius: 8px;
  background-color: #48506C;
}



`;
const GenreBox = styled.div`
    width: 168px;
    height:24px;
    margin-top: 20px;
    line-height: 24px;
    display: flex;
    &>div:nth-child(1){
        color:#90A0B7;
        margin-right: 7.5px;
    }
    &>div:nth-child(2){
        display: flex;
        &>span {
            display: block;
            font-size: 14px;
            margin-right: 8px;
        }
    }

    //초록색 구분점 삽입

`;

const TagBox = styled.div`
    width: 100%;
    height:32px;
    margin-top: 48px;
    display: flex;
    &>div {
        width:75px;
        height: 32px;
        background-color: #2F313E;
        border-radius: 50px;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items:center;
        margin-right: 8px;
    }
`;
