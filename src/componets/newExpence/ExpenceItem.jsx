import styled from "styled-components";

const ExpenceItem = ({ item, globalData, setExpence }) => {
  const dateMonth = new Date(item.date).toLocaleString("en-US", {
    month: "long",
  });
  const dateFullYear = new Date(item.date).getFullYear();
  const dat = new Date(item.date).getDate();
  const deleteHandler = (id) => {
    const filteredArray = globalData.filter((item) => item.id !== id);
    setExpence(filteredArray);
  };
  return (
    <ContainerValue>
      <ContValue2>
        <Datee>
          <span>{dateMonth}</span>
          <br />
          <span>{dateFullYear}</span>
          <br />
          <span>{dat}</span>
        </Datee>
        <TitleValue>{item.title}</TitleValue>
      </ContValue2>
      <ConPrice>
        <Price>{item.price} $</Price>
        <PriceBtnDelete onClick={() => deleteHandler(item.id)}>
          DELETE
        </PriceBtnDelete>
      </ConPrice>
    </ContainerValue>
  );
};

export default ExpenceItem;

const ContainerValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 760px;
  height: 135px;
  background: #4b4b4b;
  border-radius: 12px;
  margin-top: 20px;
`;

const ContValue2 = styled.div`
  display: flex;
  align-items: center;
`;
const Datee = styled.div`
  text-align: center;
  width: 115px;
  height: 105px;
  background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-weight: 700;
  font-size: 19px;
  color: #ffffff;
  padding: 15px;
  margin-left: 18px;
`;
const ConPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 20px;
`;
const TitleValue = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
  margin-left: 14px;
`;
const Price = styled.p`
  padding: 10px 20px;
  height: 44px;
  background: #40005d;
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 17px;
  color: #ffffff;
`;
const PriceBtnDelete = styled.button`
  padding: 10px 20px;
  height: 44px;
  background: #40005d;
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  color: #ffffff;

`;
