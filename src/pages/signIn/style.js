import styled from "styled-components"

const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  section {
    background: rgba(238, 238, 238, 0.04);
    border-radius: 15px;
    border: 1px solid black;

    width: 21%;
    padding: 3%;
  }
  h3 {
    font-size: 27px;
    margin-bottom: 0;
    margin-top: 0;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    box-sizing: border-box;

    margin: 0 auto;
    width: 100%;
    height: 330px;
  }
  input {
    height: 27px;
  }

  button {
    width: 45%;
    height: 45px;
    margin: 0 auto;

    border-radius: 12px;
    border: 1px solid #000000;

    font-weight: bold;
    cursor: pointer;

    background: #48a3da;
  }

  img {
    max-width: 630px;
  }
`

export default Container
