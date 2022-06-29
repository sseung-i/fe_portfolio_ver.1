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

  const { isDesktop, isLap, isTab } = isMedia;

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
    if (desktop) {
      setIsMedia({
        isDesktop: true,
        isLap: false,
        isTab: false,
      });
    } else if (lap) {
      setIsMedia({
        isDesktop: false,
        isLap: true,
        isTab: false,
      });
    } else if (tab) {
      setIsMedia({
        isDesktop: false,
        isLap: false,
        isTab: true,
      });
    } else {
      return;
    }
  }, [desktop, lap, tab]);

  return (
    <TestContext.Provider value={{ isDesktop, isLap, isTab }}>
      {children}
    </TestContext.Provider>
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
