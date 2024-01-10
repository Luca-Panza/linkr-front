import { useState } from "react"
import styled from "styled-components"
import UserImage from "./UserImage";

export default function PostContainer(){
    const [post, setPost] = useState({link:'', comment:''});
    const [disabled, setDisabled] = useState(false);
    function handleState(e){
        setPost({...post, [e.target.name]: e.target.value})
    }
    function handlePostSend(){
        // setDisabled(true);
        alert("em construção");
    }

    return (
        <PostContainerSC>
            <ImageContainer>
                <UserImage link={"https://picsum.photos/200/300"} userId={1}/>
            </ImageContainer>
            <ContentContainer>
                <TitleContainer>What are you going to share today?</TitleContainer>
                <StyledInput placeholder="http://..." name="link" onChange={handleState} disabled={disabled}/>
                <StyledTextArea placeholder="Awesome article about #javascript" name="comment" onChange={handleState} disabled={disabled}/>
                <ButtonContainer>
                    <button onClick={handlePostSend} disabled={disabled} >{disabled?'Publishing ...' : 'Publish'}</button>
                </ButtonContainer>
            </ContentContainer>
        </PostContainerSC>
    )
}

const PostContainerSC = styled.div`
    width: 610px;
    height: 210px;
    border-radius: 15px;
    padding: 15px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    gap: 20px;
`

const ImageContainer = styled.div`
    width: 50px;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'lato';
`

const TitleContainer = styled.div`
    color: #707070;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
`

const StyledInput = styled.input`
    width: 503px;
    height: 30px;
    background-color: #EFEFEF;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
    ::placeholder {
        font-size: 15px;
        font-weight: 300;
        line-height: 18px;
        color: #949494;
        font-style: italic;
    }
    &:disabled {
        background-color: #CCCCCC;
        color: #666666;
        cursor: not-allowed;
    }
`

const StyledTextArea = styled.textarea`
    width: 503px;
    height: 66px;
    background-color: #EFEFEF;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
    resize: none;
    ::placeholder {
        font-size: 15px;
        font-weight: 300;
        line-height: 18px;
        color: #949494;
        font-style: italic;
    }
    &:disabled {
        background-color: #CCCCCC;
        color: #666666;
        cursor: not-allowed;
    }
`

const ButtonContainer = styled.div`
    width: 503px;
    height: 31px;
    display: flex;
    justify-content: flex-end;
    button{
        width: 112px;
        height: 31px;
        background-color: #1877F2;
        font-weight: 700;
        font-size: 14px;
        color: #fff;
        border: none;
        border-radius: 5px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        :hover{
            cursor: pointer;
        }
        &:disabled {
            background-color: #CCCCCC;
            color: #666666;
            cursor: not-allowed;
        }
    }

`