import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import { SignUp } from "./SignUp";

enum NavMenu {
  Home = "Home",
  Login = "Login",
  Register = "Register",
}

export function MainMenu() {
  const [menu, setMenu] = useState<NavMenu>(NavMenu.Home);
  return (
    <>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item onClick={() => setMenu(NavMenu.Home)}>Home</Menu.Item>
          <Menu.Item onClick={() => setMenu(NavMenu.Login)}>Login</Menu.Item>
          <Menu.Item onClick={() => setMenu(NavMenu.Register)}>
            Register
          </Menu.Item>
        </Container>
      </Menu>
      <Container style={{ marginTop: "4em" }}>
        <MainPage activePage={menu} />
      </Container>
    </>
  );
}

interface MainPageProps {
  activePage: NavMenu;
}
function MainPage(p: MainPageProps) {
  switch (p.activePage) {
    case NavMenu.Home:
      return null;
    case NavMenu.Login:
      return null;
    case NavMenu.Register:
      return <SignUp />;
  }
}
