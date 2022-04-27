import React, { useState, useRef } from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { 
    getDanceTitle,
    getDanceStory,
    getCreator,
    getCreatorImg,
    getCreatorRole, 
    getCreatorArr, 
    getGenres ,
    getTagList,
    getTagItem,
} from "../../actions/registerAction";
import SelectDropdown from "./SelectDropdown";
import RoleDropdown from "./RoleDropdown";
import Checkbox from "../Checkbox";

const RegisterInfo = ({registerState, idx}) => {

    const state = useSelector(state => state.registerReducer);
    const dispatch = useDispatch();


    //title 이랑 story 인풋
    const handleInputChange = (index, event) => {
        const values = [...state.forms];
        values[index][event.target.name] = event.target.value ;
        dispatch(getDanceTitle(values));
        dispatch(getDanceStory(values))
        console.log(index,"````")
    } 

      //장르 관련 
      const genreOptions = [
        {key:1, genre: "Ballet"},
        {key:2, genre: "B-boy"},
        {key:3, genre: "Contemporary"},
        {key:4, genre: "DanceWorkout"},
        {key:5, genre: "K-Pop"},
        {key:6, genre: "Popping"},
        {key:7, genre: "Etc"},
    ]
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const preventFocusMove = (event) => {
        event.preventDefault(); // blur 이벤트를 방지할 수 있다
    }
    const handleClickOpenGenre = () => {
        setDropDownOpen(prev=> !prev);
    }
    const onGenrSelected = (option, index) => {
        dispatch(getCreatorRole(option.role))
        setDropDownOpen(false);
    }
    const [isCheckedGenre, setisCheckedGenre] = useState([]);
    const changeHandler = (checked, genreName, index) => {
        if(checked){
            const values = [...state.forms];
            values[index].genres = [...isCheckedGenre, genreName];
            setisCheckedGenre([...isCheckedGenre, genreName]);
            dispatch(getGenres(values));
        }else {
            const val = state.forms;
            console.log(val,"heheheh")
            val[index].genres = val[index].genres.filter((el)=> el !== genreName); 
            setisCheckedGenre(val[index].genres.filter((el)=> el !== genreName));
            dispatch(getGenres(val));
        }
    }


    //크리에이터 검색 드롭다운*********************
     const [selectedOption, setSelectedOption] = useState("");  //selectOption
    //나중에 값을 get요청 해서 받아오고, 셋서치옵션으로 넣어주기 : 전체 크리에이터 검색하는 부분 !
    const searchOptions = [
        {key:1, creator: "1virus", img:"https://velog.velcdn.com/images/beablessing/post/940f37bf-cf0e-498a-bf67-093e844e0dcb/image.png"},
        {key:2, creator: "2lillian", img:"https://velog.velcdn.com/images/beablessing/post/940f37bf-cf0e-498a-bf67-093e844e0dcb/image.png"},
        {key:3, creator: "3dahee", img:"https://velog.velcdn.com/images/beablessing/post/940f37bf-cf0e-498a-bf67-093e844e0dcb/image.png"},
        {key:4, creator: "4aiki", img:"https://velog.velcdn.com/images/beablessing/post/940f37bf-cf0e-498a-bf67-093e844e0dcb/image.png"},
        {key:5, creator: "5honeyj", img:"https://velog.velcdn.com/images/beablessing/post/940f37bf-cf0e-498a-bf67-093e844e0dcb/image.png"},
        {key:6, creator: "6monika", img:"https://velog.velcdn.com/images/beablessing/post/940f37bf-cf0e-498a-bf67-093e844e0dcb/image.png"},
        {key:7, creator: "7viru", img:"https://velog.velcdn.com/images/beablessing/post/940f37bf-cf0e-498a-bf67-093e844e0dcb/image.png"},
        {key:8, creator: "8viroos", img:"https://velog.velcdn.com/images/beablessing/post/940f37bf-cf0e-498a-bf67-093e844e0dcb/image.png"},
        {key:9, creator: "9viruang", img:"https://velog.velcdn.com/images/beablessing/post/940f37bf-cf0e-498a-bf67-093e844e0dcb/image.png"},
        {key:10, creator: "10virillian", img:"https://velog.velcdn.com/images/beablessing/post/940f37bf-cf0e-498a-bf67-093e844e0dcb/image.png"},
        {key:11, creator: "11virukiii", img:"https://velog.velcdn.com/images/beablessing/post/940f37bf-cf0e-498a-bf67-093e844e0dcb/image.png"},
        {key:12, creator: "12vike", img:"https://velog.velcdn.com/images/beablessing/post/940f37bf-cf0e-498a-bf67-093e844e0dcb/image.png"},
        {key:13, creator: "13virang", img:"https://velog.velcdn.com/images/beablessing/post/940f37bf-cf0e-498a-bf67-093e844e0dcb/image.png"},
    ];

    //creator 태그 생성 
    const [nameDropOpen, setNameDropOpen] = useState(false);
    //creator 태그 담을 배열
     const [creatorTagArr, setCreatorArr] = useState([]);
    const clickCreatorAddBtn = (index) => {
        const val = {
            name: state.forms[index].searchInputValue,
            imgUrl: state.forms[index].searchImg,
            role: state.forms[index].roleValue,
        };
        if(!state.forms[index].searchInputValue){
            console.log("작업 노!");
        }else {  
            const arr = state.forms[index].creators = [...creatorTagArr, val]
            setCreatorArr(arr);
            const creator = state.forms[index].searchInputValue = "";
            dispatch(getCreator(creator));
            const role = state.forms[index].roleValue = 'Main Director';
            dispatch(getCreatorRole(role));
            setNameDropOpen(false);
            dispatch(getCreatorArr(arr));         
        }
    }
   
    //가입하지 않은 사람 등록버튼 (드롭다운 내부)
    const clickPlusBtn = (index) => {
      //  console.log(state.forms)
        const val = {
            name:state.forms[index].searchInputValue,
            imgUrl: "https://velog.velcdn.com/images/beablessing/post/78e5aa2b-27a9-438e-8086-88f4135e7840/image.png",
            role: "",
        };
        if(!state.forms[index].searchInputValue){
            console.log("작업 노!")
        }else {
            const arr = state.forms[index].creators = [...creatorTagArr, val]
            setCreatorArr(arr);
            const creator = state.forms[index].searchInputValue = "";
            dispatch(getCreator(creator));
            const role = state.forms[index].roleValue = 'Main Director';
            dispatch(getCreatorRole(role));
            setNameDropOpen(false);
            dispatch(getCreatorArr(arr));
        }        
    }

    const ceatorRemoveTag = (tag, index) => {
        const newTags = [...creatorTagArr];
        newTags.splice(tag, 1);
        const values = state.forms[index].creators = [...newTags]
        setCreatorArr(values);
        dispatch(getCreatorArr(values));
    }
    


    //tag 관련 
    const [tagItem, setTagItem] = useState("");
    const [tagList, setTagList] = useState([]);

    const onChangeTag = (e,index) => {
        const values = state.forms[index].tagItem = e.target.value; 
        dispatch(getTagItem(values));
        setTagItem(e.target.value);
    }
 
    const handleClickTagAdd = (index) => {
        if(tagList.length >9 ){
            return ;
        }else {
            const val = state.forms[index].tagList = [...tagList,tagItem]
            dispatch(getTagList(val))
            setTagList([...tagList,tagItem]);
            const removeItem = state.forms[index].tagItem = "";
            dispatch(getTagItem(removeItem));
            setTagItem("")
        }
        
    }

    const onKeyPress = (e,index) => {
        if (e.target.value.length !== 0 && e.key === 'Enter') {
            handleClickTagAdd(index);
           
        }else if(e.target.value.length !== 0 && e.key === ','){
            handleClickTagAdd(index);
        }
    }

    const handleClickTagRemove = (tag, index) => {
        //태그 리무브 

        const tags = state.forms[index].tagList ;
        tags.splice(tag,1);
        setTagList(tags);
        dispatch(getTagItem(tags));
        setTagItem("")
    }

    return(
        <Container>
            <TitleBox>
                <Title>
                    <div>Dance Title</div>
                    <div maxLength='5'>({registerState.danceTitle.length}/ 100)</div>
                </Title>
                <TitleContent 
                    placeholder="Eg) Moon Walk"
                    onChange={event => handleInputChange(idx,event)}
                    value={registerState.danceTitle}
                    name="danceTitle"
                ></TitleContent>
            </TitleBox>
            
            <StoryBox>
                <StoryTitle>
                    <div>Dance Story</div>
                    <div>({registerState.danceStory.length}/ 1000)</div>
                </StoryTitle>
                <StoryContent 
                    value={registerState.danceStory}
                    placeholder="Tell people what your choreography is about, how you came up with it, and where it is used."
                    onChange={event => handleInputChange(idx,event)}
                    type="text"
                    name="danceStory"
                ></StoryContent>
            </StoryBox>
            <GenreBox >
                <Title>
                    <div>Genres</div>
                </Title>
                <GenreContent  onClick={handleClickOpenGenre}>
                    <input
                        value={
                                isCheckedGenre.length === 0 ? `Choose the genre(s) of the choreography.`
                                : state.forms[idx].genres}
                        readOnly    
                    ></input>
                    <img src="../../images/down_arrow.png" alt=""></img>
                    {dropDownOpen ? 
                        <GenreDrop onMouseDown={preventFocusMove}> 
                        {genreOptions.map((genre)=> {
                            return (
                                <GenreList key={genre.key}>
                                <CheckboxContainer
                                    onClick={()=> onGenrSelected(genre , idx)}  
                                > 
                                <Checkbox
                                    onChange={(e)=>{
                                        changeHandler(e.target.checked, genre.genre, idx)
                                    }}  
                                    checked={isCheckedGenre.includes(genre.genre) ? true : false}
                                />
                                <TxtBox>{genre.genre}</TxtBox>
                                </CheckboxContainer>
                                </GenreList>    
                            )})}
                        </GenreDrop> : null}

                </GenreContent>
            </GenreBox>
            <CreatorBox>
                <CreatorTitle>
                    <div>Creators</div>
                    <img src="../../images/help_outline.png" alt=""></img>
                </CreatorTitle>
                <CreatorContent>
                    <SelectDropdown
                        searchOptions={searchOptions}
                        onChange={(item,idx)=> setSelectedOption(item,idx)}
                        clickPlusBtn={()=>clickPlusBtn(idx)}
                        nameDropOpen={nameDropOpen}
                        setNameDropOpen={setNameDropOpen}
                        idx={idx}
                    />
                    <RoleDropdown 
                        idx={idx}
                    />
                    <AddBtn onClick={()=>clickCreatorAddBtn(idx)}>Add</AddBtn>
                </CreatorContent>
            </CreatorBox>
            <CreatorTag>
            { state.forms[idx].creators && state.forms[idx].creators.map((tag, tagindex) => (
                <div key={tagindex}> 
                    <img src={tag.imgUrl} alt="" />
                    {tag.role !== "" ?   
                        <> {`${tag.name} (${tag.role})`}</>
                        :
                        <> 
                      
                        {`${tag.name}`}</>
                    }
                    <img src="https://velog.velcdn.com/images/beablessing/post/02197200-ff9a-45ee-b175-64ed5a0aacbb/image.png"
                    alt=""
                    onClick={() => ceatorRemoveTag(tagindex, idx) }
                    />
                </div>   
            ))}
            </CreatorTag>







            <TagBox>
                <TagTitle>
                    <div>
                        <span>Tags</span>
                        <span>(Optional)</span>
                    </div>
                    <div>({tagList.length}/ 10)</div>
                </TagTitle>
                <CreatorContent>
                    <Tag>
                        <div>#</div>
                        <input placeholder="Divide by comma (..)"
                        value={state.forms[idx].tagItem}
                        onChange={(e)=>onChangeTag(e, idx)}
                        onKeyPress={(e)=>onKeyPress(e,idx)}
                        maxLength={10}
                        ></input>
                    </Tag>
                    <AddBtn onClick={() => handleClickTagAdd(idx)}>Add</AddBtn>
                </CreatorContent>
                
            </TagBox>
            <TagViewBox>
                {state.forms[idx].tagList && state.forms[idx].tagList.map((el,tagindex)=> {
                    return (<TagMark  key={tagindex}>
                        {`#${el}`}
                        <TagRemoveImg 
                            src="https://velog.velcdn.com/images/beablessing/post/02197200-ff9a-45ee-b175-64ed5a0aacbb/image.png"
                            alt=""
                            onClick={() => handleClickTagRemove(tagindex, idx) }
                        />
                        </TagMark>)})}      
            </TagViewBox>







        </Container>



    )
}

