import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { UserIdContext } from "./context/auth";
import { FirstPage } from "./components/FirstPage";

export function App() {
  return (
    <UserIdContext>
      <FirstPage />
    </UserIdContext>
  );
}
