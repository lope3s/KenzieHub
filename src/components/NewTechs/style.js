import styled from "styled-components"

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 10px;
      width: 100%;
      background-color: #fff;
      border-radius: 4px;
      font-family: "Righteous", cursive;
    }

    select {
      padding: 10px;
      width: 100%;
      font-family: "Righteous", cursive;
      background-color: #fff;
    }

    select:focus {
      background-color: #fff;
      border-radius: 4px;
    }
    .buttons {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .MuiButtonBase-root span {
        font-size: 12px;
      }
      .MuiButtonBase-root.add {
        margin-right: 10px;
        background-color: #0a0;
        font-weight: 700;
      }
      .MuiButtonBase-root.cancel {
        background-color: #f00;
        color: #fff;
        font-weight: 700;
      }
    }
    .message {
      font-family: "Righteous", cursive;
      padding: 5px;
      width: 20vw;
      box-sizing: border-box;
      border: 2px solid #fff;
      border-radius: 5px;
      margin-top: 10px;

      font-size: 14px;
    }
    .sucess {
      color: #060;
      background-color: #afa;
      border-color: #060;
    }

    .error {
      color: #600;
      background-color: #faa;
      border-color: #600;
    }
  }
`
