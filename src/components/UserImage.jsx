import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function UserImage({link, userId}){
    const nav = useNavigate();
    function handleNavigation(userId){
        console.log(userId);
        nav('/home');
    }
    return (
        <UserImageSC src={link} alt="foto de perfil" onClick={()=>handleNavigation(userId)} />
    )
}

const UserImageSC = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    :hover{
        cursor: pointer;
        border: 1px solid #777;
        box-sizing: border-box;
    }
`