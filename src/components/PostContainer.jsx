import styled from "styled-components"

export default function PostContainer(){
    return (
        <PostContainerSC>
            <ImageContainer>
                <img src="https://picsum.photos/200/300" alt="foto de perfil"/>
            </ImageContainer>
            <ContentContainer>
                <TitleContainer>What are you going to share today?</TitleContainer>
                <StyledInput placeholder="http://..." />
                <StyledTextArea tall placeholder="Awesome article about #javascript" />
                <button>publish</button>
            </ContentContainer>
        </PostContainerSC>
    )
}

const PostContainerSC = styled.div`
    width: 610px;
    height: 210px;
    border-radius: 15px;
    padding: 15px;
    background-color: red;
    display: flex;
    flex-direction: row;
    gap: 15px;
`

const ImageContainer = styled.div`
    width: 50px;
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`

const ContentContainer = styled.div`
    background-color: blue;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
        color: #999;
        font-style: italic;
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
        color: #999;
        font-style: italic;
    }
`