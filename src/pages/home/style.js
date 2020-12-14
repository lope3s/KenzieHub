import styled from "styled-components";

export const Container = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  border-bottom: 2px solid black;
  > div {
    > div {
      height: 50px;
      margin: 15px 15px 0 15px;

      > button {
        cursor: pointer;
        color: white;
        font-size: 18px;
        background-color: transparent;

        border: 0;
        margin: 0px;

        width: 115px;
      }
    }
    display: flex;
    justify-content: space-between;
  }
`;
export const ContainerImage = styled.div`
  color: #3874ac;
  font-family: "Montserrat", sans-serif;
  font-size: 39px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 28vh;
  > div {
    margin-top: 20px;
  }
`;
export const ContainerRodape = styled.div`
  background-color: #293396;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  position: absolute;
  width: 100vw;
  height: 17px;
  top: 756px;
`;
