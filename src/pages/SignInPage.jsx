import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { UserContext } from '/src/contexts/UserContext';
import SignInContainerLeftSC from "/src/components/SignInLeftContainer";

export default function SignInPage() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
		e.preventDefault();

    axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, {email, password})

        .then((res) => {
          setUser(res.data)
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/home")
          }) 
  }

  return (
    <SignInContainer>

      <SignInContainerLeftSC/>

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

        <Link to={'/sign-up'}>First time? Create an account!</Link>
      </FormContainer>

      </SignInContainerRight>
    </SignInContainer>
  );
}

const SignInContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
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
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;

  input{
    width: 100%;
    height:8%;
    border: none; 
    border-radius: 6px;
    border: 2px solid #151515;
    color: #9F9F9F;

    font-family: Oswald;
    font-size : min(4vh, 4vw);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
  button{
    width: 100%;
    height:8%;
    border: none; 
    border-radius: 6px;
    border: 1px solid #d5d5d5;
    transition-duration: 0.4s;
    background: #151515;
    color: #FFF;

    font-family: Oswald;
    font-size : min(4vh, 4vw);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &:hover {
      background-color: #006BB2;
      opacity: 0.9;
      cursor: pointer;
    }
  }
  a{
    margin-top: 5%;
    color: #FFF;

    font-family: Lato;
    font-size : min(3vh, 3vw);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    &:hover{
      opacity: 0.7;
    }
  }
`;