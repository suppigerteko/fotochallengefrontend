import * as React from "react";
import { Container, Menu } from "semantic-ui-react";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { useState } from "react";
import { Home } from "./HomeNotAuthenticated";

enum NavMenu {
  Home = "Home",
  Login = "Login",
  Register = "Register",
}

interface NotAuthenticatedProps {}

export function NotAuthenticated(p: NotAuthenticatedProps) {
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
        <MainPage
          activePage={menu}
          openLogin={() => setMenu(NavMenu.Login)}
          openRegister={() => setMenu(NavMenu.Register)}
        />
      </Container>
    </>
  );
}

export interface MainPageProps {
  activePage: NavMenu;
  openLogin: () => void;
  openRegister: () => void;
}
function MainPage(p: MainPageProps) {
  switch (p.activePage) {
    case NavMenu.Home:
      return <Home {...p} />;
    case NavMenu.Login:
      return <Login />;
    case NavMenu.Register:
      return <SignUp />;
  }
}
