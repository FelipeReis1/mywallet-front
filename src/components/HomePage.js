import { useContext } from "react";
import UserContext from "../contexts/Context";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function exit() {
    navigate("/");
  }
  function newIncome() {
    navigate("/nova-entrada");
  }
  function newOutcome() {
    navigate("/nova-saida");
  }

  return (
    <StyledContainer>
      <StyledHello>
        <h1>Olá, {user.name}</h1>
        <ion-icon onClick={exit} name="exit-outline" />
      </StyledHello>
      <StyledRevenueContainer>
        <p>
          Não há registros de
          <br /> entrada ou saída
        </p>
      </StyledRevenueContainer>
      <StyledButtons>
        <StyledButton onClick={newIncome}>
          <ion-icon name="add-circle-outline" />
          <p>
            Nova
            <br />
            <span>entrada</span>
          </p>
        </StyledButton>
        <StyledButton onClick={newOutcome}>
          <ion-icon name="remove-circle-outline" />
          <p>
            Nova
            <br />
            saída
          </p>
        </StyledButton>
      </StyledButtons>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8c11be;
`;

const StyledHello = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
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
  }
  ion-icon {
    color: #ffffff;
    font-size: 32px;
  }
`;

const StyledRevenueContainer = styled.div`
  width: 90%;
  height: 446px;
  background-color: #ffffff;
  border-radius: 5px;
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 13px;
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
  }
`;
const StyledButtons = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 16px;
`;

const StyledButton = styled.button`
  width: 155px;
  height: 114px;
  background-color: #a328d6;
  border-radius: 5px;
  border-style: none;
  display: flex;
  flex-direction: column;
  padding: 8px;
  box-sizing: border-box;
  ion-icon {
    color: #ffffff;
    font-size: 27px;
    margin-bottom: 36px;
  }
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
    width: 40px;
    margin-left: 4px;
  }
`;
