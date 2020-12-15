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
    margin-left: 88.5px;
    text-align: initial;
  }

  input {
    font-family: "Righteous", cursive;
  }
  input::placeholder {
    font-family: "Righteous", cursive;
  }
`
