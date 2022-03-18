import React from "react";

const scrollportContext = React.createContext({});

export const useScrollport = () => {
  const { triggered } = React.useContext(scrollportContext);
  return { triggered };
};

const ScrollportProvider = ({ children }) => {
  const [triggered, setTriggered] = React.useState(false);
  const handleWindowScroll = () => {};

  React.useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <scrollportContext.Provider value={{ triggered }}>
      {children}
    </scrollportContext.Provider>
  );
};

export default ScrollportProvider;
