import { RouterProvider } from "react-router";
import { RootStoreProvider } from "@shared";
import { rootStore } from "@shared";
import { LayoutProvider } from "./layout";
import { router } from "./router";

export const App = () => {
  return (
    <RootStoreProvider rootStore={rootStore}>
      <LayoutProvider>
        <div style={{ width: "576px" }}>
          <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
        </div>
      </LayoutProvider>
    </RootStoreProvider>
  );
};
