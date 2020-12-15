import styled, { css } from "styled-components";

export const Main = styled.div`
  ${({ publisher }) =>
    publisher &&
    css`
      background-color: #00000075;
    `}
`;

export const Container = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  > div div img {
    margin-top: 15px;
    width: 150px;
    height: 150px;
    display: flex;
    border-radius: 50%;
    z-index: 1;
  }
  > div div div {
    > span {
      color: white;
      margin-top: 100px;
      font-size: 25px;
      font-family: "Righteous", sans-serif;
    }
    background-color: rgba(258, 258, 258, 0.06);
    background-size: cover;

    position: absolute;
    top: 15%;

    height: 20%;
    width: 15%;

    left: 42.5%;
    right: 42.5%;

    z-index: 0;
    border-radius: 5px;

    justify-content: center;
    display: flex;
  }
`;

export const ContainerDiv = styled.div`
  > .Botao {
    margin-top: 35px;
    background-color: transparent;
    color: white;
    border-radius: 50px;
    border: 0;
    > svg {
      width: 45px;
      height: 45px;
    }
  }
  .Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  > div div div .About {
    width: 90vw;
    color: white;
    font-family: "Righteous", sans-serif;
    font-size: 55px;
    display: flex;
  }
  > div .AboutContainer {
    width: 90vw;
    > div .AboutBio {
      font-size: 25px;
    }
    > .PersonalDetails {
      display: flex;
      justify-content: space-between;
      width: 100vw;
      height: 100px;
      > div .Info div {
        margin-left: 25px;
      }
      > .Techs {
        font-size: 16px;
        margin-right: 25px;
        > div b {
          font-size: 25px;
        }
      }
    }
    color: white;
    font-family: "Righteous", sans-serif;
    background-color: rgba(258, 258, 258, 0.06);
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    margin-top: 110px;
    text-align: center;
    > div div {
      display: flex;
      flex-direction: column;
    }
  }
`;
export const ContainerWork = styled.div`
  font-size: 25px;
  color: white;
  font-family: "Righteous", sans-serif;
  margin-top: 50px;
  width: 45vw;
  height: 150px;
  border-radius: 5px;
  background-color: rgba(258, 258, 258, 0.06);
  display: flex;
  flex-direction: column;
  text-align: center;
  > div .MapWorks {
    > div div {
      font-size: 25px;
    }
  }
`;
