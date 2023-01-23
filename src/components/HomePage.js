import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/Context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function HomePage() {
  const { user } = useContext(UserContext);
  const [revenues, setRevenues] = useState([]);
  let balance = 0;
  revenues.map((r) => {
    let type = r.type;
    if (type === "income") {
      let aux = Number(r.value);
      balance += aux;
    } else {
      let aux = Number(r.value);
      balance -= aux;
    }
    return balance;
  });
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const promise = axios.get("http://localhost:5000/revenues", config);
    promise.then((res) => {
      setRevenues([...res.data]);
    });
    promise.catch((err) => {
      alert(err.response.data);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <StyledContainer>
      <StyledHello>
        <h1>Olá, {user.name}</h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ion-icon name="exit-outline" />
        </Link>
      </StyledHello>
      <StyledShowRevenueContainer>
        {revenues.length > 0 ? (
          <>
            {revenues.map((r, index) => {
              return (
                <StyledRevenue
                  key={index}
                  date={r.date}
                  description={r.description}
                  amount={r.value}
                  type={r.type}
                >
                  <h1>{r.date}</h1>
                  <h2>{r.description}</h2>
                  <h3>{Number(r.value).toFixed(2)}</h3>
                </StyledRevenue>
              );
            })}
            <StyledBalance balance={balance}>
              <h1>SALDO</h1>
              <h2>{balance.toFixed(2)}</h2>
            </StyledBalance>
          </>
        ) : (
          <StyledRevenueContainer>
            <p>
              Não há registros de
              <br /> entrada ou saída
            </p>
          </StyledRevenueContainer>
        )}
      </StyledShowRevenueContainer>
      <StyledButtons>
        <Link to="/nova-entrada" style={{ textDecoration: "none" }}>
          <StyledButton>
            <ion-icon name="add-circle-outline" />
            <p>
              Nova
              <br />
              <span>entrada</span>
            </p>
          </StyledButton>
        </Link>
        <Link to="/nova-saida" style={{ textDecoration: "none" }}>
          <StyledButton>
            <ion-icon name="remove-circle-outline" />
            <p>
              Nova
              <br />
              saída
            </p>
          </StyledButton>
        </Link>
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
  width: 100%;
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
const StyledShowRevenueContainer = styled.div`
  width: 90%;
  height: 446px;
  background-color: #ffffff;
  border-radius: 5px;
  border-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
  position: relative;
`;

const StyledRevenue = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-left: 10px;
  padding-top: 5px;
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #c6c6c6;
  }
  h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-left: 5px;
  }
  h3 {
    position: absolute;
    right: 10px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => (props.type === "income" ? "#03AC00" : "#c70000")};
  }
`;
const StyledBalance = styled.div`
  display: flex;
  h1 {
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
  }
  h2 {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: ${(props) => (props.balance > 0 ? "#03AC00" : "#c70000")};
  }
`;
