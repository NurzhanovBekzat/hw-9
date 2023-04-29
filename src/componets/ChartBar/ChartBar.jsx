import React from "react";
import styled from "styled-components";

function ChartBar({ item }) {
  const maxPriceForMonth = 2000;
  const percent = (item.currentPrice * 100) / maxPriceForMonth;

  return (
    <>
      <div>
        <Percent>
          <Per style={{ height: percent }}></Per>
        </Percent>
        <div>{item.label}</div>
      </div>
    </>
  );
}

export default ChartBar;


const Percent = styled.div`
  background-color: #a892ee;
  height: 100.4px;
  width: 20px;
  border-radius: 12px;
  overflow: hidden;
  
  `;
const Per = styled.div`
  background-color: #4826b9;
  transition: 3s;
`;