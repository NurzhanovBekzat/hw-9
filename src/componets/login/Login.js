import React, { useState } from "react";
import { Input } from "../Inputs/Input";
import styled from "styled-components";

export const Login = ({ loginHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [emailvalid, setEmailvalid] = useState();
  const [passwordValid, setpasswordValid] = useState();
  const [formValid, setFormIsValud] = useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    setFormIsValud(e.target.value.includes("@") && password.trim().length > 6);
  };

  const passwordChangeHandler = (e) => {
    setpassword(e.target.value);
    setFormIsValud(e.target.value.trim().length > 6 && email.includes("@"));
  };

  const onBlurEmail = () => {
    setEmailvalid(email.includes("@"));
  };

  const onBlurPassword = () => {
    setpasswordValid(password.trim().length > 6);
  };

  const loginandClearHandler= () => { 
    loginHandler();
    setEmail("");
    setpassword("")
   }
  return (
    <CardInputLogin>
      <ParewntUI>
        <label style={{ marginRight: "36px" }}>E-Mail</label>
        <Input
          onChange={emailChangeHandler}
          value={email}
          type="email"
          id="email"
          onBlur={onBlurEmail}
          className={emailvalid === false ? "errorRedE" : ""}
        />
      </ParewntUI>
      <ParewntUI>
        <label style={{ marginRight: "10px" }}>Password</label>
        <Input
          onChange={passwordChangeHandler}
          value={password}
          type="password"
          id="password"
          bacground="#0ef0dd68"
          onBlur={onBlurPassword}
          className={passwordValid === false ? "errorRedP" : ""}
        />
      </ParewntUI>
      <Button onClick={loginandClearHandler} disabled={!formValid}>LOGIN</Button>
    </CardInputLogin>
  );
};

const CardInputLogin = styled.div`
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.258);
  border-radius: 10px;
  padding: 24px;
  margin-top: 10px;
  margin-top: 20px; 
`;
const ParewntUI = styled.div`
  display: flex;
  margin-top: 10px;

  .errorRedE {
    border: 1px solid #fe4444;
    background-color: #fcdada;
  }

  .errorRedP {
    border: 1px solid #fe4444;
    background-color: #fcdada;
  }
`;
const Button = styled.button`
  padding: 7px;
  background-color: #4a026b;
  color: white;
  border-radius: 9px;
  margin-left: 200px;
  margin-top: 10px;

  :disabled {
    background-color: #4a026b9f;
  }
`;
