import styled from "styled-components"

export const HeaderContent = styled.header`
  width: 100vw;
  height: 45px;

  padding: 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  border-bottom: 3px solid #03033a30;

  color: white;
  font-weight: bold;
  font-size: 1.8rem;
`

export const LinksContent = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  align-items: flex-end;

  .link-home {
    margin-right: auto;
  }

  .profile {
    height: 100%;

    a {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
    img {
      width: 40px;
      border-radius: 100%;
    }
    /* border-radius: 100%; */
  }
  button {
    cursor: pointer;
    color: white;
    font-size: 18px;
    font-family: "Righteous", cursive;

    background-color: transparent;

    border: 0;
    margin: 0px;
    width: 90px;

    transition: 0.3s;
  }
  button:hover {
    border-bottom: 3px solid lightblue;
  }
`
