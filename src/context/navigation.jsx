////// here is what we need by default to create context bedfore passing the states and data needed ///////

// import { createContext } from "react";

// const NavigationContext = createContext();

// function NavigationProvider({ children }) {
//   return (
//     <NavigationContext.Provider value={{}}>
//       {children}
//     </NavigationContext.Provider>
//   );
// }

// export { NavigationProvider };
// export default NavigationContext;

////// Above is what we need by default to create context bedfore passing the states and data needed ///////

import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    //clean up
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      {/* <div>
        <button onClick={() => navigate("/accordion")}>Accordion</button>
      </div>
      <div>
        <button onClick={() => navigate("/dropdown")}>Dropdown</button>
      </div> */}
      {/* {currentPath} */}
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
