import styled from "styled-components";
import UserImage from "./UserImage";
export default function Header({children}){
    return (
        <PageContainer>
            <HeaderSC>
                <span>Linkr</span>
                <UserImage link={"https://picsum.photos/200/300"} userId={1}/>
            </HeaderSC>
            {children}
        </PageContainer>
    );
}

const PageContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    padding-top: 125px;
`

const HeaderSC = styled.div`
    height: 72px;
    width: 100%;
    max-width: 100vw;
    background-color: #151515;
    position: fixed;
    top: 0px;
    display: flex;
    flex-direction: row;
    padding: 0px 17px 0px 28px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
    font-family: 'Passion One';
    font-size: 49px;
    font-weight: 700;
    user-select: none;
    span{
        :hover{
            cursor: pointer;
        }
    }
`