import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function IncomePage() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  function home() {
    navigate("/home");
  }

  return (
    <StyledContainer>
      <StyledTitle>
        <h1>Nova Entrada</h1>
      </StyledTitle>
      <StyledForm onSubmit={""}>
        <input
          required
          type="text"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <StyledButton type="submit" onClick={home}>
          Salvar Entrada
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8c11be;
`;

const StyledTitle = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 22px;
  h1 {
    height: 31px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
    margin-left: 6px;
  }
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