export default RegisterInfo; 


const TagViewBox = styled.div`
    width:568px;
    height: auto; 
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: stretch;
    margin-bottom: 20px;
    margin-left:-8px;
`;

const TagMark = styled.div`
    min-width: 8.5rem;
    width: auto; 
    height:3.2rem; 
    text-align: center;
    line-height:3.2rem;
    background-color: #23242B;
    border-radius:50px; 
    color: #BDCBDD;
    font-size: 1.4rem;
    margin-left: 8px; 
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const TagRemoveImg = styled.img`
    width: 1.1rem;
    height: 1.1rem;
    cursor: pointer;
    margin-left:0.7rem;
`;

const CheckboxContainer = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100% ;
    height: 100%;
   padding-left: 8px;
`;

const TxtBox = styled.div`
    width: 93%;
    height: 43px;
    line-height: 43px;
    display:flex;
    align-items: center;
    justify-content: left;
    color: #90A0B7;
    font-size:16px;
    cursor: pointer;


`;

const Container = styled.div`
    width: 624px;
    height: auto;
    min-height: 680px;
    background-color: #2F313E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 31px;

  
`;

const TitleBox = styled.div`
    margin-top: 20px;
    width:568px;
    height: 86px;
    margin-bottom: 10px;

`;
const Title = styled.div`
font-size: 1.6rem;
    width: 100%;
    height: 38px;
    display: flex;
    justify-content: space-between;
    &>div{ 
        width:91px;
        height:24px;
        
    }
    &>div:nth-child(2){
        width:60px;
        height:24px;
        color: #90A0B7;
        font-size: 14px;
    }
`;
const TitleContent = styled.input`
    width:100%;
    height:48px;
    background-color: #23242B;
    color: #48506C;
    border: none;
    font-size:16px;
    padding: 1rem;

`;

