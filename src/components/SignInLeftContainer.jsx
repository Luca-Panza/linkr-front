import styled, { keyframes } from "styled-components";
import 'animate.css';

import logo from '../assets/logo.png';

export default function SignInContainerLeft() {

  return (
      <>
        <SignInContainerLeftSC>
          <div>
            <h1>linkr</h1>
            <img src={logo} alt="linkr logo" />
          </div>
          <h2>save, share and discover the best links on the web</h2>
        </SignInContainerLeftSC>
      </>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SignInContainerLeftSC = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  user-select: none;

  background-color:#151515;
  color: #FFF;
  div{
    display: flex;
    margin-bottom: 2%;
    h1{
    animation: ${fadeIn} 1s ease-out;
    margin-left: 15%;
    font-family: Passion One;
    font-size : min(14vh, 14vw);
    letter-spacing: 5px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  img{
    animation: ${fadeIn} 1s ease-out;
    width: 15%;
    object-fit: contain;
    margin-left: 5%;
  }
  }
  h2{
    animation: ${fadeIn} 1s ease-out;
    width: 60%;
    margin-left: 15%;
    font-family: Oswald;
    font-size : min(6vh, 6vw);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;