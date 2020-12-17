import styled from "styled-components"

export const Container = styled.div`
  width: 20vw;
  box-sizing: border-box;
  background-color: #00000075;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Righteous", cursive;
  }

  .title {
    color: #fff;
    font-size: 25px;
  }

  .description {
    color: #25f;
    font-size: 20px;
  }

  .deployUrl {
    color: #aa0;
    font-size: 18px;
  }

  form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* background-color: lightcoral; */
    width: 100%;

    .InputField {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    input {
      background-color: #fff;
      padding: 10px;
      border-radius: 4px;
      font-family: "Righteous", cursive;
      width: 150px;
    }

    .btn {
      font-family: "Righteous", cursive;
    }

    .change {
      margin-top: 5px;
      margin-left: 5px;
      background-color: #48a3da;
    }

    .cancel {
      background-color: #f00;
      span {
        font-family: "Righteous", cursive;
      }
    }
  }

  .message {
    width: 100%;
    margin-top: 5px;
    text-align: center;
  }

  .sucess {
    color: #070;
  }

  .error {
    color: #700;
  }

  @media screen and (max-width: 640px) {
    width: 80vw;
  }
`
