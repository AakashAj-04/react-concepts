import React, { useContext } from "react";
import { AppContext } from "../UseContext";
type userProps ={
    userName:string
}
const User = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>User :{username} </h1>
    </div>
  );
};

export default User;
