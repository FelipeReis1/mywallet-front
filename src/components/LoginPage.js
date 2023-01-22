import axios from "axios";
import { useContext, useState } from "react";

import UserContext from "../contexts/Context";
import { Link, useNavigate } from "react-router-dom";
import mywallet from "../assets/img/mywallet.png";
import styled from "styled-components";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    const request = {
      email: email,
      password: password,
    };
    const promise = axios.post("http://localhost:5000/sign-in", request);
    promise.then((res) => {
      setUser(res.data);
      navigate("/home");
    });
    promise.catch(() => {
      alert("Você não possui uma conta, cadastre-se!");
    });
  }

  return (
    <StyledContainer>
      <StyledLogo src={mywallet} alt={"MyWallet"} />
      <StyledForm onSubmit={login}>
        <input
          required
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton type="submit">Entrar</StyledButton>
        <Link to={"/cadastro"} style={{ textDecoration: "none" }}>
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </StyledForm>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8c11be;
`;
const StyledLogo = styled.img`
  width: 147px;
  height: 32px;
`;
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  input {
    width: 326px;
    height: 58px;
    background-color: #ffffff;
    border-radius: 5px;
    border-style: none;
    margin-bottom: 13px;
    &::placeholder {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #000000;
      padding-left: 15px;
    }
  }
  p {
    height: 18px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;

const StyledButton = styled.button`
  width: 326px;
  height: 46px;
  background-color: #a328d6;
  border-radius: 5px;
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  margin-bottom: 36px;
`;
