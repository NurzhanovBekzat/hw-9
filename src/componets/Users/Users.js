import React, { useEffect, useState } from "react";

export const Users = () => {
  const [usersData, setUsersData] = useState([]);

  const UsersDataFunc = async () => {
    const url = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await url.json();
    setUsersData(data);
  };

useEffect(()=> {
    UsersDataFunc()
},[])

  return <div>{usersData.map((el) => {
    return(
        <div key={el.el}>
            <fieldset>{el.name}</fieldset>
        </div>
    )
  })}</div>;
};
