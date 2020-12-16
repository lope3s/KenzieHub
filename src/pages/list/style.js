import styled from "styled-components";

export const UsersPageContainer = styled.div`
  width: 100vw;
  height: 75vh;
  overflow-y: auto;
`;
export const PaginationContainer = styled.div`
  margin: 0 5vw 0 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content:  center;

  width: 100vw;

  button {
    margin-top: 1.3vh;
    margin-left: 3vw;
    height: 9vh;
    align-self: center;
    background-color: #48A3DA;
    min-width: 15vw;
    border-radius: 10px;
    font-family:"Righteous", cursive;

   :hover{
    background-color: #48A3DA ;
    border: solid 1px #fff;
   }
  }

  .MuiInputBase-root{
    background-color: #fff;
    border-radius: 10px;
  }

  input {
    width: 55vw;
    font-family:"Righteous", cursive;
  }
`

export const UsersContainerTitle = styled.div`
  margin: 0 13vw 0 13vw;
  display:flex;
  justify-content: space-around;
  color: #fff;
  font-family:"Righteous", cursive;

`