import React, { createContext, useState } from "react";

const initialState = {
  user: null,
  setUser: () => {},
};

export const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
