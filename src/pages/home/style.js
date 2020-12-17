import styled from "styled-components"

export const SectionContent = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-height: 660px) and (max-width: 425px) {
    margin-top: -6vh;
  }
`

export const ImageHomePage = styled.div`
  img {
    width: 750px;
    margin-top: 12vh;
    margin-right: 6vw;
  }

  @media screen and (max-width: 374px) {
    img {
      max-width: 300px;
      margin-top: 0px;
    }
  }
  @media screen and (min-height: 650px) and (max-width: 425px) {
    img {
      max-width: 240px;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 540px) {
    img {
      width: 360px;
      margin-top: 0px;
      margin-right: 0px;
    }
  }
  @media screen and (min-width: 541px) and (max-width: 810px) {
    margin-left: auto;
    margin-right: 18px;

    img {
      width: 510px;
      margin-top: 0px;
      margin-right: 0px;
    }
  }
  @media screen and (min-height: 1300px) and (max-width: 1025px) {
    img {
      width: 600px;
    }
  }
  @media screen and (min-width: 820px) and (max-width: 1024px) {
    img {
      width: 480px;
      margin-top: 12vh;
      margin-right: 8vw;
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1300px) {
    img {
      max-width: 510px;
    }
  }
  @media screen and (min-width: 1301px) {
    margin-left: auto;

    img {
      margin-right: 15vw;
      margin-top: 12vh;
    }
  }
`

export const ContainerLogo = styled.div`
  color: white;
  font-family: "Righteous", cursive;
  font-size: 2.7rem;

  margin-block-end: auto;
  margin-top: 12vh;

  img {
    width: 210px;
  }

  @media screen and (max-width: 374px) {
    font-size: 1.5rem;
    margin-top: 3vh;

    img {
      max-width: 99px;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 540px) {
    font-size: 1.8rem;
    margin-top: 9vh;

    img {
      width: 150px;
    }
  }
  @media screen and (min-width: 541px) and (max-width: 810px) {
    margin-top: 4vh;
    margin-right: auto;
    padding-left: 9%;

    margin-block-end: 0px;
  }
  @media screen and (min-width: 820px) and (max-width: 1024px) {
    margin-top: 3%;
    margin-right: auto;
    margin-left: 3%;

    font-size: 2.5rem;
  }
  @media screen and (min-width: 1025px) and (max-width: 1300px) {
    margin-left: 0%;
    margin-top: 3%;
  }
  @media screen and (min-width: 1301px) {
    margin-block-end: auto;
    margin-top: 9vh;
    margin-left: auto;
  }
`

export const LinkContent = styled.div`
  width: 21vw;
  margin-left: auto;

  a {
    text-decoration: none;
    padding: 2%;

    font-size: 2.1rem;
    font-family: "Righteous", cursive;

    background: rgba(238, 238, 238, 0.09);
    border-radius: 15px;
    border: 3px solid #162864;
    color: #162864;

    transition: 0.3s;
  }
  a:hover {
    background-color: #162864;
    border: 3px solid white;
    color: white;
  }

  @media screen and (max-width: 374px) {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    a {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 540px) {
    width: 90%;
    margin: 0 auto;
    text-align: center;

    a {
      font-size: 1.8rem;
    }
  }
  @media screen and (min-width: 541px) and (max-width: 810px) {
    width: 96%;
    margin-left: auto;
    margin-top: -9%;

    a {
      font-size: 1.8rem;
    }
  }
  @media screen and (min-width: 820px) and (max-width: 1024px) {
    width: 81%;
    margin-left: auto;
    padding-top: 15%;
  }
  @media screen and (min-width: 1025px) and (max-width: 1300px) {
    width: 30%;
    padding-top: 9%;
    margin-right: auto;
  }
  @media screen and (min-width: 1301px) {
    margin-right: 3%;
    padding-top: 4%;
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