const StoryBox = styled(TitleBox)`
    height: 142px;
    margin-bottom: 10px;
`;
const StoryTitle = styled(Title)`
    &>div:nth-child(1){ 
        width:98px;
    }
    &>div:nth-child(2){
        width:67px;
    }
`;
const StoryContent = styled.textarea`
    width:100%;
    height:104px;
    background-color: #23242B;
    color: #48506C;
    border: none;
    font-size:16px;
    resize: none;
    overflow-y:scroll;
    line-height: 1.3;
    padding: 1rem;
    &::-webkit-scrollbar {
        width: 6px;
        height: 5px;
    }
  &::-webkit-scrollbar-thumb { //스크롤 
    border-radius: 8px;
    background: #24D982;
    
  }
  ::-webkit-scrollbar-track {
        border-radius: 8px;
        background-color: #48506C;
  }
`;



const GenreBox = styled(TitleBox)`
    height: 90px;
    margin-bottom:32px;
`;


const GenreContent = styled.div`
    width: 566px;
    height:52px;
    border:2px solid  #48506C;
    background-color: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1rem 0.2rem;
   
  
    &>input{
        width: 93%;
        height:40px;
        color :#717F92;
        //#F8F8F8
        font-size: 16px; 
        background-color: #2F313E;
        border: none;
        cursor: pointer;
        text-indent : 5px;
    }
    &>img {
        width:12px;
        height:7.41px;
        margin-right: 14px;
        
    }
`;

