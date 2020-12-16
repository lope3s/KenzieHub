import styled from "styled-components"

const Container = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 12vh;

  section {
    background: rgba(238, 238, 238, 0.04);
    border-radius: 15px;

    width: 21%;
    padding: 3%;
  }
  h3 {
    font-size: 27px;
    font-family: "Righteous", cursive;
    color: white;
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
    height: 18px;

    padding-top: 27px;

    border-radius: 5px;
    background-color: white;

    font-family: "Righteous", cursive;
  }
  input::placeholder {
    font-size: 1.2rem;
    font-family: "Righteous", cursive;
  }

  button {
    width: 45%;
    height: 45px;
    margin: 0 auto;

    border-radius: 12px;
    border: 1px solid #000000;

    font-family: "Righteous", cursive;
    font-size: 1.3rem;
    letter-spacing: 2px;
    cursor: pointer;

    background: #48a3da;
  }
  img {
    max-width: 630px;
  }

  @media screen and (max-width: 510px) {
    flex-direction: column;
    margin-top: 0px;

    section {
      width: 72%;
    }
    img {
      max-width: 270px;
    }
  }
  @media screen and (min-width: 540px) and (max-width: 790px) {
    flex-direction: column;
    margin-top: 0px;

    section {
      width: 42%;
      margin-left: auto;
      margin-right: 12%;
    }
    img {
      max-width: 420px;
      margin-right: auto;
      margin-left: 6%;
    }
  }
  @media screen and (min-width: 810px) and (max-width: 1024px) {
    section {
      width: 30%;
    }
    img {
      max-width: 510px;
    }
  }
`

export default Container
