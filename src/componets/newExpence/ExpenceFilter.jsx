import React from "react";
import styled from "styled-components";

export default function Expence({
  setExpence,
  price,
  getValue,
  select,
}) {
  const verx = () => {
    setExpence([
      ...price.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      }),
    ]);
  };
  const vniz = () => {
    setExpence([
      ...price.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      }),
    ]);
  };

  return (
    <div>
      <Filt>
        <FiltBtn>
          <Vniz onClick={vniz}>По убыванию</Vniz>
          <Vniz  onClick={verx}>По возрастанию</Vniz>
        </FiltBtn>
        <Selct name="" value={select} onChange={getValue}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </Selct>
      </Filt>
    </div>
  );
}
const Filt = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`
const FiltBtn = styled.div`
  display: flex;
  gap: 20px;
`
const Vniz = styled.button`
  height: 30px;
  border-radius: 10px;
  border: 0;
  transition: 0.5s;

`
const Selct = styled.select`
  width: 90px;
  border-radius: 12px;
`