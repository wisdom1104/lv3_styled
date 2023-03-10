import React from "react";
import styled from "styled-components";
import {
  ColumnBox,
  RowBox,
  LageBtnGreen,
  LageBtnRed,
  MediumBtnGreen,
  MediumBtnRed,
  SmallBtnGreen,
  SmallBtnRed,
} from "../GlobalStyles";
import { FaChevronRight } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";

function Buttons() {
  const onclickLagePrimaryButton = () => {
    alert("버튼을 만들어보세요");
  };
  const onclickLageNegativeButton = () => {
    prompt("어렵나요?");
  };

  return (
    <ColumnBox>
      <h1>Button</h1>
      <RowBox>
        <LageBtnGreen onClick={onclickLagePrimaryButton}>
          Lage Primary Button
          <FaChevronRight style={{ color: "black", marginLeft: "10px" }} />
        </LageBtnGreen>
        <MediumBtnGreen>Medium</MediumBtnGreen>
        <SmallBtnGreen>Small</SmallBtnGreen>
      </RowBox>
      <RowBox>
        <LageBtnRed onClick={onclickLageNegativeButton}>
          Lage Negative Button
          <FaRegBell
            style={{ color: "black", marginLeft: "10px", fontSize: "17px" }}
          />
          <Dot />
        </LageBtnRed>
        <MediumBtnRed>Medium</MediumBtnRed>
        <SmallBtnRed>Small</SmallBtnRed>
      </RowBox>
    </ColumnBox>
  );
}

export default Buttons;

const Dot = styled.span`
  background-color: rgb(235, 76, 76);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  right: 17px;
  top: 14px;
`;
