import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  margin-top: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  > .ContainerInputs {
    margin-left: 100px;
    text-align: center;
    width: 477px;
    align-items: center;
    height: 504px;
    background: rgba(238, 238, 238, 0.04);
    border-radius: 15px;
    padding-top: 1%;
    padding-bottom: 5%;
    > div {
      margin-top: 20px;
      margin-bottom: 20px;
      color: white;
      font-size: 25px;
      font-family: "Righteous", cursive;
    }
  }
  > div .Form {
    height: 84%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    font-family: "Righteous", cursive;
  }
  input {
    background-color: white;
    border-radius: 5px;
  }
  > div form .PlaceholderUser {
    margin-left: -220px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  > div form .InputName {
    height: 38px;
    width: 300px;
    border-radius: 5px;
    border: 0;
  }
  > div form .PlaceholderEmail {
    margin-left: -245px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  > div form .PlaceholderPassword {
    margin-left: -225px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  > div form .InputEmail {
    height: 38px;
    width: 300px;
    border-radius: 5px;
    border: 0;
  }
  > div form .InputPassword {
    height: 38px;
    width: 300px;
    border-radius: 5px;
    border: 0;
  }
  > div form .PlaceholderConfirmPassword {
    margin-left: -150px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  > div form .InputConfirmaPassword {
    height: 38px;
    width: 300px;
    border-radius: 5px;
    border: 0;
  }
  > div form p {
    margin: 10px;
  }
  > div form .Submit {
    margin-top: 10px;
    background: #48a3da;
    border: 0;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    width: 150px;
    height: 50px;
    color: white;
    font-size: 20px;
  }
  img {
    margin-right: 81px;
  }
  h3 {
    color: white;
    font-family: "Righteous", cursive;
    font-size: 27px;

    margin-top: 0;
    text-align: center;
  }

  input {
    font-family: "Righteous", cursive;
  }
  input::placeholder {
    font-family: "Righteous", cursive;
  }

  @media screen and (max-width: 289px) {
    margin-top: 3vh;

    .ContainerInputs {
      margin: 0px;
      width: 90%;
      height: 81vh;
      padding-bottom: 9%;
    }
    img {
      display: none;
    }
    h3 {
      text-align: center;
    }
    button {
      margin-top: 0vh !important;
      font-size: 1rem !important;
      width: 50% !important;
      height: 6vh !important;
    }
    input {
      width: 180px;
      height: 1vh;
    }
    .MuiFormControl-root {
      width: 210px !important;
    }
  }
  @media screen and (min-width: 290px) and (max-width: 360px) {
    margin-top: 6vh;

    .ContainerInputs {
      margin: 0px;
      width: 90%;
      height: 72vh;
      padding-bottom: 18%;
    }
    img {
      display: none;
    }
    img {
      display: none;
    }
    h3 {
      text-align: center;
    }
    button {
      margin-top: 0vh !important;
    }
    .MuiFormControl-root {
      width: 270px !important;
    }
  }

  @media screen and (min-width: 361px) and (max-width: 640px) {
    margin-top: 6vh;

    .ContainerInputs {
      margin: 0px;
      width: 90%;
      height: 72vh;
      padding-bottom: 9%;
    }

    img {
      display: none;
    }
    h3 {
      text-align: center;
    }
    button {
      margin-top: 0vh !important;
    }
  }
  @media screen and (min-width: 640px) and (max-width: 768px) {
    justify-content: center;
    margin-top: 12vh;

    img {
      display: none;
    }
    .ContainerInputs {
      height: 51vh;
      padding-bottom: 12%;
      margin: 0 auto;
    }
    .MuiFormControl-root {
      margin-top: 2% !important;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) and (min-height: 1200px) {
    flex-direction: column;

    img {
    }
    .MuiFormControl-root {
      margin-top: 2% !important;
    }
    .ContainerInputs {
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    .MuiFormControl-root {
      margin-top: 2% !important;
    }
  }
`
