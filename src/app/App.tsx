import { RootStoreProvider } from "@shared";
import { rootStore } from "@shared";
import { LayoutProvider } from "./layout";
import { RouterProvider } from "react-router";
import { router } from "./router";

export const App = () => {
  return (
    <LayoutProvider>
      <RootStoreProvider rootStore={rootStore}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </RootStoreProvider>
    </LayoutProvider>
  );
};
