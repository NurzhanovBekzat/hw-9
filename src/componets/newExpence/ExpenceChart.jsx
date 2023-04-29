import React from "react";
import ChartBar from "../ChartBar/ChartBar";
import styled from "styled-components";

export function ExpenceChart({ filteredYear }) {
  const months = [
    { label: "Jan", currentPrice: 0 },
    { label: "Feb", currentPrice: 0 },
    { label: "Mar", currentPrice: 0 },
    { label: "Apr", currentPrice: 0 },
    { label: "May", currentPrice: 0 },
    { label: "Jun", currentPrice: 0 },
    { label: "Jul", currentPrice: 0 },
    { label: "Aug", currentPrice: 0 },
    { label: "Sep", currentPrice: 0 },
    { label: "Oct", currentPrice: 0 },
    { label: "Nov", currentPrice: 0 },
    { label: "Dec", currentPrice: 0 },
  ];

  filteredYear.forEach((element) => {
    const as = new Date(element.date).getMonth();
    months[as].currentPrice += element.price;
  });

  return (
    <ContainerChartBar>
      {months.map((item) => {
        return (
          <div key={item.label}>
            <ChartBar item={item} months={months} />
          </div>
        );
      })}
    </ContainerChartBar>
  );
}
const ContainerChartBar = styled.div`
  background-color: #f8dfff;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
