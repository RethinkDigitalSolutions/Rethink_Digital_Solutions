import React, { createContext, useContext, useState, useEffect } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [homeContent, setHomeContent] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isReady, setIsReady] = useState(false); // FIX FLASH

  useEffect(() => {
    const visited = sessionStorage.getItem("hasVisited");

    if (visited) {
      setHasVisited(true);
      setHomeContent(true);
    }
      setIsReady(true);
  }, []);

  const markVisited = () => {
    sessionStorage.setItem("hasVisited", "true");
    setHasVisited(true);
  };

  return (
    <LoaderContext.Provider
      value={{ homeContent, setHomeContent, hasVisited, markVisited, isReady, setHasVisited }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
