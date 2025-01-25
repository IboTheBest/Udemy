import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const TokenContext = ({ children }) => {
  const [token, setToken] = useState(JSON.parse( localStorage.getItem("token")) || null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/users").then((res) => setUsers(res.data));
  }, [])

localStorage.setItem("token" ,JSON.stringify(token))
  return (
    <Context.Provider value={{ users, setUsers, token, setToken }}>
      {children}
    </Context.Provider>
  );
};