import styled from "styled-components"

export const Container = styled.div`
  /* background-color: red; */
  form {
    display: flex;
    flex-direction: column;

    .inputFieldBio {
      flex-direction: column;
    }
    .inputField {
      box-sizing: border-box;
      padding: 10px;
      width: 100%;
      margin-top: 5px;
      border: 1px solid #1d3f7075;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        padding: 10px;
        width: 150px;
        background-color: #fff;
        border-radius: 4px;
        font-family: "Righteous", cursive;
      }

      label {
        color: #fff;
        font-family: "Righteous", cursive;
      }
      select {
        padding: 10px;
        width: 150px;
        background-color: #fff;
      }
      select:focus {
        border-radius: 4px;
      }

      .bio {
        background-color: #fff;
        border-radius: 4px;
        textarea {
          font-family: "Righteous", cursive;
        }
      }

      .MuiButtonBase-root {
        background-color: #48a3da;
      }

      .MuiButtonBase-root span {
        font-size: 12px;
        text-transform: none;
        font-weight: 700;
        font-family: "Righteous", cursive;
      }

      div.MuiFormControl-root div.MuiInputBase-root input.MuiInputBase-input {
        background-color: #fff;
        font-family: "Righteous", cursive;
      }
    }
  }
`
