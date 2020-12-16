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
  }

  .message {
    font-family: "Righteous", cursive;
    width: 100%;
    margin-top: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 5px;
    text-align: center;
  }

  .sucess {
    color: #070;
    border: 1px solid #070;
    background-color: #afa;
  }

  .error {
    color: #700;
    border: 1px solid #700;
    background-color: #faa;
  }
`
