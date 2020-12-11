import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  min-width: 440px;
  width: 100%;
  height: 40px;

  margin-top: 0.5rem;

  img{
    width:40px;
    height:40px;
    border-radius:100%;
  }

  span {
    height: 40px;
    margin: 0 1rem;

    flex: 1 1 0;

    display: flex;
    align-items: center;

    overflow-y: hidden;
    overflow-x: auto;

    ::-webkit-scrollbar {
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: #ddd;
    }
    ::-webkit-scrollbar-thumb {
      background: #bbb;
      border-radius: 10px;
    }

    :first-child {
      flex: 0 0 2rem;
    }
    :last-child {
      flex: 0 0 6rem;

      color: #4468d9;

      cursor: pointer;
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