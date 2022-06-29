import { useEffect, useState, createContext } from "react";
import { useMediaQuery } from "react-responsive";

export const TestContext = createContext({ isTab: null });

export const IsTabProvider = ({ children }) => {
  const [isTab, setIsTab] = useState(false);
  const tab = useMediaQuery({
    query: "(min-width:0px) and (max-width:960px)",
  });

  useEffect(() => {
    if (tab) {
      setIsTab(true);
    } else {
      setIsTab(false);
    }
  }, [tab]);

  return (
    <TestContext.Provider value={{ isTab }}>{children}</TestContext.Provider>
  );
};

// export function useIsDesktop() {
//   const [isDesktop, setIsDesktop] = useState(false);
//   const desktop = useMediaQuery({ query: "(min-width: 961px)" });

//   useEffect(() => {
//     if (desktop) setIsDesktop(desktop);
//   }, [desktop]);

//   return isDesktop;
// }
