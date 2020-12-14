import styled from "styled-components"

export const Container = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  background-color: #1d2f60;
  padding: 10px;
  min-height: 723px;
  height: max-content;
  width: 671px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  .TechContainer {
    margin-top: 70px;

    .NewTechAcess {
      display: flex;
      align-items: flex-start;
      span {
        font-family: "Roboto", sans-serif;
        color: #fff;
        font-size: 35px;
        margin-right: 63px;
      }
      .NewTechContainer {
        margin-top: 10px;
      }
    }
    .TechsEdits {
      display: flex;
      flex-direction: column;
      align-items: center;
      .TechListConatainer {
        display: flex;
        flex-wrap: wrap;

        .TechContainer {
          display: flex;
          flex-direction: column;
          margin-right: 5px;

          .buttonsContainer {
            display: flex;
            justify-content: space-around;
            align-items: center;

            button {
              width: 30px;
              height: 30px;
              border: none;
              border-radius: 2px;
              background-color: #fff;
              transition: 0.2s;
            }

            button:hover {
              cursor: pointer;
            }

            .RemoveTechButton {
              color: #fff;
              background-color: #f00;
            }
            .RemoveTechButton:hover {
              background-color: #a00;
            }
          }
        }
      }
      .EditTechStatusContainer {
        display: flex;
        border: 1px solid #00000075;
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
    margin-top: 70px;
    .NewWorkAcess {
      display: flex;
      align-items: flex-start;
      span {
        font-family: "Roboto", sans-serif;
        color: #fff;
        font-size: 35px;
        margin-right: 63px;
      }
    }
  }
  .PreferencesContainer {
    margin: 70px;
    span {
      font-family: "Roboto", sans-serif;
      color: #fff;
      font-size: 35px;
      margin-right: 63px;
    }
  }
`
