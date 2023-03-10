import React, { useState } from "react";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";
function Select() {
  const [value1, setValue1] = useState("리액트");
  const [value2, setValue2] = useState("리액트");
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);

  const onClickAddHandler1 = (e) => {
    setValue1(e.target.value);
    setBtn1((prev) => !prev);
  };
  const onClickAddHandler2 = (e) => {
    setValue2(e.target.value);
    setBtn2((prev) => !prev);
  };
  return (
    <>
      <SelectPlace>
        <h1>Select</h1>
        <WrapBtn>
          <SeletorBox1>
            <StBtn
              onClick={() => {
                setBtn1((prev) => !prev);
              }}
            >
              <div>{value1}</div>
              <div>
                <FaCaretDown style={{ fontSize: "20px" }} />
              </div>
            </StBtn>
            <BtnGroup dp={btn1}>
              <SelectBtn
                onClick={onClickAddHandler1}
                name="리액트"
                value="리액트"
              >
                리액트
              </SelectBtn>
              <SelectBtn onClick={onClickAddHandler1} name="자바" value="자바">
                자바
              </SelectBtn>
              <SelectBtn
                onClick={onClickAddHandler1}
                name="스프링"
                value="스프링"
              >
                스프링
              </SelectBtn>
              <SelectBtn
                onClick={onClickAddHandler1}
                name="리액트네이티브"
                value="리액트네이티브"
              >
                리액트네이티브
              </SelectBtn>
            </BtnGroup>
          </SeletorBox1>
          <SeletorBox2>
            <StBtn
              onClick={() => {
                setBtn2((prev) => !prev);
              }}
            >
              <div>{value2}</div>
              <div>
                <FaCaretDown style={{ fontSize: "20px" }} />
              </div>
            </StBtn>
            <BtnGroup dp={btn2}>
              <SelectBtn
                onClick={onClickAddHandler2}
                name="리액트"
                value="리액트"
              >
                리액트
              </SelectBtn>
              <SelectBtn onClick={onClickAddHandler2} name="자바" value="자바">
                자바
              </SelectBtn>
              <SelectBtn
                onClick={onClickAddHandler2}
                name="스프링"
                value="스프링"
              >
                스프링
              </SelectBtn>
              <SelectBtn
                onClick={onClickAddHandler2}
                name="리액트네이티브"
                value="리액트네이티브"
              >
                리액트네이티브
              </SelectBtn>
            </BtnGroup>
          </SeletorBox2>
        </WrapBtn>
      </SelectPlace>
    </>
  );
}

export default Select;

const SelectPlace = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  margin-top: 50px;
  overflow: visible;
`;
const WrapBtn = styled.div`
  display: flex;
  gap: 10px;
  height: 119px;
  overflow: visible;
`;

const StBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 28px;
  border: 1px solid rgb(221, 221, 221);
  background-color: white;
  min-height: 40px;
  width: 300px;
  border-radius: 12px;
`;

const SeletorBox1 = styled.div`
  display: flex;
  flex-direction: column;
  overflow: visible;
  gap: 10px;
  height: fit-content;
`;

const SeletorBox2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
`;

const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  padding: 10px;
  font-size: 13px;
  background-color: white;
  border-radius: 12px;
  display: ${(props) => (props.dp ? "block" : "none")};
`;

const SelectBtn = styled.button`
  display: flex;
  padding: 10px 0px;
  margin: 0;
  cursor: text;
  border: none;
  background-color: transparent;
  width: 100%;
  &:hover {
    background-color: rgb(221, 221, 221);
  }
`;
