import styled, { css } from "styled-components"

export const Container = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  background-color: #1d2f60;
  padding: 10px;
  /* min-height: 723px; */
  max-height: 830px;
  width: 671px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  .TechContainer {
    margin-top: 20px;
    width: 100%;

    .NewTechAcess {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      .SessionName {
        font-family: "Righteous", cursive;
        color: #fff;
        font-size: 20px;
        margin-right: 63px;
      }
    }
    .TechsEdits {
      /* background-color: lightcoral; */
      /* display: flex;
      flex-direction: column;
      align-items: center; */
      .TechListContainer {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        /* background-color: lightblue; */
        box-sizing: border-box;
        padding: 5px;
        /* border: 1px solid #1d3f70; */
        border-radius: 10px;

        .TechContainer {
          box-sizing: border-box;
          background-color: #1d3f7075;
          border-radius: 5px;
          padding: 5px;
          width: 150px;
          display: flex;
          flex-direction: column;
          margin-right: 5px;

          .TechInfo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: "Righteous", cursive;

            .title {
              color: #fff;
              font-size: 16px;
            }

            .status {
              color: #1d4ff0;
              font-size: 14px;
            }
          }

          .buttonsContainer {
            margin-top: 5px;
            display: flex;
            justify-content: space-around;
            align-items: center;

            button {
              box-sizing: border-box;
              width: 30px;
              height: 30px;
              border: 1px solid #000;
              border-radius: 2px;
              background-color: #fff;
              transition: 0.2s;
            }

            button:hover {
              cursor: pointer;
            }

            .EditTechStatusButton {
              background-color: #e5e5e5;
              color: #1d4ff0;
              border-color: #a2a2a2;
            }
            .EditTechStatusButton:hover {
              background-color: #a2a2a2;
            }
            .RemoveTechButton {
              color: #fff;
              background-color: #f00;
              border-color: #a00;
            }
            .RemoveTechButton:hover {
              background-color: #a00;
            }
          }
        }
      }
      .EditTechStatusContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        padding: 5px;
        border-radius: 5px;

        .CloseEditTechStatus {
          border-radius: 50%;
          width: 15px;
          height: 15px;
          border: none;
          color: #fff;
          background-color: #f00;
          font-size: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .CloseEditTechStatus:hover {
          cursor: pointer;
        }
      }
    }
  }
  .WorksContainer {
    margin-top: 20px;
    width: 100%;
    .NewWorkAcess {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      .SessionName {
        font-family: "Righteous", cursive;
        color: #fff;
        font-size: 20px;
        margin-right: 63px;
      }
    }
    .WorkCardsContainer {
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 10px;

      /* border: 1px solid #1d3f70; */
      border-radius: 10px;

      .WorkCardContainer {
        width: 45%;
        min-height: 150px;
        margin: 5px;
        background-color: #1d3f7075;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Righteous", cursive;

        .title {
          color: #fff;
          font-size: 20px;
        }

        .description {
          color: #1d4ff0;
        }

        .url {
          text-decoration: outline;
          color: #aa0;
          font-size: 14px;
        }

        .buttons {
          margin-top: 5px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .edit {
            box-sizing: border-box;
            border: 1px solid #fff;
            width: 30px;
            height: 30px;
            color: #1d4ff0;
            border-radius: 2px;
            margin-right: 10px;
            background-color: #fff;
            cursor: pointer;
          }

          .delete {
            box-sizing: border-box;
            border: 1px solid #f00;
            width: 30px;
            height: 30px;
            color: #fff;
            border-radius: 2px;
            cursor: pointer;
            background-color: #f00;
          }
        }
      }
    }
  }
  .preferencesDivisor {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    .PreferencesContainer {
      margin: 20px;
      width: 330px;
      .title {
        font-family: "Righteous", cursive;
        color: #fff;
        font-size: 20px;
        margin-right: 63px;
      }
    }
    img {
      width: 300px;
    }
  }
  .closeContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .close {
      background-color: #0a0;
      color: #fff;
      margin-bottom: 20px;
      transition: 0.2s;
      span {
        font-family: "Righteous", cursive;
        text-transform: none;
      }
    }
    .close:hover {
      background-color: #0a0;
    }
  }

  @media screen and (max-width: 640px) {
    width: 85vw;
    height: 80vh;

    .iDRUQh {
      width: 0;
      height: 0;
    }

    .TechContainer {
      margin: 5px;

      .TechListContainer {
        margin: 0;
      }
    }
    .preferencesDivisor {
      flex-direction: column;
      align-items: center;

      .PreferencesContainer {
        width: 100%;
      }

      img {
        display: none;
      }
    }
  }
  @media screen and (min-width: 640px) and (max-width: 768px) {
    height: 90vh;
    width: 90vw;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    height: 90vh;
  }
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    height: 90vh;
  }
`
