import React, { createContext, useState } from "react";

const initialState = {
  user: null,
  setUser: () => {},
  name: "Mom!",
  setName: () => {}
};

export const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser, name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
