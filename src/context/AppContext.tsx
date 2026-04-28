/* eslint-disable react-refresh/only-export-components */
import {
	createContext,
	useContext,
	useState,
	type PropsWithChildren,
} from 'react';



type AppContextValue = {
  message: string;
  setMessage: (value: string) => void;
  resetMessage: () => void;
  count: number;
  increment: () => void;
  decrement: () => void;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

const defaultMessage = 'YA?';

console.log("funciona?")
export function AppContextProvider({ children }: PropsWithChildren) {
  const [message, setMessage] = useState(defaultMessage);
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider
      value={{
        message,
        setMessage,
        resetMessage: () => setMessage(defaultMessage),
        count,
        increment: () => setCount(count + 1),
        decrement: () => setCount(count - 1),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}


export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de AppContextProvider');
  }
  return context;
}

