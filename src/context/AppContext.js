import { useContext, createContext } from "react";

// hooks
import useEagerConnect from 'hooks/useEagerConnect';
import useInactiveListener from 'hooks/useInactiveListener';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  return (
    <AppContext.Provider
      value={{}}
    >
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => useContext(AppContext);