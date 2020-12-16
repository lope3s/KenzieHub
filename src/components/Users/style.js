import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.06);
  margin-bottom: 3vh;
  height: 10vh;
  justify-content: space-around;

  span{
    margin: 0 1vw 0 3vw;
    overflow-y: auto;
    overflow-x: auto;
    width: 15vw;
    font-family:Roboto, sans-serif
  }
  
  img{
    width:40px;
    height:40px;
    border-radius:100%;
  }
`;