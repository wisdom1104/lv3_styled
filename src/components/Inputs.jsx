import React, { useState } from "react";
import styled from "styled-components";
import { SmallBtnGreen } from "../GlobalStyles";

function Inputs() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const nameChangHandler = (setName, e) => {
    setName(e.target.value);
  };
  const priceChangHandler = (setPrice, e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // 입력값이 숫자가 아니면 공백
    e.target.value = e.target.value.replace(/,/g, ""); // ,값 공백처리
    e.target.value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 정규식을 이용해서 3자리 마다 , 추가
    setPrice(e.target.value);
  };

  const clickSetHandler = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("이름과 가격 모두 입력해주세요.");
      return;
    }

    alert(`{name: ${name}, price: ${price}}`);
  };

  return (
    <>
      <h1>Input</h1>
      <InputPlace>
        <div>
          <label>이름</label>
          <StInput
            type="text"
            value={name}
            onChange={(event) => nameChangHandler(setName, event)}
          />
        </div>
        <div>
          <label>가격</label>
          <StInput
            type="text"
            value={price}
            onChange={(event) => priceChangHandler(setPrice, event)}
          />
        </div>
        <SmallBtnGreen onClick={clickSetHandler}>저장</SmallBtnGreen>
      </InputPlace>
    </>
  );
}

export default Inputs;

//input

const InputPlace = styled.form`
  display: flex;
  gap: 30px;
`;

const StInput = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  &:focus {
    border: 2px solid rgb(51, 51, 51);
  }
`;
