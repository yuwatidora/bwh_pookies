import React, { createContext, useState } from "react";

const initialState = {
  activeMood: [],
  setSelectedMood: () => {},
  activeSymptoms: [],
  setSelectedSymptoms: () => {}
  
};

export const SympContext = createContext(initialState);

const SympProvider = ({ children }) => {
  const [activeMood, setSelectedMood] = useState([]);
  const [activeSymptoms, setSelectedSymptoms] = useState([]);

  return (
    <SympContext.Provider value={{ activeMood, setSelectedMood, activeSymptoms, setSelectedSymptoms }}>
      {children}
    </SympContext.Provider>
  );
};

export default SympProvider;
