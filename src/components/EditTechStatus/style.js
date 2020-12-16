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
    font-size: 16px;
  }

  .status {
    color: #25f;
    font-size: 14px;
  }

  form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    select {
      background-color: #fff;
      padding: 10px;
    }

    select:focus {
      background-color: #fff;
      border-radius: 4px;
    }

    .buttons {
      margin-top: 10px;

      .btn {
        font-family: "Righteous", cursive;
        text-transform: none;
        box-sizing: border-box;
        border: none;
      }

      .change {
        margin-right: 5px;
        background-color: #0a0;
        transition: 0.2s;
      }
      .change:hover {
        background-color: #070;
      }

      .cancel {
        background-color: #a00;
        transition: 0.2s;
      }

      .cancel:hover {
        background-color: #700;
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
`
