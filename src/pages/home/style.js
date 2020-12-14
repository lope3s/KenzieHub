import styled from "styled-components";

export const SectionContent = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

export const ImageHomePage = styled.div`
  img {
    width: 750px;
    margin-top: 12vh;
    margin-right: 6vw;
  }
`

export const ContainerLogo = styled.div`
  img {
    width: 210px;
  }
  color: white;
  font-family: "Righteous", cursive;
  font-size: 2.7rem;

  margin-block-end: auto;
  margin-top: 12vh;
`

export const LinkContent = styled.div`
  width: 21vw;
  margin-left: auto;

  a {
    text-decoration: none;
    padding: 1%;

    font-size: 2.1rem;
    font-family: "Righteous", cursive;

    background-color: white;
    border: 3px solid #162864;
    color: #162864;
    border-radius: 3px 12px 3px 9px;

    transition: 0.3s;
  }
  a:hover {
    background-color: #162864;
    border: 3px solid white;
    color: white;
  }
`
export const ContainerRodape = styled.div`
  /* background-color: #293396;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  position: absolute;
  width: 100vw;
  height: 17px;
  top: 756px; */
`
