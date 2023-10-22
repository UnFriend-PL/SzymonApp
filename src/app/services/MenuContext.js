"use client";
import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState("Start");

  return (
    <MenuContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
