import { GamePage } from "@pages";
import { RootStoreProvider } from "@shared";
import { rootStore } from "@shared";
// import { LayoutProvider } from "./layout";

export const App = () => {
  return (
    // <LayoutProvider>

    // {/* <StartingPage /> */}
    <RootStoreProvider rootStore={rootStore}>
      <GamePage />
    </RootStoreProvider>
    // </LayoutProvider>
  );
};
