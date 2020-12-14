import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  > .ContainerInputs {
    margin-left: 100px;
    text-align: center;
    width: 500px;
    align-items: center;
    height: 550px;
    background: rgba(238, 238, 238, 0.04);
    border-radius: 15px;
    > div {
      margin-top: 20px;
      margin-bottom: 20px;
      color: white;
      font-size: 25px;
      font-family: "Roboto", sans-serif;
    }
  }
  > div .Form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: "Roboto", sans-serif;
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
    background-color: white;
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
    background-color: white;
  }
  > div form .InputPassword {
    height: 38px;
    width: 300px;
    border-radius: 5px;
    border: 0;
    background-color: white;
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
    background-color: white;
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
`;
