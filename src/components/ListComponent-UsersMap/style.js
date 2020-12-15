import styled from "styled-components";

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% - 2rem);
  height: 80vh;

  border: 1px solid #ddd;
  border-radius: 5px;

  margin: 1rem auto;

  overflow-x: auto;
`;

export const UsersContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  min-width: 440px;
  width: 100%;
  min-height: 40px;
  background-color: #ddd;

  border-radius: 5px 5px 0 0;
  span {
    height: 40px;
    padding: 0 1rem;

    flex: 1 1 0;

    display: flex;
    align-items: center;

    :first-child {
      flex: 0 0 2rem;
    }
    :last-child {
      flex: 0 0 6rem;
    }
    @media (min-width: 640px) {
      :first-child {
        flex: 0 0 4rem;
      }
      :last-child {
        flex: 0 0 8rem;
      }
    }
  }
`;
