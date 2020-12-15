import styled from "styled-components"

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 10px;
      width: 100%;
      color: #fff;
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
`
