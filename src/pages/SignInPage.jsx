import axios from "axios";
import styled, { keyframes } from "styled-components";
import 'animate.css';

import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { UserContext } from '/src/contexts/UserContext';

export default function SignInPage() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {

  }

  return (
    <SignInContainer>
      <SignInContainerLeft>
        <h1>linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </SignInContainerLeft>
      <SignInContainerRight>

      <FormContainer onSubmit={handleSignIn}>
        <input 
          type="email" 
          placeholder="E-mail" 
          value={email} 
          required 
          onChange={e => setEmail(e.target.value)}>
        </input>
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          required 
          onChange={e => setPassword(e.target.value)}>
        </input>
        <button>Sign In</button>
      </FormContainer>

      <Link to={'/signUp'}>First time? Create an account!</Link>
      </SignInContainerRight>
    </SignInContainer>
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

const SignInContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const SignInContainerLeft = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  user-select: none;

  background-color:#151515;
  color: #FFF;
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

const SignInContainerRight = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const FormContainer = styled.form`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input{
    width: 100%;
    height: 65px;
    border: none; 
    border-radius: 6px;
    color: #9F9F9F;

    font-family: Oswald;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  button{

  }
`;