import styled from "styled-components"

export const Container = styled.div`
  /* background-color: red; */
  form {
    display: flex;
    flex-direction: column;
    .inputField {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        padding: 10px;
        width: 150px;
        color: #fff;
      }

      select {
        padding: 10px;
        width: 150px;
        color: #fff;
      }

      .MuiButtonBase-root {
        background-color: #48a3da;
      }

      .MuiButtonBase-root span {
        font-size: 12px;
        text-transform: none;
        font-weight: 700;
      }
    }
  }
`
