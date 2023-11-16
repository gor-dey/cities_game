import React, { createContext, useContext, ReactNode } from "react";
import { rootStore } from "@shared";
type RootStore = typeof rootStore;

const RootStoreContext = createContext<RootStore | null>(null);

interface RootStoreProviderProps {
  children: ReactNode;
  rootStore: RootStore;
}

export const RootStoreProvider: React.FC<RootStoreProviderProps> = ({
  children,
  rootStore,
}) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStore = (): RootStore => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error("useStore must be used within a RootStoreProvider");
  }
  return store;
};
