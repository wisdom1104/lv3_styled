import styled from "styled-components";

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

//Green Button
export const LageBtnGreen = styled.button`
  border: 3px solid rgb(85, 239, 196);
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 200px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  &:active {
    background-color: rgb(230, 230, 230);
  }
`;

export const MediumBtnGreen = styled.button`
  background-color: rgb(85, 239, 196);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 130px;
  border-radius: 8px;
  cursor: pointer;
  &:active {
    background-color: rgb(80, 180, 150);
  }
`;

export const SmallBtnGreen = styled.button`
  background-color: rgb(85, 239, 196);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100px;
  border-radius: 8px;
  cursor: pointer;
  &:active {
    background-color: rgb(80, 180, 150);
  }
`;

//Red Button
export const LageBtnRed = styled.button`
  border: 3px solid rgb(250, 177, 160);
  background-color: rgb(255, 255, 255);
  color: rgb(214, 48, 49);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 200px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  &:active {
    background-color: rgb(230, 230, 230);
  }
`;

export const MediumBtnRed = styled.button`
  background-color: rgb(250, 177, 160);
  color: rgb(214, 48, 49);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 130px;
  border-radius: 8px;
  cursor: pointer;
  &:active {
    background-color: rgb(250, 115, 90);
  }
`;

export const SmallBtnRed = styled.button`
  background-color: rgb(250, 177, 160);
  color: rgb(214, 48, 49);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100px;
  border-radius: 8px;
  cursor: pointer;
  &:active {
    background-color: rgb(250, 115, 90);
  }
`;
