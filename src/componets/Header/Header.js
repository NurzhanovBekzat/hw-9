import React from "react";
import styled from "styled-components";

export const Header = ({lagoutHandler,expensesHandler,userPagesHandler, isLogin }) => {
  return (
    <HeaderStyle>
      {isLogin ? (
        <>
          <Button onClick={expensesHandler}>Expenses</Button>
          <Button onClick={userPagesHandler}>Uers</Button>
          <Button onClick={lagoutHandler}>Lagout</Button>
        </>
      ) : null}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  background-color: #ad9be9;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  height: 80px;
  margin-bottom: 10px;
  border-radius: 12px;
  width: 100%;
  height:100px;
  position: fixed;
  left: 0px;
  top: 0px;
`;

const Button = styled.button`
  background-color: #4a026b;
  padding: 7px;
  color: white;
  border-radius: 9px;
  margin-left: 4px;
`;
