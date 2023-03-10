import React, { useState } from "react";
import {
  LageBtnRed,
  RowBox,
  SmallBtnGreen,
  SmallBtnRed,
} from "../GlobalStyles";
import styled from "styled-components";

function Modals() {
  let [modal1, setModal1] = useState(false);
  let [modal2, setModal2] = useState(false);
  // onClick={()=>{setModal(!modal}}
  return (
    <>
      <h1>Modal</h1>
      <RowBox>
        <SmallBtnGreen
          onClick={() => {
            setModal1(true);
          }}
        >
          open modal
        </SmallBtnGreen>
        <LageBtnRed
          onClick={() => {
            setModal2(true);
          }}
        >
          open modal
        </LageBtnRed>
      </RowBox>
      {
        modal1 == true ? (
          <ModalBackground>
            <Modal1>
              <span>
                닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
                않아요.
              </span>
              <BtnBox>
                <SmallBtnRed
                  onClick={() => {
                    setModal1(!modal1);
                  }}
                >
                  닫기
                </SmallBtnRed>
                <SmallBtnGreen>확인</SmallBtnGreen>
              </BtnBox>
            </Modal1>
          </ModalBackground>
        ) : null //기계역할
      }
      {
        modal2 == true ? (
          <ModalBackground
            onClick={() => {
              setModal2(!modal2);
            }}
          >
            <Modal2 onClick={(e) => e.stopPropagation()}>
              <div>
                닫기 버튼 1개가 있고,
                <br />
                외부 영역을 누르면 모달이 닫혀요.
              </div>
              <CircleBtn
                onClick={() => {
                  setModal2(!modal2);
                }}
              >
                X
              </CircleBtn>
            </Modal2>
          </ModalBackground>
        ) : null //기계역할
      }
    </>
  );
}

export default Modals;

export const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(221, 221, 221, 0.8);
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 50;
`;

const Modal1 = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  width: 500px;
  height: 300px;
`;
const Modal2 = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  padding: 24px;
  background-color: rgb(255, 255, 255);
  width: 300px;
  height: 200px;
`;

const BtnBox = styled.div`
  position: absolute;
  display: flex;
  gap: 5px;
  bottom: 12px;
  right: 12px;
`;

const CircleBtn = styled.button`
  border: 1px solid rgb(221, 221, 221);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  &:hover {
    border: 1px solid rgb(0, 0, 0);
  }
`;