const GenreDrop = styled.div`
    width:568px;  //564
    height: 320px;
    position: absolute;
    top: 60px;
    left: -2px;
    background-color:#23242B;
    border:2px solid #90A0B7;
    z-index: 15;
    padding:0; margin :0;

    /* &>div {
        width:540px;
        height:28px;
        margin: 14px 0 0 12px;
        line-height: 28px;
        display: flex;


        &>label {
            display: block;
            cursor:pointer;
            margin-top: -4px;
        }
    } */
`;

const GenreList = styled.label`

    width:100%;
    height:45px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  
    /* &>input{
        margin-left: 13px;
        cursor:pointer;
    }
    &>label{
        width: 100%;
        height: 45px;
        line-height: 45px;
        display: block;
    
        margin-left: 13px;
        font-size: 16px;
        cursor:pointer;
    } */
`;

const GenreTag = styled.div`
     width:569px;  //564
    height: 150px;
    border:1px solid red; 
`;




const CreatorBox = styled(TitleBox)`
    height:88px;
    margin-bottom: 10px;  //피스마 상에 32px => 크리에터 태그 떄문에 임의 변경함 
   
`;

const CreatorTitle = styled.div`
    width: 100%;
    height: 38px;
    display: flex;
    justify-content: flex-start;
    font-size: 1.6rem;
    &>div:nth-child(1){ 
        width:69px;
        height:24px;
    }
    &>img {
        width:20px;
        height:20px;
    }
`;

