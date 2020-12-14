import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;

  > div div img {
    width: 150px;
    height: 150px;
    display: flex;
    border-radius: 50%;
  }

  > div div .Background {
    > span {
      color: white;
      margin-top: 100px;
      font-size: 25px;
      font-family: "Montserrat", sans-serif;
    }
    background-color: #081648;
    background-size: cover;

    position: absolute;
    top: 10%;

    height: 30%;
    width: 25%;

    left: 37.5%;
    right: 37.5%;

    z-index: -2;
    border-radius: 5px;

    justify-content: center;
    display: flex;
  }
`;
export const ContainerContact = styled.span`
  > span img {
    width: 50px;
    height: 50px;
  }
`;
