/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
}