const CreatorContent = styled.div`
    width: 566px;
    height:auto;
    background-color: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Search = styled.div`
    width: 314px;
    height:48px;
    background-color: #23242B;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor:pointer; 
    &>input{
        width: 240px;
        background-color: #23242B;
        border: none;
        color: #48506C;
        font-size:15px;
    }
    &>img {
        width: 24px;
        height: 25px;
   
        
    }
`;

const CreatorTag = styled.div`
    width: 566px;
    height: auto;

    display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 15px;
    //gap: 1em;
        
    &>div{
        flex-basis: 260px;
        flex-grow: 0;
        width: auto; 
        min-width: 200px;
        height: 44px;
        background-color: #48506C;
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 5px;
        font-size: 1.6rem;;
        &>img {
            width: 28px;
            height: 28px;
            object-fit: cover;
        }
        &> img {
            width: 18px;
            height:18px;
            cursor: pointer;

        }
    }
`;



const AddBtn = styled.div`
    border:1px solid #24D982;
    width:72px;
    height:48px;
    background-color: none;
    color:#24D982;
    display: flex;
    align-items: center; 
    justify-content: center;
    cursor: pointer;
    font-size:18px; 
`;




const TagBox = styled(CreatorBox)`
 margin-bottom: 20px;
`; 

const TagTitle = styled(CreatorTitle)`
    &>div:nth-child(1){ 
        width:528px;
        display:flex;
        &>span:nth-child(1){
            display: block;
        }
        &>span:nth-child(2){
            display: block;
            color: #717F92;
            font-size: 14px;
            margin-left: 9px;
            font-size: 14px;
        }
    }
    &>div:nth-child(2) {
        width:60px;
        height:24px;
        color: #90A0B7;
        font-size: 14px;
    } 
`;

const Tag = styled(Search)`
    width: 484px;
    display: flex;
    justify-content: flex-start;
    cursor: none;
    &>div {
        margin: 0 10px 0 10px;
    }
    &>input{
        width: 400px;
        height: 80%;
        background-color: #23242B;
        border: none;
        color: #48506C;
        font-size:15px;
    }
`;

