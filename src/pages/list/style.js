import styled from "styled-components"

export const UsersPageContainer = styled.div`
  width: 100vw;
  height: 75vh;
  overflow-y: auto;
  overflow-x: hidden;
  @media (min-width: 320px) and (max-width: 768px) {
    height: 70vh;
  }
`
export const PaginationContainer = styled.div`
  margin: 0 5vw 0 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav > ul > li > button {
    color: #fff;
  }

  .MuiInputBase-root {
    color: #fff;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    margin: 2vw;

    nav > ul > li > button {
      min-width: 0.6rem;
    }
  }
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;

  button {
    margin-top: 1.3vh;
    margin-left: 3vw;
    height: 56px;
    align-self: center;
    background-color: #48a3da;
    min-width: 15vw;
    border-radius: 10px;
    font-family: "Righteous", cursive;

    :hover {
      background-color: #48a3da;
      border: solid 1px #fff;
    }
  }

  .MuiInputBase-root {
    background-color: #fff;
    border-radius: 10px;
  }

  input {
    width: 55vw;
    font-family: "Righteous", cursive;
  }
`

export const UsersContainerTitle = styled.div`
  margin: 0 13vw 0 13vw;
  display: flex;
  justify-content: space-around;
  color: #fff;
  font-family: "Righteous", cursive;

  @media (min-width: 320px) and (max-width: 768px) {
    margin: 0px;
  }
`
