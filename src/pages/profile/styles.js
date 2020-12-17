import styled, { css } from "styled-components"

export const Main = styled.div`
  height: 91vh;
  ${({ publisher }) =>
    publisher &&
    css`
      background-color: #00000075;
    `};
`

export const Container = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  .username {
    margin: 0 0 2vh 0;
  }
  @media (max-width: 500px) {
    > div {
      justify-content: space-between;
      width: 90vw;
    }
  }
  > div div {
    @media (max-width: 770px) {
      margin-bottom: 110px;
    }
    @media (max-width: 370px) {
      margin-bottom: 0;
    }
  }
  > div div img {
    margin-top: 15px;
    width: 150px;
    height: 150px;
    @media (max-width: 600px) {
      margin-top: 0;
      margin-bottom: 100px;
    }
    @media (max-width: 600px) {
      margin-top: 17px;
      margin-bottom: 100px;
    }
    @media (max-width: 500px) {
      height: 120px;
      width: 120px;
      margin-bottom: 5vh;
    }

    display: flex;
    border-radius: 50%;
  }
  > div div div {
    > span {
      color: white;
      margin-top: 90px;
      font-size: 25px;
      font-family: "Righteous", sans-serif;

      @media (max-width: 1300px) {
        margin-top: 50px;
      }
      @media (max-width: 770px) {
        font-size: 20px;
        margin-top: 60px;
        margin-left: 15px;
      }
      @media (max-width: 600px) {
        font-size: 20px;
        margin-top: 15px;
        margin-left: 15px;
      }
      @media (max-width: 500px) {
        font-size: 20px;
        margin-top: 0px;
      }
      @media (max-width: 400px) {
        font-size: 20px;
        margin-top: 0px;
        margin-left: 80px;
      }
      @media (max-width: 300px) {
        font-size: 20px;
        margin-top: 0px;
        margin-left: 80px;
      }
    }
    background-color: rgba(258, 258, 258, 0.06);
    background-size: cover;

    position: absolute;
    top: 18%;

    height: 20%;
    @media (max-width: 1300px) {
      height: 15%;
    }
    width: 15%;

    left: 42.5%;
    right: 42.5%;

    border-radius: 5px;

    justify-content: center;
    display: flex;
    @media (max-width: 800px) {
      width: 25%;
      top: 12%;
      height: 15%;
      left: 37.5%;
      right: 37.5%;
    }
    @media (max-width: 770px) {
      width: 25%;
      top: 30%;
      height: 13%;
      left: 37.5%;
      right: 37.5%;
    }
    @media (max-width: 500px) {
      width: 25%;
      top: 15%;
      height: 0%;
      left: 37.5%;
      right: 37.5%;
    }
    @media (max-width: 600px) {
      background-color: transparent;
    }
  }
`

export const ContainerDiv = styled.div`
  .Botao {
    background-color: transparent;
    color: white;
    border-radius: 50px;
    border: 0;
    > svg {
      width: 30px;
      height: 30px;
    }
  }
  .Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
      height: 83vh;
    }
  }
  > div div div .About {
    width: 90vw;
    color: white;
    font-family: "Righteous", sans-serif;
    font-size: 55px;
    display: flex;
    @media (max-width: 800px) {
      font-size: 0.9rem;
    }
  }
  .AboutContainer > div {
    overflow-x: auto;
  }
  .About {
    color: #40a1f7 !important;
  }
  b {
    color: #40a1f7;
  }
  .works {
    color: #40a1f7;
    @media (max-width: 800px) {
      font-size: 0.7rem;
    }
  }
  .Techs {
    overflow-y: auto;
    max-height: 18vh;
  }
  > div .AboutContainer {
    width: 90vw;
    @media (max-width: 600px) {
      margin-bottom: 110px;
    }
    .buttonContainer {
      padding: 5px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    > div .AboutBio {
      font-size: 1em;
      @media (max-width: 800px) {
        font-size: 0.7rem;
      }
    }
    > .PersonalDetails {
      display: flex;
      justify-content: space-between;
      width: 100vw;
      padding: 3%;
      @media (max-width: 800px) {
        width: 90vw;
        font-size: 0.7rem;
      }
      > div .Info div {
        margin-left: 25px;
        @media (max-width: 800px) {
          font-size: 0.7rem;
        }
      }
      > .Techs {
        font-size: 13px;
        margin-right: 25px;
        margin-top: -20px;
        > div div {
          margin-bottom: 0;
          @media (max-width: 800px) {
            font-size: 0.7rem;
          }
        }

        > div b {
          font-size: 25px;
          @media (max-width: 800px) {
            font-size: 0.7rem;
            margin-top: 20px;
          }
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
    @media (max-width: 800px) {
      margin-top: 0px;
      font-size: 15px;
    }

    > div div {
      display: flex;
      flex-direction: column;
    }
  }
`
export const ContainerWork = styled.div`
  font-size: 25px;
  color: white;
  font-family: "Righteous", sans-serif;
  margin-top: 50px;
  width: 45vw;
  border-radius: 5px;
  @media (max-width: 800px) {
    font-size: 20px;
    margin-top: -50px;
    width: 60vw;
  }
  @media (max-width: 770px) {
    font-size: 20px;
    margin-top: -100px;
  }

  background-color: rgba(258, 258, 258, 0.06);
  display: flex;
  flex-direction: column;
  text-align: center;
  > div .MapWorks {
    @media (max-width: 800px) {
      font-size: 0.7rem;
    }
    > div div {
      font-size: 25px;
      @media (max-width: 800px) {
        font-size: 0.7rem;
      }
    }
  }
  @media (max-width: 770px) {
    font-size: 20px;
    margin-top: 50px;
    width: 60vw;
  }
  @media (max-width: 550px) {
    font-size: 20px;
    margin-top: -50px;
    width: 60vw;
  }
`
