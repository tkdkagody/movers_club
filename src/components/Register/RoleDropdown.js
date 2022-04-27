import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { getCreatorRole } from "../../actions/registerAction";




const RoleDropdown = ({idx}) => {

    const roleOptions = [
        {key:1, role: "Main Director"},
        {key:2, role: "Co-creator"},
        {key:3, role: "Performancer"},
    ]

    const registerState = useSelector(state => state.registerReducer);
    const dispatch = useDispatch();



      //크리에이터 역할 드롭다운
      const [dropDownOpen, setDropDownOpen] = useState(false);

      const handleClickrRole = () => {
        setDropDownOpen(prev => !prev);
      }

    const preventFocusMove = (event) => {
        event.preventDefault(); // blur 이벤트를 방지할 수 있다
    }

    const onRoleSelected = (option, index) => {
        const values = registerState.forms[index].roleValue = option.role;
        dispatch(getCreatorRole(values))
        setDropDownOpen(false);
    }

    return (
        <div style={{position:"relative"}}>
        <Role onClick={handleClickrRole}>
                <input 
                onBlur={()=> setDropDownOpen(false)}
                value={registerState.forms[idx].roleValue}
                readOnly
                ></input>
                <img src="../../images/down_arrow.png" alt=""></img>
        </Role>
        {dropDownOpen ? 
            <RoleDrop
            onMouseDown={preventFocusMove}
            >
                {roleOptions.map((el)=> {
                    return (
                        <div 
                        key={el.key}
                        onClick={()=> onRoleSelected(el,idx)}
                        >{el.role}</div>
                    )
                })}
            </RoleDrop>
        : null}
        </div>
    )

};

export default RoleDropdown;




const Role = styled.div`
    width: 158px;
    height:48px;
    background-color: none;
    border:1px solid #717F92;
    display: flex;
    justify-content: center;
    align-items: center; 
    cursor:pointer;
    &>input {
        margin-right: 11px;
        width: 110px;
        height:46px;
        text-align: center;
        background-color: #2F313E;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 16px;
        
    }
`;

const RoleDrop = styled.div`
    width: 158px;
    height: 144px;
    position: absolute;
    top: 52px;
    //left: 66.5%;
    background-color:#23242B;
    border:2px solid #90A0B7;
    display: flex;
    flex-direction: column;
    &>div {
        width: 100%; 
        height: 33%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        text-indent: 10px;
        font-size: 1.6rem;
        &:hover {
            background-color: #24D982;
        }
    }
    
`;