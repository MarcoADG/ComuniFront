import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const InfoCardStyle = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--primario);
  max-width: 50rem;
  height: 12rem;
  margin: 20px;
  @media screen and (max-width: 1024px) {
    height: 70%;
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }

  .colCard {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-body {
    margin: 10px 10px 10px 0px;
    padding: 10px;
    max-height: 11rem;
    min-height: 11rem;
    min-width: 25rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5%;
    @media screen and (max-width: 1024px) {
      margin: 10px 10px 10px 10px;
      height: 20%;
      width: 60%;
      max-height: 160px;
      min-height: 160px;
      min-width: 15rem;
    }
  }

  .cardImg {
    height: 12rem;
    border-radius: 10%;
    padding: 10px;
    @media screen and (max-width: 1024px) {
      border-radius: 10%;
      height: 100%;
      width: 200px;
    }
    @media screen and (max-width: 600px) {
      border-radius: 10%;
      height: 100%;
      width: 200px;
    }
  }

  .card-title {
    display: flex;
    justify-content: start;
    text-align: center;
    padding: 10px 0px 0px 10px;
    @media screen and (max-width: 600px) {
      font-size: 80%;
    }
    @media screen and (max-width: 1024px) {
      font-size: 80%;
    }
    color: var(--cor-fonte);
  }

  .card-text {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    padding: 10px;
    color: var(--cor-fonte);
    width: fit-content;
    @media screen and (max-width: 1024px) {
      border-radius: 5%;
      font-size: 70%;
    }
  }
`;
