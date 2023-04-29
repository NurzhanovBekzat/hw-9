import { Input } from "../Inputs/Input";
import styled from "styled-components";

export function ExpensesForm({
  onClick,
  addNewExpence,
  dateChangeHandler,
  priceChangeHandler,
  titleChangeHandler,
  value,
  price,
  date,
}) {
  return (
    <>
      <ContainerInput>
        <ContainerInput2>
          <Input
            onChange={titleChangeHandler}
            value={value}
            id="1"
            children="Заголовок"
            type="text"
          />
          <Input
            onChange={priceChangeHandler}
            value={price}
            id="3"
            children="Цена"
            type="number"
          />
        </ContainerInput2>
        <ContDate>
          <Input
            onChange={dateChangeHandler}
            value={date}
            id="2"
            children="Датировать"
            type="date"
          />
        </ContDate>
        <ConAddCnl>
          <BtnCnl onClick={onClick}>Отмена</BtnCnl>
          <BtnAdd onClick={addNewExpence}>Добавить расходы</BtnAdd>
        </ConAddCnl>
      </ContainerInput>
    </>
  );
}

const ContainerInput = styled.div`
  background-color: #ad9be9;
  width: 780px;
  height: 300px;
  padding-bottom: 20px;
  border-radius: 12px;
`;
const ContainerInput2 = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
`;
const BtnAdd = styled.button`
  background-color: #4a026b;
  width: 186px;
  height: 51px;
  border-radius: 10px;
  color: #fff;
  border: 0;
  margin-right: 25px;
  margin-top: -30px;
`;
const BtnCnl = styled.button`
  width: 97px;
  height: 51px;
  border-radius: 10px;
  background-color: #4a026b;
  color: #fff;
  border: 0;
  margin-right: 14px;
  margin-top: -30px;
`;
const ConAddCnl = styled.div`
  display: flex;
  justify-content: end;
`;

const ContDate = styled.div`
  display: flex;
  padding: 50px 25px;

`;
