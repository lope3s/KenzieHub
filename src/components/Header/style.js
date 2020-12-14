import styled from "styled-components"

export const HeaderContent = styled.header`
  width: 100vw;
  height: 50px;

  padding: 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  border-bottom: 3px solid #06023ab5;

  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 25px;
`

export const LinksContent = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  align-items: flex-end;

  .link-home {
    margin-right: auto;
  }
  button {
    cursor: pointer;
    color: white;
    font-size: 18px;
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
