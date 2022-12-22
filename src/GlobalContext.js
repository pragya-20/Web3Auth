import React, { createContext, useState } from "react";

// Global context object to access values
const userContext = createContext();

// Global context provider
const GlobalUserProvider = ({ children }) => {
  const [user, setUser] = useState([null]);
  const [val1, setVal1] = useState(0);
  //   const [vehicle, setVehicle] = useState([]);

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        val1,
        setVal1,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export { userContext, GlobalUserProvider };
