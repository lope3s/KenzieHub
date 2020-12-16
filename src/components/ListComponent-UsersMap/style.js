import styled from "styled-components";

export const UsersContainer = styled.div`
  margin: 0 13vw 0 13vw;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  font-family:Roboto, sans-serif;
  height: 80vh;
  overflow-y: auto;

  @media (min-width: 320px) and (max-width: 768px){
    margin: 0px;
  }
`;