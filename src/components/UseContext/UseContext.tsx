import React, { useState, createContext } from "react";
import Login from "./Login/Login";
import User from "./User/User";

export const AppContext = createContext(null);

const UseContext = () => {
  const [username, setUsername] = useState("");
  return (
    <>
      <h3>UseContext Hook</h3>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login />
        <User />
      </AppContext.Provider>
    </>
  );
};

export default UseContext;
