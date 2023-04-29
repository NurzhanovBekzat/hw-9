import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./componets/Header/Header";
import { Login } from "./componets/login/Login";
import { NewExpence } from "./componets/newExpence/NewExpence";
import { Users } from "./componets/Users/Users";

function App() {
  const [isLogin, setLogin] = useState(localStorage.getItem("LOGIN") || false);
  const [pages, setPages] = useState(true);
  const [expence, setExpence] = useState(
    JSON.parse(localStorage.getItem("EXPENSES")) || [
      {
        title: "Sumsung",
        price: 1500,
        date: "2023-03-12",
        id: "1",
      },
    ]
  );

  const userPagesHandler = () => {
    setPages(false);
  };

  const expensesHandler = () => {
    setPages(true);
  };
  useEffect(() => {
    localStorage.setItem("EXPENSES", JSON.stringify(expence));
  }, [expence]);

  const lagoutHandler = () => {
    setLogin(false);
    setPages(true);
    localStorage.removeItem("LOGIN");
  };

  const loginHandler = () => {
    setLogin(true);
    localStorage.setItem("LOGIN", !isLogin);
  };

  return (
    <div className="App">
      {/* <NewExpence /> */}
      <Header expensesHandler={expensesHandler} userPagesHandler={userPagesHandler} lagoutHandler={lagoutHandler} isLogin={isLogin} />
      {isLogin ? (
        pages ? (
          <NewExpence setExpence={setExpence} expence={expence} />
        ) : (
          <Users />
        )
      ) : (
        <Login loginHandler={loginHandler} />
      )}
    </div>
  );
}
export default App;
