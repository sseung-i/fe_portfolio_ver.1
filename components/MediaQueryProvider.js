import { useEffect, useState, createContext } from "react";
import { useMediaQuery } from "react-responsive";

export const TestContext = createContext({
  isDesktop: null,
  isLap: null,
  isTab: null,
});

export const IsResponsiveProvider = ({ children }) => {
  const [isMedia, setIsMedia] = useState({
    isDesktop: null,
    isLap: null,
    isTab: null,
  });

  const desktop = useMediaQuery({
    query: "(min-width:993px)",
  });

  const lap = useMediaQuery({
    query: "(min-width:620px) and (max-width:992px)",
  });

  const tab = useMediaQuery({
    query: "(max-width:619px)",
  });

  useEffect(() => {
    setIsMedia({
      isDesktop: desktop,
      isLap: lap,
      isTab: tab,
    });
  }, [desktop, lap, tab]);

  return (
    <TestContext.Provider value={{ ...isMedia }}>
      {children}
    </TestContext.Provider>
  );
};
