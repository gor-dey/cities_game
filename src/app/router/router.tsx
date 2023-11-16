import { createBrowserRouter } from "react-router-dom";
import { FinishPage, GamePage, NotFoundPage, StartingPage } from "@pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return <StartingPage />;
    },
  },
  {
    path: "/game",
    Component() {
      return <GamePage />;
    },
  },
  {
    path: "/finish",
    Component() {
      return <FinishPage />;
    },
  },
  {
    path: "*",
    Component() {
      return <NotFoundPage />;
    },
  },
]);
