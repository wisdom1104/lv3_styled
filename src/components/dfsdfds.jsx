import { useState } from "react";
import styled from "styled-components";

function Test() {
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(true);
  return (
    <Wrap>
      <h1>Select</h1>
      <WrapBtn>
        <BtnGroup_1>
          <Btn
            onClick={() => {
              setBtn1((prev) => !prev);
            }}
          >
            <div>자바</div>
            <div>▼</div>
          </Btn>
          <List dp={btn1}>클릭하며 나옴</List>
        </BtnGroup_1>
        <BtnGroup_2>
          <Btn
            onClick={() => {
              setBtn2((prev) => !prev);
            }}
          >
            <div>자바</div>
            <div>▼</div>
          </Btn>
          <List dp={btn2}>클릭하며 나옴</List>
        </BtnGroup_2>
      </WrapBtn>
    </Wrap>
  );
}

export default Test;

const Wrap = styled.div`
  width: 1100px;
  border: 2px solid gray;
  margin: 20px;
  overflow: visible;
`;

const WrapBtn = styled.div`
  display: flex;
  gap: 10px;
  height: 62px;
  overflow: visible;
`;

const Btn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`;

const BtnGroup_1 = styled.div`
  display: flex;
  flex-direction: column;
  overflow: visible;
  height: fit-content;
`;
const BtnGroup_2 = styled.div`
  display: flex;
  flex-direction: column;
  /* height: fit-content; */
  overflow: hidden;
`;

const List = styled.ul`
  height: 400px;
  border: 1px solid black;
  background-color: white;
  display: ${(props) => (props.dp ? "block" : "none")};
`;
