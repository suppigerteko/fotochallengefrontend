import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import TestAddDeleteGetUpdate from "./TestAPICalls";

export function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        margin: "20px",
      }}
    >
      <Menu
        inverted
        color="blue"
        borderless
        style={{
          flexShrink: 0,
          borderRadius: 0,
          margin: 0,
        }}
      >
        <Menu.Item as="h1" header>
          Foto Challenge
        </Menu.Item>
      </Menu>

      <div
        style={{
          margin: "20px",
        }}
      >
        <h1>Herzlich Willkommen</h1>
        <TestAddDeleteGetUpdate />
      </div>

      <Menu
        inverted
        color="blue"
        borderless
        style={{
          flexShrink: 0,
          borderRadius: 0,
          margin: 0,
        }}
      >
        <Menu.Item header>Roman Suppiger</Menu.Item>
      </Menu>
    </div>
  );
}
